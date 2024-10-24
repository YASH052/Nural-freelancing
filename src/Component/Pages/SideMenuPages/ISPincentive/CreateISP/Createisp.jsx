import { useRef, useState } from "react";

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
 

const Createisp = () => {
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);

  // States for each selected file name
  const [selectedFileName1, setSelectedFileName1] = useState(
    MenuConstants.nofileselected
  );
  const [selectedFileName2, setSelectedFileName2] = useState(
    MenuConstants.nofileselected
  );
  const [selectedFileName3, setSelectedFileName3] = useState(
    MenuConstants.nofileselected
  );

  // Handle button click to open file explorer
  const handleButtonClick = (inputRef) => {
    inputRef.current.click(); // Trigger the click event on the specific hidden file input
  };
  const handleFileChange = (event, setFileName) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the state with the selected file name
    } else {
      setFileName(MenuConstants.nofileselected); // Reset if no file is selected
    }
  };
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handleviewisp = () => {
    navigate("/ispincentive"); // Navigate to the settings route
  };
  return (
    <Container fluid>
      <Row></Row>
      <Row className="mb-4">
        <></>

        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.ispIncentive}
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange p-1 mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.create} {MenuConstants.ispIncentive}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              onClick={handleviewisp}
              className="cursorpointer  position-absolute end-0 p-1 me-3  bordercolororange mediumfontbold app-LandingPage-locations"
            >
              {MenuConstants.view} {MenuConstants.ispIncentive}
            </Col>
            <Row className="app-country-box ms-0 ">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3"> {MenuConstants.Scheme} Name</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="name"
                      className="form-control app-placeholder"
                    />
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3"> {MenuConstants.Scheme} On</Row>
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
                        <Dropdown.Item href="#/action-1">
                          sales Ach- Qty
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          sales Ach-value
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Activation- Qty
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3"> {MenuConstants.payout} Type</Row>
                <Col className="ms-4 mb-3">
                  <InputGroup>
                    <FormControl
                      type="text"
                      placeholder="type"
                      className="form-control app-placeholder"
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-none"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          % if Inv value
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Points per Qty
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Rupees per Qty
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Col>
              </Col>
              <Row className="mt-3">
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 "> {MenuConstants.payout} On</Row>
                  <Col className="ms-4 mb-3">
                    <InputGroup>
                      <FormControl
                        type="text"
                        placeholder="type"
                        className="form-control app-placeholder"
                      />
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="outline-none"
                          id="dropdown-basic"
                        ></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Primary Sales
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Secondary Sales
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Tertiary Sales
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </Col>
                </Col>
                <Col className="ms-4" xxl={3} xl={3} lg={3} md={3}>
                  {MenuConstants.Scheme} From
                  <Col className="mt-1">
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
                  {MenuConstants.Scheme} To
                  <Col className="input-container mt-1 ">
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
              </Row>
              <Row className="ms-2 mb-4 mt-3">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.search}
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations">
                    {MenuConstants.showall}
                  </Button>
                </Col>
              </Row>
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
              Select Users
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              {" "}
              <Col xxl={4} xl={4} lg={4} md={4}>
                <Row className="ms-4 mt-4">
                  {" "}
                  {MenuConstants.upload} {MenuConstants.file}
                </Row>
                <Button
                  className="ms-4 mb-3 app-uploadfile-btn"
                  onClick={() => handleButtonClick(fileInputRef1)}
                >
                  {MenuConstants.choose} {MenuConstants.file} 1
                </Button>
                <input
                  type="file"
                  ref={fileInputRef1}
                  style={{ display: "none" }} // Hide the input
                  onChange={(event) =>
                    handleFileChange(event, setSelectedFileName1)
                  }
                />
                <span className="borderbottom">{selectedFileName1}</span>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Button className="backgroundcolorsecondary bordercolororange mb-4 mt-5">
                  {MenuConstants.upload}
                </Button>
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                {MenuConstants.download} User Template
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                {MenuConstants.download} Reference Code
              </Col>
            </Row>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-4 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.upload} {MenuConstants.SKU}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              {" "}
              <Col xxl={4} xl={4} lg={4} md={4}>
                <Row className="ms-4 mt-4"> {MenuConstants.upload}File</Row>
                <Button
                  className="ms-4 mb-3 app-uploadfile-btn"
                  onClick={() => handleButtonClick(fileInputRef2)}
                >
                  {MenuConstants.choose} {MenuConstants.file}
                </Button>
                <input
                  type="file"
                  ref={fileInputRef2}
                  style={{ display: "none" }} // Hide the input
                  onChange={(event) =>
                    handleFileChange(event, setSelectedFileName2)
                  }
                />
                <span className="borderbottom">{selectedFileName2}</span>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Button className="backgroundcolorsecondary bordercolororange mb-4 mt-5">
                  {MenuConstants.upload}
                </Button>
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                {MenuConstants.download} {MenuConstants.SKU} Template
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                {MenuConstants.download} Reference Code
              </Col>
            </Row>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-4 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-LandingPage-locations"
            >
              {MenuConstants.upload} {MenuConstants.payout}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              {" "}
              <Col xxl={4} xl={4} lg={4} md={4}>
                <Row className="ms-4 mt-4">
                  {" "}
                  {MenuConstants.upload} {MenuConstants.file}
                </Row>
                <Button
                  className="ms-4 mb-3 app-uploadfile-btn"
                  onClick={() => handleButtonClick(fileInputRef3)}
                >
                  {MenuConstants.choose} {MenuConstants.file}
                </Button>
                <input
                  type="file"
                  ref={fileInputRef3}
                  style={{ display: "none" }} // Hide the input
                  onChange={(event) =>
                    handleFileChange(event, setSelectedFileName3)
                  }
                />
                <span className="borderbottom">{selectedFileName3}</span>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Button className="backgroundcolorsecondary bordercolororange mb-4 mt-5">
                  {MenuConstants.upload}
                </Button>
              </Col>
              <Col className="mt-5 fontcolororange cursorpointer" lg={4}>
                {MenuConstants.download} {MenuConstants.payout} Template
              </Col>
            </Row>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default Createisp;
