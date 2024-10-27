import { TextField } from "@mui/material";
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

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    navigate("/setting");
  };

  const handlePasswordChange = () => {
    navigate("/forgotPassword");
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
                  Incorrect username or password
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="mt-3">
                  <Form.Label>Username</Form.Label>
                  <TextField
                    fullWidth
                    name="username" // Add name attribute
                    value={formData.username}
                    onChange={handleChange}
                    className="app-text-field"
                    error={!!errors.username}
                    helperText={errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <TextField
                    fullWidth
                    name="password" // Add name attribute
                    type="password" // Add password type for security
                    value={formData.password}
                    onChange={handleChange}
                    className="app-text-field"
                    error={!!errors.password}
                    helperText={errors.password}
                  />
                </Form.Group>
                <Row className="mt-3">
                  <Col>
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Col>
                  <Col
                    className="text-end cursorpointer"
                    onClick={handlePasswordChange}
                  >
                    Forget Password
                  </Col>
                </Row>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 fontcolorwhite cursorpointer mediumfontbold d-flex align-items-center justify-content-center mt-5 app-access-continuebtn backgroundcolorsecondary bordercolororange p-2"
                  onClick={handleSubmit}
                >
                  Login
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
                alt="ISP Logo"
                style={{ width: "400px", height: "300px" }}
              />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <img
                className="fontcolorwhite"
                src="./sidelogo2.jpg"
                alt="Secondary Logo"
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
