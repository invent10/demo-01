import React from 'react';
import { Users, BookOpen, GraduationCap, Building2, FlaskConical } from 'lucide-react';

const MetricsPanel = () => {
  const metrics = [
    { label: 'Students', value: '1100+', icon: Users },
    { label: 'Publications', value: '537+', icon: BookOpen },
    { label: 'Faculty', value: '69+', icon: GraduationCap },
    { label: 'Staff', value: '130+', icon: Building2 },
    { label: 'Research Scholars', value: '200+', icon: FlaskConical },
  ];

  return (
    <section className="py-12 bg-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-white" />
                <p className="mt-4 text-3xl font-extrabold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-red-100">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsPanel;