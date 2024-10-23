import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Access = () => {
  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <Container
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
              <Col className="mt-5">Access Key</Col>
              <Row style={{}}>
                <input
                  className="text-input mt-2 ms-2 p-2"
                  type="text"
                  id="accesskey"
                  name="accesskey"
                  placeholder="Access Key"
                  required
                />
              </Row>
              <Col
                lg={12}
                xxl={12}
                md={12}
                xl={12}
                className="fontcolorwhite cursorpointer mediumfontbold d-flex align-items-center justify-content-center mt-5 ms-2 app-access-continuebtn backgroundcolorsecondary bordercolororange p-2"
                onClick={handleLoginPage}
              >
                Continue
              </Col>
            </Card>
          </Col>
          <Col lg={5} md={5} xl={5}>
            <Col className="extralargefontbold mb-3 d-flex align-items-center justify-content-center fontcolororange">
              SPECTRUM ISP
            </Col>
            <Col className=" d-flex align-items-center justify-content-center extralargefontbold fontcolororange">
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

export default Access;
