import { useRef, useState } from "react";


import {
 
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
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
 

const CreateTarget = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(
    MenuConstants.nofileselected
  );

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the click event on the hidden file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name); // Update the state with the file name
    } else {
      setSelectedFileName(MenuConstants.nofileselected); // Reset if no file is selected
    }
  };
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handleTarget = () => {
    navigate("/viewtarget"); // Navigate to the settings route
  };
  return (
    <Container fluid>
      <Row className="mb-5">
        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.target}
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.create} {MenuConstants.target}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0 me-3  bordercolororange mediumfontbold app-LandingPage-locations"
              onClick={handleTarget}
            >
              {MenuConstants.view} {MenuConstants.target}
            </Col>
            <Row className="app-country-box ms-0 ">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3">Save/ Update</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="target"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">save</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">update</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3"> {MenuConstants.target} Name</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="target"
                      className="form-control app-placeholder"
                    />
                  </InputGroup>
                </Col>
              </Col>

              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3"> {MenuConstants.target} For</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="Target"
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
              <Row className="mt-3">
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4"> {MenuConstants.target} Type</Row>
                  <Col className="ms-4 mb-3">
                    <InputGroup>
                      <FormControl
                        type="text"
                        placeholder="target"
                        className="form-control app-placeholder"
                      />
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="outline-none"
                          id="dropdown-basic"
                        ></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Quantity
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Value</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </Col>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4">Template Category</Row>
                  <Col className="ms-4 mb-3">
                    <InputGroup>
                      <FormControl
                        type="text"
                        placeholder="target"
                        className="form-control app-placeholder"
                      />
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="outline-none"
                          id="dropdown-basic"
                        ></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            category {MenuConstants.wise}
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            product {MenuConstants.wise}
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            model {MenuConstants.wise}
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            {MenuConstants.SKU} {MenuConstants.wise}
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">WOD</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </Col>
                </Col>
                <Col className="ms-4">
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
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4">Template Category</Row>
                  <Col className="ms-4 mb-3">
                    <InputGroup>
                      <FormControl
                        type="text"
                        placeholder="target"
                        className="form-control app-placeholder"
                      />
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="outline-none"
                          id="dropdown-basic"
                        ></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">sale</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            purchase
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </Col>
                </Col>
              </Row>
              <Col xxl={4} xl={4} lg={4} md={4}>
                <Row className="ms-4">
                  {" "}
                  {MenuConstants.upload} {MenuConstants.file}
                </Row>
                <Button
                  className="ms-4 mb-3 app-uploadfile-btn"
                  onClick={() => handleButtonClick(fileInputRef)}
                >
                  {MenuConstants.choose} {MenuConstants.file}
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }} // Hide the input
                  onChange={(event) =>
                    handleFileChange(event, setSelectedFileName)
                  }
                />
                <span className="borderbottom">{selectedFileName}</span>
              </Col>

              <Row className="ms-2 mb-4 mt-3">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.upload}
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>

              <Row className="smallfontsemibold mt-4 p-0 ms-3 fontcolororange">
                <Col className="cursorpointer">
                  {MenuConstants.download} category {MenuConstants.wise}{" "}
                  Template
                </Col>
                <Col className="cursorpointer">
                  {MenuConstants.download} category {MenuConstants.wise}{" "}
                  Template
                </Col>
                <Col className="cursorpointer">
                  {MenuConstants.download} category {MenuConstants.wise}{" "}
                  Template
                </Col>
                <Col className="cursorpointer">
                  {MenuConstants.download} category {MenuConstants.wise}{" "}
                  Template
                </Col>
              </Row>
              <Row className="smallfontsemibold mt-4 ms-3 p-0 fontcolororange">
                <Col xxl={3} xl={3} lg={3} md={3} className="cursorpointer">
                  {MenuConstants.download} category {MenuConstants.wise}{" "}
                  Template
                </Col>
                <Col
                  xxl={3}
                  xl={3}
                  lg={3}
                  md={3}
                  className="mb-3 cursorpointera"
                >
                  {MenuConstants.download} category {MenuConstants.wise}{" "}
                  Template
                </Col>
              </Row>
            </Row>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default CreateTarget;
