import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  ProgressBar,
  Button,
} from "react-bootstrap";
import image from "../assets/Image.png";
import points from "../assets/points.jpg";
import perfomance from "../assets/Performance.png";
import "../components/UserProfile.css"; // Import the CSS file
import { useEffect, useState } from "react";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="user-profile ">
      <Container fluid className="bg-light py-3">
        <Row>
          <Col xs={12} md={6} className="d-flex align-items-center mb-3">
            <Image
              src={image}
              alt="User Avatar"
              roundedCircle
              width={80}
              height={80}
              className="avatar"
            />
            <div className="user-info ms-3">
              <p className="user-title">Welcome</p>
              <h5 className="user-name">{user.email}</h5>
              <h5 className="user-name">
                {user.first_name} {user.last_name}
              </h5>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-end">
            <input
              type="text"
              placeholder="Search"
              className="form-control search-bar"
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={12} md={4}>
            <Card className="border shadow-sm custom-card">
              <Card.Body>
                <Card.Title className="text-center h5">
                  Tasks in Progress
                </Card.Title>
                <p className="text-center">10</p>
                <p>UI/UX Design</p>
                <br />
                <ProgressBar now={48} className="mb-2" />
                <p>Visual Design</p>
                <br />
                <ProgressBar now={97} className="mb-2" />
                <p>Management</p>
                <br />
                <ProgressBar now={20} className="mb-2" />
                <p>Documentation</p>
                <br />
                <ProgressBar now={30} className="mb-2" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border shadow-sm custom-card">
              <Card.Body>
                <Card.Title className="text-center h5">Your points</Card.Title>
                <Image
                  src={points}
                  alt="Points"
                  width={80}
                  height={80}
                  className="points"
                />
                <p className="text-center">6675</p>
                <p>Completed tasks</p>
                <br />
                <p>Completed designs</p>
                <br />
                <p>Completed documents</p>
                <br />
                <p>Completed projects</p>
                <br />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border shadow-sm custom-card">
              <Card.Body>
                <Card.Title className="text-center h5">
                  My Tasks (02/10)
                </Card.Title>
                <ProgressBar now={20} className="mb-2" />
                <ol>
                  <li>Create wireframes</li>
                  <br />
                  <li>User flows</li>
                  <br />
                  <li>Empathy mapping</li>
                  <br />
                  <li>Dashboard Design</li>
                  <br />
                  <li>Card Sorting</li>
                  <br />
                  <li>User research</li>
                  <br />
                  <br />
                  <Button variant="secondary">View All</Button>
                </ol>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12} md={8}>
            <Card className="border shadow-sm custom-card">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Card.Title>Tasks</Card.Title>
                <Button variant="link" size="sm">
                  View All
                </Button>
              </Card.Header>
              <ListGroup flush>
                <ListGroup.Item className="border shadow-sm custom-card">
                  <h3 className="mb-1">Leaderboard</h3>
                  <ol>
                    <li>
                      Sivakumar 21,987 Level 67{" "}
                      <Button variant="outline-primary">View</Button>{" "}
                    </li>
                    <br />
                    <li>
                      Keerthika 19,747 Level 59{" "}
                      <Button variant="outline-primary">View</Button>{" "}
                    </li>
                    <br />
                    <li>
                      Teja Sai 17,627 Level 42{" "}
                      <Button variant="outline-primary">View</Button>{" "}
                    </li>
                    <br />
                  </ol>
                </ListGroup.Item>
                {/* Add more task items here */}
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border shadow-sm mb-3">
              <Card.Header>
                <Image
                  src={perfomance}
                  alt="User Avatar"
                  width={350}
                  height={285}
                  className="avatar"
                />
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
