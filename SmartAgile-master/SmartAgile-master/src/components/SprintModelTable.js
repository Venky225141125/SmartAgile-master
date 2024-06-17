import React from 'react';

const SprintModelTable = () => {
  return (
    <div>
      <h2>Sprint Model</h2>
      <table>
        <thead>
          <tr>
            <th>Sprint Number</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Goal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2022-01-01</td>
            <td>2022-01-14</td>
            <td>Implement user authentication</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2022-01-15</td>
            <td>2022-01-28</td>
            <td>Develop user profile module</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default SprintModelTable;
