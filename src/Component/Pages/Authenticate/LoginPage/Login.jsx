import React from "react";
import { Card, Col, Form, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handlePasswordChange = () => {
    navigate("/forgotPassword"); // Navigate to the settings route
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
          <Col>
            <Card className="app-access-container p-5">
              <Col className="mx-auto">company logo</Col>
              <Col className="mt-5 mx-auto mediumfontbold">
                Login to your account
              </Col>
              <Col className="mt-3">user Name</Col>
              <Row style={{}}>
                <input
                  className="text-input mt-3 ms-2 p-2"
                  // value={credentials.email}
                  // onChange={onChange}
                  type="username"
                  id="username"
                  name="username"
                  placeholder="User Name"
                  required=""
                />
              </Row>
              <Col className="mt-3 mb-1">Password</Col>
              <Row style={{}}>
                <input
                  className="text-input mt-2 ms-2 p-2"
                  // value={credentials.email}
                  // onChange={onChange}
                  type="Password"
                  id="Password"
                  name="Password"
                  placeholder="Password"
                  required=""
                />
              </Row>
              <Row>
                <Col className="">
                  <Form.Group
                    className="mt-2 mediumfont"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                </Col>
                <Col
                  className="mt-2 mediumfont text-end cursorpointer"
                  onClick={handlePasswordChange}
                >
                  Forget Password
                </Col>
              </Row>
              <Col
                lg={12}
                xxl={12}
                md={12}
                xl={12}
                className="fontcolorwhite cursorpointer mediumfontbold d-flex align-items-center justify-content-center mt-5 ms-2 app-access-continuebtn backgroundcolorsecondary bordercolororange p-2"
                onClick={handleHomePage}
              >
                Login
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

export default Login;
