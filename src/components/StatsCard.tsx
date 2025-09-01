import React from 'react';
interface StatsCardProps {
  label: string;
  value: string;
}
export function StatsCard({
  label,
  value
}: StatsCardProps) {
  return <div className="bg-[#F5F5F5] rounded-lg p-6 shadow-sm">
      <div className="text-sm font-medium text-[#1A3C40] mb-1">{label}</div>
      <div className="text-3xl font-bold text-[#1A3C40]">{value}</div>
    </div>;
}