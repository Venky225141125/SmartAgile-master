// src/components/EmployeeProfilePage.js
import React, { useState } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const EmployeeProfilePage = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Sample data for charts
  const activityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Hours Worked',
        data: [8, 7.5, 8.5, 8, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const projectData = {
    labels: ['Project A', 'Project B', 'Project C'],
    datasets: [
      {
        label: 'Completion Status',
        data: [60, 25, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  const kpiData = {
    labels: ['Productivity Score', 'Efficiency Rating', 'Task Completion Rate'],
    datasets: [
      {
        label: 'Performance Indicators',
        data: [85, 90, 95],
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
      },
    ],
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="mb-4">
          <img src="/hel.jpg" alt="Profile Picture" className="rounded-full w-24 h-24" />
        </div>
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-sm">Software Developer</p>
          <p className="text-sm">Engineering Department</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <nav className="flex -mb-px" aria-label="Tabs">
          <button
            className={`text-gray-500 py-4 px-6 mr-4 ${activeTab === 'Overview' ? 'border-b-2 border-blue-500 text-blue-600' : ''}`}
            onClick={() => handleTabChange('Overview')}
          >
            Overview
          </button>
          <button
            className={`text-gray-500 py-4 px-6 mr-4 ${activeTab === 'Activity Log' ? 'border-b-2 border-blue-500 text-blue-600' : ''}`}
            onClick={() => handleTabChange('Activity Log')}
          >
            Activity Log
          </button>
          <button
            className={`text-gray-500 py-4 px-6 mr-4 ${activeTab === 'Performance' ? 'border-b-2 border-blue-500 text-blue-600' : ''}`}
            onClick={() => handleTabChange('Performance')}
          >
            Performance
          </button>
          <button
            className={`text-gray-500 py-4 px-6 mr-4 ${activeTab === 'Settings' ? 'border-b-2 border-blue-500 text-blue-600' : ''}`}
            onClick={() => handleTabChange('Settings')}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'Overview' && (
        <div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <p>Full Name: John Doe</p>
            <p>Job Title: Software Developer</p>
            <p>Department: Engineering</p>
            <p>Employee ID: 123456</p>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 mt-8">Work Schedule</h3>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Working Hours</td>
                  <td className="border border-gray-300 px-4 py-2">9:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Break Times</td>
                  <td className="border border-gray-300 px-4 py-2">12:00 PM - 1:00 PM</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Days Off</td>
                  <td className="border border-gray-300 px-4 py-2">Saturday, Sunday</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 mt-8">Current Projects</h3>
            <Doughnut data={projectData} />
          </div>
        </div>
      )}

      {activeTab === 'Activity Log' && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Activity Log</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Log In</th>
                <th className="border border-gray-300 px-4 py-2">Log Out</th>
                <th className="border border-gray-300 px-4 py-2">Total Hours</th>
                <th className="border border-gray-300 px-4 py-2">Break Times</th>
                <th className="border border-gray-300 px-4 py-2">Time Spent on Projects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2024-06-01</td>
                <td className="border border-gray-300 px-4 py-2">9:00 AM</td>
                <td className="border border-gray-300 px-4 py-2">5:00 PM</td>
                <td className="border border-gray-300 px-4 py-2">8 hours</td>
                <td className="border border-gray-300 px-4 py-2">1 hour</td>
                <td className="border border-gray-300 px-4 py-2">6 hours on Project A</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2024-06-02</td>
                <td className="border border-gray-300 px-4 py-2">9:00 AM</td>
                <td className="border border-gray-300 px-4 py-2">5:00 PM</td>
                <td className="border border-gray-300 px-4 py-2">8 hours</td>
                <td className="border border-gray-300 px-4 py-2">1 hour</td>
                <td className="border border-gray-300 px-4 py-2">5 hours on Project B</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'Performance' && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Performance</h3>
          <div className="mb-4">
            <h4 className="font-semibold">Key Performance Indicators (KPIs)</h4>
            <Bar data={kpiData} />
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Feedback & Reviews</h4>
            <div className="border border-gray-300 p-4 rounded-lg mb-2">
              <p><strong>Manager Comments:</strong> John has been performing exceptionally well and consistently meets his targets.</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg mb-2">
              <p><strong>Peer Reviews:</strong> John is a great team player and always willing to help.</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg">
              <p><strong>Self-assessments:</strong> I believe my performance has been strong, and I am continually looking for ways to improve.</p>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Goal Tracking</h4>
            <div className="border border-gray-300 p-4 rounded-lg mb-2">
              <p><strong>Goal Description:</strong> Complete the new feature implementation for Project A</p>
              <p><strong>Progress:</strong> 60%</p>
              <p><strong>Deadline:</strong> 2024-07-15</p>
              <div className="bg-gray-200 h-2 rounded-lg mb-2">
                <div className="bg-blue-500 h-full rounded-lg" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg">
              <p><strong>Goal Description:</strong> Improve UI/UX design for Project B</p>
              <p><strong>Progress:</strong> 25%</p>
              <p><strong>Deadline:</strong> 2024-08-30</p>
              <div className="bg-gray-200 h-2 rounded-lg mb-2">
                <div className="bg-blue-500 h-full rounded-lg" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Settings' && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <div className="mb-4">
            <h4 className="font-semibold">Account Settings</h4>
            <p><strong>Change Password:</strong></p>
            <input type="password" placeholder="New Password" className="border border-gray-300 p-2 mb-2 w-full" />
            <input type="password" placeholder="Confirm Password" className="border border-gray-300 p-2 mb-4 w-full" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Change Password</button>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Update Contact Information</h4>
            <input type="text" placeholder="Email Address" className="border border-gray-300 p-2 mb-2 w-full" defaultValue="john.doe@example.com" />
            <input type="text" placeholder="Phone Number" className="border border-gray-300 p-2 mb-4 w-full" defaultValue="+1234567890" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Update Information</button>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Notifications</h4>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" defaultChecked />
              Email Notifications
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Mobile Notifications
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Weekly Reports
            </label>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Privacy Settings</h4>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Share data with third parties
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" defaultChecked />
              Allow team members to view activity logs
            </label>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Support Contact: support@example.com | Phone: +1234567890
        </p>
        <p className="text-sm text-gray-500">
          <a href="/privacy-policy" className="underline">Privacy Policy</a>
          {' | '}
          <a href="/terms-of-service" className="underline">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default EmployeeProfilePage;
