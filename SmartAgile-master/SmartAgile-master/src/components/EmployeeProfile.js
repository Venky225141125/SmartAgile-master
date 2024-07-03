import React from 'react';
import image from '../assets/emp3.jpg';

const EmployeeProfile = () => {
  const employee = {
    photo: image,
    name: 'John Doe',
    title: 'Senior Software Engineer',
    description: 'Highly skilled and dedicated professional with a strong background in web development.',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    department: 'Engineering',
    location: 'New York, NY',
  };

  return (
    <div className="employeeprofile flex justify-center items-center min-h-screen bg-gray-200">
      <div className=" max-w-md bg-white shadow-lg rounded-lg overflow-hidden text-center mt-8">
        <div className="mt-6">
          <br/><br/><br/>
          <img className="w-32 h-32 rounded-full mx-auto -mt-16" src={employee.photo} alt={employee.name} />
          <h2 className="text-xl font-semibold mt-2">{employee.name}</h2>
          <p className="text-gray-600">{employee.email}</p>
          <p className="text-gray-600">{employee.phone}</p>
          <p className="text-gray-600 mt-2">{employee.description}</p>
        </div>
        <div className="px-4 py-2 mt-4">
          <h3 className="text-lg font-semibold">Employee Details</h3>
          <table className="table-auto w-full mt-2">
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-gray-600 font-semibold">Title:</td>
                <td className="border px-4 py-2">{employee.title}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-gray-600 font-semibold">Department:</td>
                <td className="border px-4 py-2">{employee.department}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-gray-600 font-semibold">Location:</td>
                <td className="border px-4 py-2">{employee.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
