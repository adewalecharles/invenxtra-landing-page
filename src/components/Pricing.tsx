import { useState, useEffect } from 'react';
import { Check, Loader2, AlertCircle } from 'lucide-react';

interface Feature {
  key: string;
  label: string;
  description: string;
  group: string;
}

interface Price {
  amount: number;
  currency: string;
  display_amount: string;
}

interface Pricing {
  monthly: Price;
  yearly: Price;
}

interface Plan {
  id: number;
  name: string;
  slug: string;
  pricing: Pricing;
  features: Feature[];
  is_custom: boolean;
  desc?: string; // Optional description
}

interface PlansData {
  [key: string]: Plan[];
}

export default function Pricing() {
  const [plansData, setPlansData] = useState<PlansData | null>(null);
  const [selectedType, setSelectedType] = useState<string>('');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string>('GH');
   const TEST_API_URL = import.meta.env.VITE_TEST_API_URL;
  const LIVE_API_URL = import.meta.env.VITE_LIVE_API_URL;
  const APP_ENV = import.meta.env.VITE_APP_ENV;

  const url = `${['development', 'staging'].includes(APP_ENV)
    ? TEST_API_URL
    : LIVE_API_URL}`;

  useEffect(() => {
    const initPricing = async () => {
      try {
        setLoading(true);
        // Step 1: Detect User Location
        const geoResponse = await fetch('https://ipapi.co/json/');
        const geoData = await geoResponse.json();
        const code = geoData.country_code || 'NG';
        setCountryCode(code);

        // Step 2: Fetch Pricing Plans
        await fetchPlans(code);
      } catch (err) {
        console.error('Initialization error:', err);
        // Fallback to default country if geo detection fails
        await fetchPlans('NG');
      }
    };

    initPricing();
  }, []);

  const fetchPlans = async (code: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}/api/v1/plans?country_code=${code}`);
      if (!response.ok) throw new Error('Failed to fetch pricing plans');
      
      const result = await response.json();
      if (result.status === 'success') {
        setPlansData(result.data);
        // Set initial selected type to the first available key
        const types = Object.keys(result.data);
        if (types.length > 0) {
          setSelectedType(types[0]);
        }
        setError(null);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Unable to load pricing. Please try again later.');
      console.error('Fetch plans error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchPlans(countryCode);
  };

  if (loading) {
    return (
      <section id="pricing" className="py-24 bg-surface">
        <div className="section-container text-center">
          <Loader2 className="w-12 h-12 text-brand animate-spin mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Loading pricing plans...</p>
        </div>
      </section>
    );
  }

  if (error || !plansData) {
    return (
      <section id="pricing" className="py-24 bg-surface">
        <div className="section-container text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-gray-500 mb-6">{error}</p>
          <button 
            onClick={handleRetry}
            className="px-6 py-2 bg-brand text-white rounded-lg font-bold hover:bg-brand-dark transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  const businessTypes = Object.keys(plansData);
  const currentPlans = plansData[selectedType] || [];

  return (
    <section id="pricing" className="py-16 bg-surface">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Pricing plans</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500">Choose the perfect plan for your business. Upgrade or downgrade anytime.</p>
        </div>

        {/* Business Type Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {businessTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all capitalize ${
                selectedType === type
                  ? 'bg-brand text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
            className="w-14 h-7 bg-gray-200 rounded-full relative p-1 transition-colors hover:bg-gray-300"
          >
            <div className={`w-5 h-5 bg-brand rounded-full transition-transform ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>
            Yearly <span className="text-green-500 text-xs font-medium ml-1">Save 20%</span>
          </span>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {currentPlans.map((plan) => {
            const priceInfo = plan.pricing[billingCycle];
            const isGrowth = plan.slug === 'growth' || plan.name.toLowerCase().includes('growth'); // Highlight heuristic

            return (
              <div 
                key={plan.id} 
                className={`relative bg-white p-10 rounded-3xl border ${isGrowth ? 'border-brand ring-4 ring-brand/10' : 'border-gray-100'} flex flex-col h-full shadow-sm hover:shadow-md transition-shadow`}
              >
                {isGrowth && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-6 min-h-[40px]">
                    {plan.desc || `Perfect for ${selectedType} businesses looking to scale.`}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {priceInfo.display_amount}
                    </span>
                    <span className="text-gray-500 font-medium capitalize">/{billingCycle.replace('ly', '')}</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-xs text-gray-400 mt-1">Billed annually</p>
                  )}
                </div>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature.key} className="flex gap-3 items-start text-sm">
                      <Check className="w-5 h-5 text-brand shrink-0" />
                      <div>
                        <span className="text-gray-900 font-bold block leading-tight">{feature.label}</span>
                        <span className="text-gray-500 text-xs">{feature.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  isGrowth 
                  ? 'bg-brand text-white hover:bg-brand-dark' 
                  : 'bg-white text-brand border border-brand hover:bg-brand-muted'
                }`}>
                  {plan.is_custom ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
