import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Header.css";
import {
  faGear,
  faBell,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, OverlayTrigger, Tooltip } from "react-bootstrap";

import "../../../App.css";
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
      <Row className="paddingnone">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={3}
          sm={3}
          xs={3}
          className="app-LandingPage-client-logo bg-white"
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
          className="app-LandingPage-middlepart app-header-container flex-column"
        >
          <Row
            className="ms5 largefontbold cursorpointer paddingleft-LandingPage"
            onClick={handleSideMenu}
          >
            Welcome! John
          </Row>
          <Row className="paddingleft-LandingPage">
            <span className="ms5 largefontsemibold">
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </Row>
          <Col className="app-header-icons end-0">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="bell-tooltip">Notifications</Tooltip>}
            >
              <FontAwesomeIcon
                className="cursorpointer"
                icon={faBell}
                size="xl"
              />
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="settings-tooltip">Settings</Tooltip>}
            >
              <FontAwesomeIcon
                className="ms3 cursorpointer"
                icon={faGear}
                onClick={handleSetting}
                size="xl"
              />
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="help-tooltip">Help</Tooltip>}
            >
              <FontAwesomeIcon
                className="ms3 cursorpointer"
                icon={faCircleQuestion}
                size="xl"
              />
            </OverlayTrigger>
          </Col>
          <Col className="app-header-profile">
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
          className="app-LandingPage-rightpart bg-white"
        >
          <img
            className="p-2"
            src="./logo.png"
            alt=""
            style={{ width: "100%", height: "120px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
