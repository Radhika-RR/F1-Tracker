
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

interface GaugeChartProps {
  value: number;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({ value }) => {
  const data = [{ name: 'Probability', value: value }];
  const color = value > 66 ? '#10B981' : value > 33 ? '#F59E0B' : '#EF4444';

  return (
    <div className="relative w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="90%"
          data={data}
          startAngle={180}
          endAngle={0}
          barSize={30}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            angleAxisId={0}
            fill={color}
            cornerRadius={15}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-extrabold" style={{ color }}>{value}%</span>
        <span className="text-lg text-gray-400">Podium Finish</span>
      </div>
    </div>
  );
};
