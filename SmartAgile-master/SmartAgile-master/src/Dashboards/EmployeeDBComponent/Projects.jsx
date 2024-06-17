import React from 'react';

const projects = [
  { priority: 'Low', name: 'Project A', startDate: '12-04', endDate: '23-05', status: 'In progress', percent: 75 },
  { priority: 'High', name: 'Project B', startDate: '24-05', endDate: '22-06', status: 'Done', percent: 45 },
  { priority: 'Normal', name: 'Project C', startDate: '23-06', endDate: '30-07', status: 'In progress', percent: 25 },
  { priority: 'High', name: 'Project D', startDate: '31-07', endDate: '19-08', status: 'Normal', percent: 65 },
  { priority: 'Normal', name: 'Project E', startDate: '20-08', endDate: '21-09', status: 'Normal', percent: 15 }
];

const tasks = [
  { task: 'Analysis', percent: 75 },
  { task: 'Design', percent: 45 },
  { task: 'Product', percent: 25 },
  { task: 'Testing', percent: 65 },
  { task: 'Training', percent: 15 },
  { task: 'Ready', percent: 100 }
];

const ProjectStatusDashboard = () => {
  return (
    <div className="p-4 bg-white">
      <div className="grid grid-cols-6 gap-4 text-center font-semibold text-gray-800 mb-2">
        <div className='bg-blue-400 rounded-3xl h-10 w-40'><p className='my-2'>PRIORITY</p></div>
        <div className='bg-pink-400 rounded-3xl h-10'><p className='my-2'>PROJECT NAME</p></div>
        <div className='bg-green-400 rounded-3xl h-10'><p className='my-2'>START DATE</p></div>
        <div className='bg-violet-400 rounded-3xl h-10'><p className='my-2'>END DATE</p></div>
        <div className='bg-red-400 rounded-3xl h-10'><p className='my-2'>PROJECT STATUS</p></div>
        <div className='bg-gray-400 rounded-3xl h-10'><p className='my-2'>% COMPLETE</p></div>

      </div>
      
      {projects.map((project, index) => (
        <div key={index} className="grid grid-cols-6 gap-4 text-left items-left mb-2">
          <div className='h-4 w-4 bg-blue-400 rounded-full'>
          <div className={`text-${project.priority === 'High' ? 'red' : project.priority === 'Normal' ? 'yellow' : 'green'}-500 ml-7` }>{project.priority}</div></div>
          <div className='h-4 w-4 bg-pink-400 rounded-full'>
          <div className='ml-7 w-20'>{project.name}</div></div>
          <div className='h-4 w-4 bg-green-400 rounded-full'>
          <div className='ml-7 w-20'>{project.startDate}</div></div>
          <div className='h-4 w-4 bg-violet-400 rounded-full'>
          <div className='ml-7 w-20'>{project.endDate}</div></div>
          <div className='h-4 w-4 bg-red-400 rounded-full'>
          <div className='ml-7 w-24'>{project.status}</div></div>
          <div className='h-4 w-4 bg-gray-400 rounded-full'>
          <div className='ml-7 w-20'>{project.percent}%</div></div>
        </div>
      ))}
      <div className='grid grid-cols-2 gap-x-4'>
      <div className="mt-8 bg-white rounded-xl shadow-xl">
      <h3 className="text-center font-semibold text-gray-800 mb-4">TASK</h3>
        {tasks.map((task, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-left text-gray-600 mb-1">
              <div className='mr-2'>
              <span className='ml-2'>{task.task}</span>
              </div>
              <div className={`bg-${task.percent >= 75 ? 'green' : task.percent <= 50 ? 'red' : 'blue'}-500 h-2.5 rounded-full mt-2 justify-end`} style={{ width: `${task.percent}%` }}></div>
              <span>{task.percent}%</span>
            </div>
            
          </div>
        ))}
      </div>
      <div className='bg-white rounded-2xl shadow-2xl mt-8'>
          <h2>hel</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatusDashboard;
