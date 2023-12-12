import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/crimeLocator.png";
import projImg3 from "../assets/img/quizApp.png";
import projImg4 from "../assets/img/memories.png";
import projImg5 from "../assets/img/blogging.png";
import projImg6 from "../assets/img/vajra.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Memories Project",
            description: "Web Development",
            imgUrl: projImg4,
            link: "https://github.com/Ankur-Sh/project_mern_memories",
        },
        {
            title: "Blogging Website",
            description: "Web Development",
            imgUrl: projImg5,
            link: "https://bloggingwebsite01.netlify.app",
        },
        {
            title: "Quiz App",
            description: "Web Development",
            imgUrl: projImg3,
            link: "https://github.com/Ankur-Sh/Quizy",
        },
        {
            title: "Shopify",
            description: "Web Development",
            imgUrl: projImg1,
            link: "https://shopifyts01.netlify.app",
        },
        {
            title: "Crime Locator",
            description: "Web Development",
            imgUrl: projImg2,
            link: "https://crimelocator.netlify.app",
        },
        {
            title: "Vajra",
            description: "Web Development",
            imgUrl: projImg6,
            link: "https://github.com/Ankur-Sh/Vajra",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p className="project_para">
                                        Listed Below are Projects made by me.{" "}
                                        <br></br>
                                        Overview the below projects by clicking
                                        on the images given below.
                                    </p>
                                    <Tab.Container
                                        id="projects-tabs"
                                        defaultActiveKey="first"
                                    >
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="hoverable"
                                                    eventKey="first"
                                                >
                                                    Tab 1
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="hoverable"
                                                    eventKey="second"
                                                >
                                                    Tab 2
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="hoverable"
                                                    eventKey="third"
                                                >
                                                    Tab 3
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? "animate__animated animate__slideInUp"
                                                    : ""
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};
