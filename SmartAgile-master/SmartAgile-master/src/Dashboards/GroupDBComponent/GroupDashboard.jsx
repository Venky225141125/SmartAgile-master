import React, { useState } from 'react';
import { Bar, Pie, Line, Doughnut, Radar } from 'react-chartjs-2';
import 'chart.js/auto';
import '@fortawesome/fontawesome-free/css/all.min.css';



const GroupDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedGroup, setSelectedGroup] = useState('Group A');

  // Sample data for charts
  const productivityData = {
    labels: ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Tom White'],
    datasets: [
      {
        label: 'Productivity Score',
        data: [85, 90, 78, 88, 92],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const projectStatusData = {
    labels: ['Project A', 'Project B', 'Project C'],
    datasets: [
      {
        label: 'Completion Percentage',
        data: [70, 45, 85],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };

  const timeTrackingData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Hours Worked',
        data: [40, 35, 42, 38, 45],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const attendanceData = {
    labels: ['Present', 'Absent', 'On Leave'],
    datasets: [
      {
        data: [80, 10, 10],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };

  const performanceSummaryData = {
    labels: ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Tom White'],
    datasets: [
      {
        label: 'Task Completion Rate',
        data: [90, 85, 80, 95, 88],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const groupPerformanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Group Productivity',
        data: [85, 88, 90, 92],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const radarData = {
    labels: ['Communication', 'Teamwork', 'Problem Solving', 'Leadership', 'Technical Skills'],
    datasets: [
      {
        label: 'John Doe',
        data: [65, 75, 70, 80, 90],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Jane Smith',
        data: [80, 85, 90, 70, 75],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  

  return (
    <div className="flex flex-col h-screen">
      {/* Top Row */}
      <div className="flex justify-between items-center bg-gray-800 text-white p-4">
        <div>
          <i className="fas fa-bell mr-4"></i>
          <span>Notifications</span>
        </div>
        <div>
          <label htmlFor="groupSelect" className="mr-2">Select Group:</label>
          <select
            id="groupSelect"
            className="bg-gray-700 text-white p-2"
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            <option value="Group A">Group A</option>
            <option value="Group B">Group B</option>
            <option value="Group C">Group C</option>
          </select>
        </div>
        <div>
          <i className="fas fa-cog mr-4"></i>
          <span>Settings</span>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Vertical Navigation Bar */}
        <div className="w-1/5 h-full bg-gray-800 text-white flex flex-col">
          <div className="text-center py-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="flex flex-col mt-4">
            <button
              className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Overview' ? 'bg-blue-500' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('Overview')}
            >
              <i className="fas fa-home mr-2"></i> Overview
            </button>
            <button
              className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Productivity' ? 'bg-blue-500' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('Productivity')}
            >
              <i className="fas fa-chart-line mr-2"></i> Productivity
            </button>
            <button
              className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Project Status' ? 'bg-blue-500' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('Project Status')}
            >
              <i className="fas fa-tasks mr-2"></i> Project Status
            </button>
            <button
              className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Tasks' ? 'bg-blue-500' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('Tasks')}
                >
                <i className="fas fa-check-circle mr-2"></i> Tasks
                </button>
                <button
                className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Time Tracking' ? 'bg-blue-500' : 'bg-gray-700'}`}
                onClick={() => setActiveTab('Time Tracking')}
                >
                <i className="fas fa-clock mr-2"></i> Time Tracking
                </button>
                <button
                className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Team Overview' ? 'bg-blue-500' : 'bg-gray-700'}`}
                onClick={() => setActiveTab('Team Overview')}
                >
                <i className="fas fa-users mr-2"></i> Team Overview
                </button>
                <button
                className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Attendance' ? 'bg-blue-500' : 'bg-gray-700'}`}
                onClick={() => setActiveTab('Attendance')}
                >
                <i className="fas fa-calendar-check mr-2"></i> Attendance
                </button>
                <button
                className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Performance Summary' ? 'bg-blue-500' : 'bg-gray-700'}`}
                onClick={() => setActiveTab('Performance Summary')}
                >
                <i className="fas fa-chart-bar mr-2"></i> Performance Summary
                </button>
                <button
                className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Chats' ? 'bg-blue-500' : 'bg-gray-700'}`}
                onClick={() => setActiveTab('Chats')}
                >
                <i className="fas fa-comments mr-2"></i> Chats
                </button>
                <button
                className={`px-4 py-2 mx-2 my-2 flex items-center ${activeTab === 'Reviews' ? 'bg-blue-500' : 'bg-gray-700'}`}
                onClick={() => setActiveTab('Reviews')}
                >
                <i className="fas fa-star mr-2"></i> Reviews
                </button>
                </div>
                </div>
                    {/* Main Content */}
    <div className="w-4/5 p-8 overflow-y-auto">
      {activeTab === 'Overview' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Group Overview</h2>
          {/* Add visualizations and content here */}
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Productivity</h3>
              <Pie data={productivityData} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Project Status</h3>
              <Bar data={projectStatusData} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Productivity' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Productivity</h2>
          {/* Add visualizations and content here */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Time Tracking</h3>
              <Line data={timeTrackingData} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Attendance</h3>
              <Doughnut data={attendanceData} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Project Status' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Project Status</h2>
          {/* Add visualizations and content here */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>
              <Bar data={performanceSummaryData} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Group Performance</h3>
              <Line data={groupPerformanceData} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Tasks' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
          {/* Add visualizations and content here */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Task Completion</h3>
              <Doughnut data={productivityData} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Task Distribution</h3>
              <Bar data={projectStatusData} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Time Tracking' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Time Tracking</h2>
            {/* Add visualizations and content here */}
            <div className="grid grid-cols-2 gap-8">
            <div>
            <h3 className="text-lg font-semibold mb-4">Weekly Hours Worked</h3>
            <Bar data={timeTrackingData} />
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">Break Time Analysis</h3>
            <Pie data={attendanceData} />
            </div>
            </div>
            </div>
            )}
                  {activeTab === 'Team Overview' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Team Overview</h2>
          {/* Add visualizations and content here */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Team Productivity</h3>
              <Line data={groupPerformanceData} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Team Skills Radar</h3>
              <Radar data={radarData} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Attendance' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Attendance</h2>
          {/* Add visualizations and content here */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Attendance Summary</h3>
              <Pie data={attendanceData} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Latecomers Analysis</h3>
              <Bar data={timeTrackingData} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Performance Summary' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Performance Summary</h2>
          {/* Add visualizations and content here */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Individual KPIs</h3>
              <Doughnut data={productivityData} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Feedback & Reviews</h3>
              <Bar data={performanceSummaryData} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Chats' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Chats</h2>
          {/* Add visualizations and content here */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Group Chat Activity</h3>
              {/* Placeholder for chat activity */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-gray-600">Group chat activity chart goes here...</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Private Chat Summary</h3>
              {/* Placeholder for private chat summary */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-gray-600">Private chat summary chart goes here...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Reviews' && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          {/* Add visualizations and content here */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Manager Feedback</h3>
              {/* Placeholder for manager feedback */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-gray-600">Manager feedback chart goes here...</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Peer Reviews</h3>
              {/* Placeholder for peer reviews */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-gray-600">Peer reviews chart goes here...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
);
};

export default GroupDashboard;
