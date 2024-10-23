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
const PriceList = () => {
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handleuploadprice = () => {
    navigate("/uploadprice"); // Navigate to the settings route
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
            {">"} {MenuConstants.price}
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.manage} {MenuConstants.price} {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 ">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3">
                  {MenuConstants.price} {MenuConstants.list} Name
                </Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="list name"
                      className="form-control app-placeholder"
                    />
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3">Status</Row>
                <>
                  <Col className="ms-4 mt-2 form-check form-switch">
                    <input
                      className="form-check-input cursorpointer"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </Col>
                </>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Button className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                  {MenuConstants.create}
                </Button>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Button className="bordercolororange cursorpointer mediumfont mt-5 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                  {MenuConstants.cancel}
                </Button>
              </Col>
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
              <Row className="backgroundcolor fontcolorwhite smallfontsemibold ms-0 mt-2 mb-1">
                <Col lg={8}>
                  {MenuConstants.price} {MenuConstants.list} Name
                </Col>

                <Col>Status </Col>
                <Col>Edit </Col>
              </Row>
              <Row className="ms-0 app-placeholder">
                <Col lg={8} md={8}>
                  xxx
                </Col>
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
                  {" "}
                  <img
                    src="./action1.png"
                    className="cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                </Col>
              </Row>
              <Row className="ms-0 mb-5 app-placeholder">
                <Col lg={8} md={8}>
                  xxx
                </Col>
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
                  {" "}
                  <img
                    src="./action1.png"
                    className="cursorpointer"
                    alt="Merchandizing"
                    style={{ width: "15px", height: "15px" }}
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

export default PriceList;
