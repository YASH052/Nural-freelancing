import React from "react";
import { Card, Col, Form, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate("/login"); // Navigate to the settings route
  };

  return (
    <Container
      fluid
      className="app-access-maincontainer d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }} // Set height to full viewport
    >
      <Container>
        <Row
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100%" }}
        >
          <Col className="">
            <Card className="app-access-container p-5">
              <Col className="mx-auto">company logo</Col>
              <Col className="mt-5 mx-auto mediumfontbold">
                Login to your account
              </Col>
              <Col className="mt-2 ">Enter user Name</Col>
              <Row style={{}}>
                <input
                  className="text-input mt-2 ms-2 p-2"
                  // value={credentials.email}
                  // onChange={onChange}
                  type="username"
                  id="username"
                  name="username"
                  placeholder="User Name"
                  required=""
                />
              </Row>
              <Row className="mt-2 mx-auto">OR</Row>
              <Col className="mt-2">Enter Email ID</Col>
              <Row style={{}}>
                <input
                  className="text-input mt-2 ms-2 p-2"
                  // value={credentials.email}
                  // onChange={onChange}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  required=""
                />
              </Row>
              <Row>
                <Col
                  className="mt-2 fontcolororange mediumfont text-end cursorpointer"
                  onClick={handleLoginPage}
                >
                  Back
                </Col>
              </Row>
              <Col
                lg={12}
                xxl={12}
                md={12}
                xl={12}
                className="fontcolorwhite cursorpointer mediumfontbold d-flex mt-3 align-items-center justify-content-center ms-2 app-access-continuebtn backgroundcolorsecondary bordercolororange p-2"
                onClick={handleLoginPage}
              >
                Submit
              </Col>
            </Card>
          </Col>
          <Col lg={5} md={5} xl={5}>
            <Col className="extralargefontbold mb-3 d-flex align-items-center justify-content-center fontcolororange">
              SPECTRUM ISP
            </Col>
            <Col className="d-flex align-items-center justify-content-center extralargefontbold fontcolororange">
              <img
                className="me-2 fontcolorwhite"
                src="./sidelogo.jpg"
                alt=""
                style={{ width: "400px", height: "300px" }}
              />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <img
                className="fontcolorwhite"
                src="./sidelogo2.jpg"
                alt=""
                style={{ width: "150px", height: "40px" }}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ForgetPassword;
