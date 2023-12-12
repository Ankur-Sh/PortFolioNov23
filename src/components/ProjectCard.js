import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <a className="hidden_link" href={link} target="_blank">
                <div className="proj-imgbx hoverable">
                    <img src={imgUrl} style={{ height: "18rem" }} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    );
};
