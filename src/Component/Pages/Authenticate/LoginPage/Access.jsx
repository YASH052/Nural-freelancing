import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Access = () => {
  const navigate = useNavigate();
  const [accessKey, setAccessKey] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleLoginPage = () => {
    if (!accessKey) {
      setError("Access key is required");
      setShowAlert(true);
      return;
    }
    navigate("/login"); // Navigate to the login page if validation passes
  };

  const handleChange = (e) => {
    setAccessKey(e.target.value);
    setError("");
    setShowAlert(false);
  };

  return (
    <Container
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
                <Form.Group controlId="accessKey" className="mt-4">
                  <Form.Label>Access Key</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Access Key"
                    value={accessKey}
                    onChange={handleChange}
                    isInvalid={!!error}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  variant="primary"
                  className="w-100 mt-5 backgroundcolorsecondary bordercolororange p-2"
                  onClick={handleLoginPage}
                >
                  Continue
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

export default Access;
