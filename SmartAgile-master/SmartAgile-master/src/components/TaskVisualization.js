import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering required elements with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const TaskVisualization = () => {
  return (
    <div>
      <TaskSection title="Current Tasks (In progress)" data={currentTasksData} />
      <TaskSection title="Assigned Team Members" data={teamMembersData} />
      <TaskSection title="Task Status Updates" data={statusUpdatesData} />
      <TaskSection title="Blocked Tasks (Impediments)" data={blockedTasksData} />
    </div>
  );
};

const TaskSection = ({ title, data }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h5>{title}</h5>
      <div style={{ height: '400px' }}>
        <Pie data={data} />
      </div>
    </div>
  );
};

// Example data for each section (replace with your actual data)
const currentTasksData = {
  labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
  datasets: [
    {
      label: 'Current Tasks',
      data: [10, 20, 30, 40], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Example colors
    },
  ],
};

const teamMembersData = {
  labels: ['John', 'Jane', 'Alice', 'Bob'],
  datasets: [
    {
      label: 'Team Members',
      data: [25, 35, 20, 20], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Example colors
    },
  ],
};

const statusUpdatesData = {
  labels: ['Completed', 'In Progress', 'Delayed'],
  datasets: [
    {
      label: 'Task Status Updates',
      data: [50, 30, 20], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Example colors
    },
  ],
};

const blockedTasksData = {
  labels: ['Issue 1', 'Issue 2', 'Issue 3'],
  datasets: [
    {
      label: 'Blocked Tasks',
      data: [40, 35, 25], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Example colors
    },
  ],
};

export default TaskVisualization;
