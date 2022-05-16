import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Community Airdrop', 'Market Sale', 'Pre-Sale', 'Development', 'Marketing'],
  datasets: [
    {
      label: 'DISTRIBUZIONE SUPPLY',
      data: [30, 30, 10, 10, 20],
      backgroundColor: [
        'rgba(255,227,37, 0.5)',
        'rgba(247,75,34, 0.5)',
        'rgba(246,57,144, 0.5)',
        'rgba(171,60,148, 0.5)',
        'rgba(35,52,130, 0.5)',
      ],
      borderColor: [
        'rgba(255,227,37, 1)',
        'rgba(247,75,34, 1)',
        'rgba(246,57,144, 1)',
        'rgba(171,60,148, 1)',
        'rgba(35,52,130, 1)',
      ],
      borderWidth: 1.2,
    },
  ],
};

export function PieChart() {
  return <Doughnut data={data} />;
}
