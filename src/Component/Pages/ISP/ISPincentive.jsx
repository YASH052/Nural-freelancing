import React from "react";
import { MenuConstants } from "../../CommonFiles/MenuConstants";
import "../../../App.css";
import "../../../Color.css";
import "../../../Fonts.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const ISPincentive = () => {
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handlecreateisp = () => {
    navigate("/createisp"); // Navigate to the settings route
  };
  return (
    <Container fluid>
      <Row className="mb-4">
        <></>

        <Col lg={11} md={11} sm={11} xl={11} xs={11} className="p-0">
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.ispIncentive}
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.view} {MenuConstants.ispIncentive}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0 p-1  bordercolororange mediumfontbold app-LandingPage-locations"
              onClick={handlecreateisp}
            >
              {MenuConstants.create} {MenuConstants.ispIncentive}
            </Col>
            <Row className="app-country-box ms-0 ">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3">Schema Name</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="name"
                      className="form-control app-placeholder"
                    />
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3">Schema On</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="select"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          sales Ach- Qty
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          sales Ach-value
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Activation- Qty
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3"> {MenuConstants.payout} Type</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="type"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          % if Inv value
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Points per Qty
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Rupees per Qty
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Row className="mt-3">
                <Col className="ms-4" xxl={3} xl={3} lg={3} md={3}>
                  From Date
                  <Col className="">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="Select date"
                      className="date-input "
                      //   required
                    />
                  </Col>
                </Col>
                <Col>
                  To Date
                  <Col className="input-container">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="Select date"
                      className="date-input"
                      //   required
                    />
                  </Col>
                </Col>
              </Row>
              <Row className="ms-2 mb-4 mt-3">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.search}
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.showall}
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
              <Row className="backgroundcolor fontcolorwhite  ms-0 mt-2 mb-1">
                <Col lg={2}>Schema Name</Col>
                <Col>Start date</Col>
                <Col>End date</Col>
                <Col>Schema On</Col>
                <Col> {MenuConstants.payout} Type</Col>
                <Col>Status</Col>
                <Col>View {MenuConstants.details}</Col>
              </Row>
              <Row className="ms-0 app-placeholder">
                <Col lg={2}>xxx</Col>
                <Col>xxx</Col>
                <Col>xxx</Col>
                <Col>xxx</Col>
                <Col>xxx</Col>
                <Col>
                  {" "}
                  <img
                    src="./action2.png"
                    className="cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                </Col>

                <Col>
                  <Button className="app-details-btn mb-1 mt-1 backgroundcolorsecondary bordercolororange">
                    {MenuConstants.details}
                  </Button>
                </Col>
              </Row>
              <Row className="ms-0 mb-5 app-placeholder">
                <Col lg={2}>xxx</Col>
                <Col>xxxx</Col>
                <Col>xxxx</Col>

                <Col>xxx</Col>
                <Col>xxx</Col>
                <Col>
                  {" "}
                  <img
                    src="./action2.png"
                    className="cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                </Col>
                <Col>
                  <Button className="app-details-btn mb-1 mt-1 backgroundcolorsecondary bordercolororange">
                    {MenuConstants.details}
                  </Button>
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

export default ISPincentive;
