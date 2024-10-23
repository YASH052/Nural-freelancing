import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { MenuConstants } from "../../CommonFiles/MenuConstants";
import React, { useState } from "react";
import "../../../App.css";
import "../../../Fonts.css";
import "../../../Color.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Area = () => {
  const navigate = useNavigate();
  const [showSideMenu, setShowSideMenu] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("Country");
  const [selectedRegion, setSelectedRegion] = useState("Region");
  const [selectedState, setSelectedState] = useState("State");
  const [selectedCity, setSelectedCity] = useState("City");
  const [enteredCountry, setEnteredCountry] = useState("Country");
  const [enteredRegion, setEnteredRegion] = useState("Region");
  const [enteredState, setEnteredState] = useState("State");
  const [enteredCity, setEnteredCity] = useState("City");
  const handleSelectCountry = (eventKey, event) => {
    setSelectedCountry(event.target.textContent); // Update the placeholder with selected dropdown item
  };
  const handleSelectRegion = (eventKey, event) => {
    setSelectedRegion(event.target.textContent); // Update the placeholder with selected dropdown item
  };
  const handleSelectState = (eventKey, event) => {
    setSelectedState(event.target.textContent); // Update the placeholder with selected dropdown item
  };
  const handleSelectCity = (eventKey, event) => {
    setSelectedCity(event.target.textContent); // Update the placeholder with selected dropdown item
  };
  const handleEnterCountry = (eventKey, event) => {
    setEnteredCountry(event.target.textContent); // Update the placeholder with Entered dropdown item
  };
  const handleEnterRegion = (eventKey, event) => {
    setEnteredRegion(event.target.textContent); // Update the placeholder with Entered dropdown item
  };
  const handleEnterState = (eventKey, event) => {
    setEnteredState(event.target.textContent); // Update the placeholder with Entered dropdown item
  };
  const handleEnterCity = (eventKey, event) => {
    setEnteredCity(event.target.textContent); // Update the placeholder with selected dropdown item
  };

  // Step 2: handleSideMenu function to toggle the side menu
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };

  return (
    <Container fluid>
      <Row className="mb-4">
        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.area}
          </Col>
          <Row className="ms-4 mt-2">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.manage} {MenuConstants.area}
            </Col>
            <Row className="app-country-box ms-0">
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">{MenuConstants.country}</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder={enteredCountry}
                      className="form-control app-placeholder"
                    />
                    <Dropdown onSelect={handleEnterCountry}>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">{MenuConstants.region}</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder={enteredRegion}
                      className="form-control app-placeholder"
                    />
                    <Dropdown onSelect={handleEnterRegion}>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">{MenuConstants.state}</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder={enteredState}
                      className="form-control app-placeholder"
                    />
                    <Dropdown onSelect={handleEnterState}>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">{MenuConstants.city}</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder={enteredCity}
                      className="form-control app-placeholder"
                    />
                    <Dropdown onSelect={handleEnterCity}>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Row className=" mb-4">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Row className="ms-4 mt-3">{MenuConstants.area}</Row>
                  <Col className="ms-4 mb-3">
                    <input
                      type="text"
                      className="form-control app-placeholder" // Bootstrap class for styling input
                    />
                  </Col>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Row className="ms-4 mt-3">{MenuConstants.pincode}</Row>
                  <Col className="ms-4 mb-3">
                    <input
                      type="text"
                      className="form-control app-placeholder" // Bootstrap class for styling input
                    />
                  </Col>
                </Col>
              </Row>
              <Row className="ms-2 mb-4">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.create}
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>
          <Row className="ms-4 mt-4 ">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0 mb-5 position-relative">
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">{MenuConstants.country}</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder={selectedCountry}
                      className="form-control app-placeholder"
                    />
                    <Dropdown onSelect={handleSelectCountry}>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">{MenuConstants.region}</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder={selectedRegion}
                      className="form-control app-placeholder"
                    />
                    <Dropdown onSelect={handleSelectRegion}>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">{MenuConstants.state}</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder={selectedState}
                      className="form-control app-placeholder"
                    />
                    <Dropdown onSelect={handleSelectState}>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Row className="ms-4 mt-3">{MenuConstants.city}</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder={selectedCity}
                      className="form-control app-placeholder"
                    />
                    <Dropdown onSelect={handleSelectCity}>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Row>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Row className="ms-4 mt-3">{MenuConstants.area}</Row>
                  <Col className="ms-4 mb-3">
                    <input
                      type="text"
                      className="form-control app-placeholder" // Bootstrap class for styling input
                    />
                  </Col>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Row className="ms-4 mt-3">{MenuConstants.pincode}</Row>
                  <Col className="ms-4 mb-3">
                    <input
                      type="text"
                      className="form-control app-placeholder" // Bootstrap class for styling input
                    />
                  </Col>
                </Col>
                <Col
                  xxl={2}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={3}
                  xs={3}
                  className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite ms-5 mt-5 app-LandingPage-locations"
                >
                  {MenuConstants.search}
                </Col>
              </Row>
              <Row className="backgroundcolor fontcolorwhite ms-0 mt-2 mb-1">
                <Col>{MenuConstants.country}</Col>
                <Col>{MenuConstants.region}</Col>
                <Col>{MenuConstants.state}</Col>
                <Col>{MenuConstants.city}</Col>
                <Col>{MenuConstants.area}</Col>
                <Col>{MenuConstants.pincode}</Col>
                <Col>{MenuConstants.action}</Col>
              </Row>
              <Row className="ms-0 app-placeholder">
                <Col>xxx</Col>
                <Col>xxxxxxxxx</Col>
                <Col>xxxxxxxxx</Col>
                <Col>xxxxxxxxx</Col>
                <Col>xxxxxxxxx</Col>
                <Col>xxxxxxxxx</Col>
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
              <Row className="ms-0 mb-5 app-placeholder ">
                <Col>xxx</Col>
                <Col>xxxxxxxxx</Col>
                <Col>xxxxxxxxx</Col>
                <Col>xxxxxxxxx</Col>
                <Col>xxxxxxxxx</Col>
                <Col>xxxxxxxxx</Col>
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
        </Row>
      </Row>
    </Container>
  );
};

export default Area;
