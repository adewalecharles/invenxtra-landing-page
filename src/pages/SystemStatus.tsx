import React, { useEffect } from 'react';
import { CheckCircle2, Activity, Clock } from 'lucide-react';

const SystemStatus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const systems = [
    { name: 'Core API', status: 'Operational', uptime: '99.99%' },
    { name: 'Inventory Sync', status: 'Operational', uptime: '99.95%' },
    { name: 'POS Service', status: 'Operational', uptime: '100%' },
    { name: 'AI Insights Engine', status: 'Operational', uptime: '99.90%' },
    { name: 'Web Dashboard', status: 'Operational', uptime: '99.98%' },
    { name: 'Mobile App API', status: 'Operational', uptime: '99.97%' },
  ];

  const incidents = [
    { date: 'May 5, 2026', title: 'Planned Maintenance', status: 'Resolved', desc: 'Routine database optimization and security updates were successfully completed.' },
    { date: 'April 28, 2026', title: 'Slow Performance on AI Engine', status: 'Resolved', desc: 'Resolved a temporary bottleneck in the smart recommendation engine.' },
  ];

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-12 text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Systems Operational</h1>
          <p className="text-gray-500">Last updated: May 9, 2026 - 14:30 UTC</p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-12">
          <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Current Status</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Activity className="w-4 h-4" />
              Live Uptime
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {systems.map((system, idx) => (
              <div key={idx} className="px-8 py-5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-gray-900">{system.name}</span>
                  <p className="text-xs text-gray-400">30-day uptime: {system.uptime}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-green-600">{system.status}</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-gray-400" />
            Past Incidents
          </h2>
          <div className="space-y-6">
            {incidents.map((incident, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-gray-400 font-medium">{incident.date}</span>
                    <h3 className="text-lg font-bold text-gray-900">{incident.title}</h3>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {incident.status}
                  </span>
                </div>
                <p className="text-gray-600">{incident.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500">Subscribe to updates via <a href="#" className="text-brand font-semibold">RSS Feed</a> or <a href="#" className="text-brand font-semibold">Email Alerts</a></p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
