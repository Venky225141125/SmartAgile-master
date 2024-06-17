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

const TaskBar = () => {
  return (
    <div>
      <TaskSection title="Completed Tasks (Closed)" data={completedTasksData} />
      <TaskSection title="Definition of Done (DoD) Checklist" data={dodChecklistData} />
      <TaskSection title="Acceptance Criteria" data={acceptanceCriteriaData} />
      <TaskSection title="Comments and Discussions" data={commentsData} />
      <TaskSection title="Attachments and Resources" data={attachmentsData} />
      <TaskSection title="Peer Reviews" data={peerReviewsData} />
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
const completedTasksData = {
  labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
  datasets: [
    {
      label: 'Completed Tasks',
      data: [20, 30, 40, 50, 60], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Example colors
    },
  ],
};

const dodChecklistData = {
  labels: ['Criteria 1', 'Criteria 2', 'Criteria 3', 'Criteria 4', 'Criteria 5'],
  datasets: [
    {
      label: 'DoD Checklist',
      data: [40, 30, 20, 50, 60], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Example colors
    },
  ],
};

const acceptanceCriteriaData = {
  labels: ['Criteria A', 'Criteria B', 'Criteria C', 'Criteria D', 'Criteria E'],
  datasets: [
    {
      label: 'Acceptance Criteria',
      data: [60, 25, 45, 30, 50], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Example colors
    },
  ],
};

const commentsData = {
  labels: ['Positive', 'Neutral', 'Negative', 'Feedback', 'Suggestions'],
  datasets: [
    {
      label: 'Comments',
      data: [45, 30, 25, 40, 35], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Example colors
    },
  ],
};

const attachmentsData = {
  labels: ['Image', 'Document', 'Link', 'Video', 'Audio'],
  datasets: [
    {
      label: 'Attachments',
      data: [50, 25, 35, 45, 30], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Example colors
    },
  ],
};

const peerReviewsData = {
  labels: ['Positive', 'Neutral', 'Negative', 'Feedback', 'Suggestions'],
  datasets: [
    {
      label: 'Peer Reviews',
      data: [40, 30, 30, 35, 45], // Example data values
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Example colors
    },
  ],
};

export default TaskBar;
