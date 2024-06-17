import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering required elements with Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const SprintBurndownChart = () => {
  // Example data for the burndown chart
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
    datasets: [
      {
        label: 'Actual Burn Down',
        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
        borderColor: '#36A2EB',
        backgroundColor: '#36A2EB',
        fill: false,
      },
      {
        label: 'Ideal Burn Down',
        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
        borderColor: '#FF6384',
        backgroundColor: '#FF6384',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sprint Burndown Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Remaining Work (Hours)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h5>Sprint Burndown Chart</h5>
      <Line data={data} options={options} />
    </div>
  );
};

export default SprintBurndownChart;
