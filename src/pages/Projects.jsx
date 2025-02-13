import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/campout.png";
import lift from "../assets/projects/quizapp.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Camp-Out"
              description="CampOut is a camping website project created to practice full stack development skills. The project utilizes EJS, JavaScript, and CSS to create a fully functional and interactive website. Its an responsive website, cookies based authentication, hashing the password, RestAPI is implemented for this website and I used firebase as a database for this website. I utilized the EJS(Embeded java script) to create and structure element."
              ghLink="https://github.com/Bala-kumaran-S/Camp-Out---Camping-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Quiz App"
              description="This is a web-based quiz application with gamification features, designed to provide an interactive quiz experience. The application fetches quiz data from the provided API endpoint and presents multiple-choice questions to the user. Upon completion, a summary of results, including total points scored, is displayed.I used react framework for the developement and I access the API data using axios if axios could not get the data i gave an mock data to the app to be fail free."
              ghLink="https://github.com/Bala-kumaran-S/Quiz-app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects