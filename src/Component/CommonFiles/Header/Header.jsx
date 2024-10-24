import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faGear,
  faBell,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate,} from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";


const Header = () => {
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const [showSideMenu, setShowSideMenu] = useState(true);

  const handleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };
  return (
    <Container fluid>
      <Row className="p-0">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={3}
          sm={3}
          xs={3}
          className="app-LandingPage-client-logo align-items-center d-flex"
        >
          Client Logo
        </Col>
        <Col
          xxl={8}
          xl={8}
          lg={6}
          md={6}
          sm={6}
          xs={6}
          className="app-LandingPage-middlepart justify-content-center d-flex flex-column position-relative"
        >
          <Row
            className="ms-5 largefontbold  cursorpointer paddingleft-LandingPage"
            onClick={handleSideMenu}
          >
            Welcome! John
          </Row>
          <Row className="paddingleft-LandingPage">
            <span className="ms-5 largefontsemibold">
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </Row>
          <Col className="position-absolute end-0 me-5 mx-auto">
            <FontAwesomeIcon
              className="cursorpointer"
              icon={faBell}
              size="xl"
            />
            <FontAwesomeIcon
              className="ms-3 cursorpointer"
              icon={faGear}
              onClick={handleSetting}
              size="xl"
            />
            <FontAwesomeIcon
              className="ms-3 cursorpointer"
              icon={faCircleQuestion}
              size="xl"
            />
          </Col>
          <Col className="position-absolute">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className=""
              width="50"
              height="50"
            />
          </Col>
        </Col>

        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={3}
          sm={3}
          xs={3}
          className="align-items-center app-LandingPage-rightpart"
        >
          <img
            className=""
            src="./logo.png"
            alt="LandingPage Right"
            style={{ width: "100%", height: "120px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
