import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Alert,
} from "react-bootstrap";
import { TextField } from "@mui/material";
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
              <form className="mt-4">
                <Row>
                  <Row className="ms-0">Enter UserName</Row>
                  <Col className="mt-1">
                    <TextField
                      fullWidth
                      // label="Enter Username"
                      // variant="standard"
                      className="app-text-field"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      error={!!error && !email}
                      helperText={error && !email ? error : ""}
                    />
                  </Col>
                </Row>
                <Row className="mt-3 align-items-center justify-content-center">
                  OR
                </Row>
                <Row>
                  <Row className="ms-0">Enter Email</Row>
                  <Col className="mt-1">
                    <TextField
                      fullWidth
                      // label="Enter Email ID"
                      // variant="standard"
                      type="email"
                      className="app-text-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={!!error && !username}
                      helperText={error && !username ? error : ""}
                    />
                  </Col>
                </Row>
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
              </form>
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
