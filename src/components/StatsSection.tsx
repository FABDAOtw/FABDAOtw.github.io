import React from 'react';
import { StatsCard } from './StatsCard';
export function StatsSection() {
  const stats = [{
    label: 'PROJECTS',
    value: '56'
  }, {
    label: 'HYPERCERTS',
    value: '24'
  }, {
    label: 'PARTICIPANTS',
    value: '1,032'
  }, {
    label: 'FUNDING (USD)',
    value: '$4,200,000'
  }];
  return <section className="w-full px-4 md:px-5 lg:px-6 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
        {stats.map((stat, index) => <StatsCard key={index} label={stat.label} value={stat.value} />)}
      </div>
    </section>;
}