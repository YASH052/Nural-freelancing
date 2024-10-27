import React, { useState } from "react";
import {
  Card,
  Col,
  Form,
  Container,
  Row,
  Button,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    if (!username && !email) {
      setError("Please enter either username or email.");
      setShowAlert(true);
      return;
    }
    // Proceed with password reset logic
    navigate("/login");
  };

  return (
    <Container
      fluid
      className="app-access-maincontainer d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
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
              {showAlert && (
                <Alert
                  variant="danger"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  {error}
                </Alert>
              )}
              <Form>
                <Form.Group controlId="username" className="mt-4">
                  <Form.Label>Enter Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Row className="mt-3 align-items-center justify-content-center">OR</Row>
                <Form.Group controlId="email" className="mt-2">
                  <Form.Label>Enter Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col
                    className="mt-1 fontcolororange mediumfont text-end cursorpointer"
                    onClick={() => navigate("/login")}
                  >
                    Back
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  className="w-100 mt-4 backgroundcolorsecondary bordercolororange p-2"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
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
