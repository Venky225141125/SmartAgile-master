import Card from 'react-bootstrap/Card';
import './styles.css'
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function BorderExample() {
  return (
    <>
    <div className='flex flex-nowrap gap-x-3'>
      <div className='shadow-xl'>
      <Card border="primary" style={{ width: '16.5rem' }}>
        <Card.Header><p className='ml-4 mt-3 text-sm'>Office Time</p></Card.Header>
        <Card.Body>
          <Card.Text>
            <p className='text-3xl ml-4'>08:39<sup className='text-base'>h</sup></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
      <div className='shadow-xl'>
      <Card border="secondary" style={{ width: '16.5rem' }}>
        <Card.Header><p className='ml-4 mt-3 text-sm'>Active Time</p></Card.Header>
        <Card.Body>
          
          <Card.Text>
          <p className='text-3xl ml-4'>08:30<sup className='text-base'>h</sup></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
      <div className='shadow-xl'>
      <Card border="success" style={{ width: '16.5rem' }}>
        <Card.Header><p className='ml-4 mt-3 text-sm'>Computer Activities</p></Card.Header>
        <Card.Body>
          <Card.Text>
          <p className='text-3xl ml-4'>07:30<sup className='text-base'>h</sup></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
      <div className='shadow-xl'>
      <Card border="danger" style={{ width: '16.5rem' }}>
        <Card.Header><p className='text-sm ml-4 mt-3'>Mannual Activities</p></Card.Header>
        <Card.Body>
          <Card.Text>
          <p className='text-3xl ml-4'>02:52<sup className='text-base'>h</sup></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
      
    </div>
    <EmpAttendance/>
    </>
  );
}

const data2 = [
  { label: 'Late', value: 3 },
  { label: 'Present', value: 83 },
  { label: 'Absent', value: 24},

];

const EmpAttendance=() =>{
  return (
    <PieChart
      series={[
        {
          data: data2,
          cx: 500,
          cy: 200,
          innerRadius: 40,
          outerRadius: 80,
        },
      ]}
      height={300}
      width={700}

      slotProps={{
        legend: { hidden: false },
      }}
    />
    
  );
}


export default BorderExample;