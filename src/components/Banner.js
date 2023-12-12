import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.webp";
import navIcon3 from "../assets/img/nav-icon3.svg";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
    ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        Welcome to my Portfolio
                                    </span>
                                    <h1>
                                        {`Hi! I'm Ankur Sharma`} <br />
                                        <span
                                            className="txt-rotate"
                                            dataPeriod="1000"
                                            data-rotate='[ "Web Developer", "Web Designer" ]'
                                        >
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p>Slide Down to know more about me...</p>
                                    <div className="social-icon">
                                        <a href="https://www.linkedin.com/in/ankur-sharma-365559214/">
                                            <img src={navIcon1} alt="Icon" />
                                        </a>
                                        <a href="https://github.com/Ankur-Sh">
                                            <img src={navIcon2} alt="Icon" />
                                        </a>
                                        <a href="https://www.instagram.com/ankur_918/">
                                            <img src={navIcon3} alt="Icon" />
                                        </a>
                                    </div>
                                    <button
                                        onClick={() => console.log("connect")}
                                    >
                                        <a
                                            className="hidden_link"
                                            target="_blank"
                                            href="https://bit.ly/48fXEn6"
                                        >
                                            Resume
                                            <ArrowRightCircle size={25} />
                                        </a>
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img
                                        className="animated_img"
                                        src={headerImg}
                                        alt="Header Img"
                                    />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
