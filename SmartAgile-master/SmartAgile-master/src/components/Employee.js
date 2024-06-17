import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import logo from '../assets/smartagilelogo.png';
import '../components/UserProfile.css'; // Import the CSS file
import SprintModelTable from './SprintModelTable';
import TaskVisualization from './TaskVisualization';
import TaskBar from './TaskBar';
import SprintBurndownChart from './SprintBurndownChart';

const Employee = () => {
  
  const [showContent, setShowContent] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);

  const toggleVisibility = () => {
    setShowContent(!showContent);
  };
  const toggleVisibility1 = () => {
    setShowContent1(!showContent1);
  };
  const toggleVisibility2 = () => {
    setShowContent2(!showContent2);
  };
  const toggleVisibility3 = () => {
    setShowContent3(!showContent3);
  };
  const toggleVisibility4 = () => {
    setShowContent4(!showContent4);
  };

  return (
    <div className="user-profile">
      <Container fluid className="bg-light py-3">
        <Row>
          <Col xs={12} md={6} className="d-flex align-items-center mb-3">
            <Image src={logo} alt="User Avatar" roundedCircle width={80} height={80} className="avatar" />
            <div className="user-info ms-3">
              <p className="user-title">Welcome to</p>
              <h5 className="user-name">Smart_Agile</h5>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-end">
            <input type="text" placeholder="Search" className="form-control search-bar" />
          </Col>
        </Row>

        <Row className="mt-3 equal-height-row">
          <Col xs={12} md={4}>
            <Card className="border shadow-sm custom-card grey-card">
              <Card.Body>
                <Card.Title className="text-center h5">Sprint Planning and Backlog</Card.Title>
                <ul>
                    <li>Sprint Backlog</li>
                    <li>Estimated Effort</li>
                    <li>Sprint Goal</li>
                    <li>Future Consideration (Withdrawn Tasks)</li>
                </ul>
                <div>
                  <button onClick={toggleVisibility}>
                    {showContent ? "Less info" : "More info"}
                  </button>
                  {showContent && (
                    <div>
                    <SprintModelTable />
                  </div>
                  )}
                </div>
              
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border shadow-sm custom-card black-card">
              <Card.Body>
                <Card.Title className="text-center h5">Daily Standup</Card.Title>
                <ul>
                    <li>Today’s Tasks</li>
                    <li>Completed Yesterday</li>
                    <li>Impediments</li>
                </ul>
                <div>
                  <Button onClick={toggleVisibility1}>
                    {showContent1 ? "Less info" : "More info"}
                  </Button>
                  {showContent1 && (
                    <div>
                      <h2>Today’s Tasks</h2>
                      <ul>
                        <li>Task 1</li>
                        <li>Task 2</li>
                        <li>Task 3</li>
                      </ul>
                      <h2>Completed Yesterday</h2>
                      <ul>
                        <li>Task A</li>
                        <li>Task B</li>
                      </ul>
                      <h2>Impediments</h2>
                      <ul>
                        <li>Issue X</li>
                        <li>Issue Y</li>
                      </ul>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border shadow-sm custom-card grey-card">
              <Card.Body>
                <Card.Title className="text-center h5">Task Management</Card.Title>
                <ul>
                  <li>Current Tasks (In progress)</li>
                  <li>Assigned Team Members</li>
                  <li>Task Status Updates</li>
                  <li>Blocked Tasks (Impediments)</li>
                </ul>
                
                <div>
                  <button onClick={toggleVisibility2}>
                    {showContent2 ? "Less info" : "More info"}
                  </button>
                  {showContent2 && (
                    <div>
                    <TaskVisualization />
                  </div>
                  )}
                </div>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4 equal-height-row">
          <Col xs={12} md={4}>
            <Card className="border shadow-sm custom-card black-card">
              <Card.Body>
                <Card.Title className="text-center h5">Completion and Review</Card.Title>
                <ul>
                  <li>Completed Tasks (Closed)</li>
                  <li>Definition of Done (DoD) Checklist</li>
                  <li>Acceptance Criteria</li>
                  <li>Comments and Discussions</li>
                  <li>Attachments and Resources</li>
                  <li>Peer Reviews</li>
                </ul>
                <div>
                  <button onClick={toggleVisibility3}>
                    {showContent3 ? "Less info" : "More info"}
                  </button>
                  {showContent3 && (
                    <div>
                    <TaskBar />
                  </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border shadow-sm custom-card grey-card">
              <Card.Body>
                <Card.Title className="text-center h5">Sprint Progress and Retrospective</Card.Title>
                <ul>
                  <li>Burndown Chart</li>
                  <li>What Went Well</li>
                  <li>What Didn’t Go Well</li>
                  <li>Action Items for Improvement</li>
                </ul>
                <div>
                  <button onClick={toggleVisibility4}>
                    {showContent4 ? "Less info" : "More info"}
                  </button>
                  {showContent4 && (
                    <div>
                    <SprintBurndownChart />
                  </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Employee;
