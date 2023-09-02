import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="PortFolio"
              description="Plan-With-Love in this project,I have to create some simple card and In this card I have to describe with city where are go and A button tag is used below the card if you are not interested then that card will disappear as soon as you click on the not interested button and if you click on all the buttons not interested then the whole card will disappear and when you click on the refresh button  Click on  If you click on all the cards will come back again. ."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Search Image Bot"
              description="A Search Image Bot, often referred to as an image search bot or reverse image search bot, is a type of computer program or chatbot designed to perform reverse image searches on the internet."
              ghLink="https://github.com/nikhilsingh7/Search-Image-Bot"
              demoLink="https://nikhilsingh7.github.io/Search-Image-Bot/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project using NASA Api"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://nikhilsingh7.github.io/Search-Image-Bot/"
              demoLink="https://nikhilsingh7.github.io/Nasa-Image-of-the-day-4thF3/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="PortFolio"
              description="Plan-With-Love in this project,I have to create some simple card and In this card I have to describe with city where are go and A button tag is used below the card if you are not interested then that card will disappear as soon as you click on the not interested button and if you click on all the buttons not interested then the whole card will disappear and when you click on the refresh button  Click on  If you click on all the cards will come back again. ."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
