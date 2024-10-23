import {
  Row,
  Col,
  Button,
  Container,
  InputGroup,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuConstants } from "../../CommonFiles/MenuConstants";
import '../../../App.css';
import "../../../Color.css";
import "../../../Fonts.css";

import {
  faLightbulb,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
const Brands = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("Brand"); // Initial placeholder text

  const handleSelect = (eventKey, event) => {
    setSelectedBrand(event.target.textContent); // Update the placeholder with selected dropdown item
  };

  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col lg={11} md={11} sm={11} xl={11} xs={11} className="p-0">
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.brand}
          </Col>
          <Row className="ms-4 mt-2">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.manage} {MenuConstants.brand}
            </Col>
            <Row className="app-country-box ms-0">
              <Row className="ms-4 mt-3">Brand</Row>
              <Col xxl={2} xl={2} lg={2} md={2} className="ms-4 mb-3">
                <input
                  type="text"
                  className="form-control app-placeholder" // Bootstrap class for styling input
                />
              </Col>
              <Row className="ms-4 mt-3">{MenuConstants.description}</Row>
              <Col className="ms-4 mb-3">
                <input
                  type="text"
                  className="form-control app-placeholder" // Bootstrap class for styling input
                />
              </Col>
              <Row className="ms-2 mb-4">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.create}
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange backgroundcolorsecondarybuttons cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>
          <Row className="ms-4 mt-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              <Row className="ms-4 mt-3">{MenuConstants.brand}</Row>
              <Col xxl={2} xl={2} lg={2} md={2} className="ms-4 mb-3">
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder={selectedBrand} // Dynamically set the placeholder
                    className="form-control app-placeholder"
                    readOnly // Make it read-only to prevent manual text input
                  />
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      variant="outline-none"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">Brand 1</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Brand 2</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Brand 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </InputGroup>
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                sm={2}
                xs={2}
                className="cursorpointer position-absolute end-0 mt-5 me-3 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-LandingPage-locations"
              >
                {MenuConstants.search}
              </Col>

              <Row className="backgroundcolor fontcolorwhite ms-0 mt-4 mb-2">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  S.No
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  {MenuConstants.brand}
                </Col>
                <Col>{MenuConstants.action}</Col>
              </Row>

              <Row className="ms-0 app-placeholder">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxx
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxxxxxxxx
                </Col>
                <Col>
                  <img
                    src="./action2.png"
                    className="cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                  <img
                    src="./action1.png"
                    className="me-2 cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                </Col>
              </Row>
              <Row className="ms-0 app-placeholder">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxx
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  xxxxxxxxx
                </Col>
                <Col>
                  <img
                    src="./action2.png"
                    className="cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                  <img
                    src="./action1.png"
                    className="me-2 cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                </Col>
              </Row>
              <Row className="mt-5 d-flex align-items-center justify-content-center text-center mb-3">
                <Col xs="auto">
                  First {MenuConstants.page}
                  <span
                    className="cursorpointer"
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>{" "}
                  {MenuConstants.page}
                  <span
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    1
                  </span>{" "}
                  out of xx
                  <span
                    className="cursorpointer"
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>{" "}
                  Last {MenuConstants.page}
                </Col>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Brands;
