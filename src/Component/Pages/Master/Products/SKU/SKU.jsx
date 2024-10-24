import {
  Row,
  Col,
  Button,
  InputGroup,
  Dropdown,
  FormControl,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
 


import {
  faLightbulb,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
const SKU = () => {
  return (
    <>
      <Row className="mt-1 ms-0 fontcolorblackbold borderbottom ">
        Masters {">"} {MenuConstants.SKU}
      </Row>
      <Row className="ms-2 mt-2">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-LandingPage-locations"
        >
          Manage {MenuConstants.SKU}
        </Col>
        <Row className="app-country-box ms-0">
          <Col xxl={3} xl={3} lg={3} md={3}>
            <Row className="ms-4 mt-3">Brand</Row>
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
                    <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
            </Col>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={3}>
            <Row className="ms-4 mt-3">Category</Row>
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
                    <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
            </Col>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={3}>
            <Row className="ms-4 mt-3">SubCategory</Row>
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
                    <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
            </Col>
          </Col>

          <Col xxl={3} xl={3} lg={3} md={3}>
            <Row className="ms-4 mt-3">Model</Row>
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
                    <Dropdown.Item href="#/action-1">xxx</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">xxx</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">xxx</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </InputGroup>
            </Col>
          </Col>
          <Row>
            <Col xxl={3} xl={3} lg={3} md={3}>
              <Row className="ms-4 mt-3">SKU Name</Row>
              <Col className="ms-4 mb-3">
                <input
                  type="text"
                  className="form-control app-placeholder" // Bootstrap class for styling input
                />
              </Col>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={3}>
              <Row className="ms-4 mt-3">SKU Code</Row>
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
              <Button className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                {MenuConstants.create}
              </Button>
            </Col>
            <Col>
              <Button className="bordercolororange cursorpointer mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                {MenuConstants.cancel}
              </Button>
            </Col>
          </Row>
        </Row>
      </Row>
      <Row className="ms-0 mt-4">
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
          <Col xxl={2} xl={2} lg={2} md={2}>
            <Row className="ms-4 mt-3">Brand</Row>
            <Col className="ms-4 mb-3">
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Select"
                  className="form-control app-placeholder"
                />
                <Dropdown>
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
            <Row className="ms-4 mt-3">Category</Row>
            <Col className="ms-4 mb-3">
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Select"
                  className="form-control app-placeholder"
                />
                <Dropdown>
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
            <Row className="ms-4 mt-3">SubCategory</Row>
            <Col className="ms-4 mb-3">
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Select"
                  className="form-control app-placeholder"
                />
                <Dropdown>
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
            <Row className="ms-4 mt-3">Model</Row>
            <Col className="ms-4 mb-3">
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Select"
                  className="form-control app-placeholder"
                />
                <Dropdown>
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

          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            className="cursorpointer position-absolute end-0 mt-5 me-3 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-LandingPage-locations"
          >
            Search
          </Col>

          <Row className="backgroundcolor fontcolorwhite ms-0 mt-4 mb-2">
            <Col xxl={2} xl={2} lg={2} md={2}>
              S.No
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              Category
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              SubCategory
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              Model
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              {MenuConstants.SKU}
            </Col>
            <Col>Action</Col>
          </Row>

          <Row className="ms-0 app-placeholder">
            <Col className="" xxl={2} xl={2} lg={2} md={2}>
              xxx
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              xxxxxxxxx
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              xxxxxxxxx
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              xxxxxxxxx
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              xxxxxxxxx
            </Col>
            <Col>
              <FontAwesomeIcon
                className="cursorpointer"
                icon={faLightbulb}
                style={{ color: "#FFD43B" }}
              />{" "}
              <FontAwesomeIcon
                className="cursorpointer"
                icon={faPenToSquare}
                style={{ color: "#74C0FC" }}
              />
            </Col>
          </Row>
          <Row className="ms-0 app-placeholder ">
            <Col xxl={2} xl={2} lg={2} md={2}>
              xxx
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              xxxxxxxxx
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              xxxxxxxxx
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              xxxxxxxxx
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2}>
              xxxxxxxxx
            </Col>
            <Col>
              <FontAwesomeIcon
                className="cursorpointer"
                icon={faLightbulb}
                style={{ color: "#FFD43B" }}
              />{" "}
              <FontAwesomeIcon
                className="cursorpointer"
                icon={faPenToSquare}
                style={{ color: "#74C0FC" }}
              />
            </Col>
          </Row>
          <Row className="mt-5 d-flex align-items-center justify-content-center text-center mb-3">
            <Col xs="auto">
              First {MenuConstants.page}
              <span
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
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
    </>
  );
};

export default SKU;
