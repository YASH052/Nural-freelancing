import { useRef, useState } from "react";

import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import { Autocomplete, TextField } from "@mui/material";

const CreateClient = () => {
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  

  // States for each selected file name
  const [selectedFileName1, setSelectedFileName1] = useState(
    MenuConstants.nofileselected
  );
  const [selectedFileName2, setSelectedFileName2] = useState(
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
  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
  const [schemeName, setSchemeName] = useState("");
 
  const [payoutOn, setPayoutOn] = useState(null);
  
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};

   
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", {
        
      
      });
      // Add search logic here
    }
  };

  const [fileError, setFileError] = useState("");

  const handleButtonClick2 = (inputRef2) => {
    inputRef2.current.click();
  };

  const handleButtonClick1 = (inputRef1) => {
    inputRef1.current.click();
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName2(file.name);
      setFileError(""); // Clear error if a file is selected
    } else {
      setSelectedFileName2("");
      setFileError("No file selected"); // Show error if no file is selected
    }
  };
  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName1(file.name);
      setFileError(""); // Clear error if a file is selected
    } else {
      setSelectedFileName1("");
      setFileError("No file selected"); // Show error if no file is selected
    }
  };
  const handleManageWebMenu = () => {
    navigate("/managewebmenu");
  };
  const handleManageAppMenu = () =>{
    navigate("/manageappmenu")
  }
  const handleShowAll = () => {
    // Add logic for showing all schemes here
    console.log("Show all schemes");
  };
  return (
    <Container fluid>
      <Row></Row>
      <Row className="mb-4">
        <></>

        <Row className="mb-4">
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            {MenuConstants.manage} {MenuConstants.client}
          </Col>
          <Row className="ms-2 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange backgroundcolorsecondary fontcolorwhite p-1 mediumfont  mediumfontbold  me-4 app-btns-format "
            >
              {MenuConstants.create} {MenuConstants.client}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer p-1 me-3  bordercolororange mediumfontbold app-btns-format "
              onClick={handleManageWebMenu}
            >
              {MenuConstants.manage} Web Menu
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  bordercolororange mediumfontbold app-btns-format "
                onClick={handleManageAppMenu}
            >
              {MenuConstants.manage} App Menu
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              //   onClick={handleViewClient}
              className="cursorpointer  position-absolute end-0 p-1 me-3  bordercolororange mediumfontbold app-btns-format "
            >
              {MenuConstants.view} {MenuConstants.client}
            </Col>

            <Form onSubmit={handleSearch}>
              <Row className="app-country-box">
                {/* Scheme Name */}
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 mt-3">{MenuConstants.client} Name</Row>
                  <Col className="ms-4 mb-3">
                    <TextField
                      id="standard-basic"
                      className="mt-1 app-input-width"
                      variant="standard"
                      value={schemeName}
                      onChange={(e) => setSchemeName(e.target.value)}
                      error={!!errors.schemeName}
                      helperText={errors.schemeName}
                    />
                  </Col>
                </Col>

                {/* Scheme On */}
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 mt-3">Company Name</Row>
                  <Col className="ms-4 mb-3">
                    <TextField
                      id="standard-basic"
                      className="mt-1 app-input-width"
                      variant="standard"
                      value={schemeName}
                      onChange={(e) => setSchemeName(e.target.value)}
                      error={!!errors.schemeName}
                      helperText={errors.schemeName}
                    />
                  </Col>
                </Col>

                {/* Payout Type */}
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 mt-3">Company Access Key</Row>
                  <Col className="ms-4 mb-3">
                    <TextField
                      id="standard-basic"
                      className="mt-1 app-input-width"
                      variant="standard"
                      value={schemeName}
                      onChange={(e) => setSchemeName(e.target.value)}
                      error={!!errors.schemeName}
                      helperText={errors.schemeName}
                    />
                  </Col>
                </Col>

                <Row className="mt-3">
                  {/* Payout On */}
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Date Format</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Attendance Fencing</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Geo Fencing</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Attendance Image</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                </Row>
                <Row className="mt-3">
                  {/* Payout On */}
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Tertiary Customer Detail</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Location update Freq.</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Max Serial Length</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Min Serial Length</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                </Row>
                <Row className="mt-3">
                  {/* Payout On */}
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Inventory Mgmt. (Isp Sale)</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Primary Color</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Seconadary Color</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={payoutOn}
                        onChange={(e, newValue) => setPayoutOn(newValue)}
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                          />
                        )}
                      />
                    </Col>
                  </Col>
                </Row>
                <Row>
                  {" "}
                  <Row className="mt-4">
                    <Col xxl={4} xl={4} lg={4} md={4}>
                      <Row className="ms-4 mt-4">Client logo</Row>
                      <Button
                        className="ms-4 mb-3 app-uploadfile-btn"
                        onClick={() => handleButtonClick1(fileInputRef1)}
                      >
                        Choose File
                      </Button>
                      <input
                        type="file"
                        ref={fileInputRef1}
                        style={{ display: "none" }}
                        onChange={handleFileChange1}
                      />
                      <span className="borderbottom">
                        {selectedFileName1 || "No file selected"}
                      </span>
                    </Col>
                    {/* <Row className="ms-4 mb-4"> */}
                    <Col className="ms-5 mt-3 smallfontsemibold">
                      <Row> Note:</Row>
                      <Row> Image Specs: Image Pixel 8024*2424</Row>
                      <Row> Format:Jpeg</Row>
                      <Row> Size {"<"}1 MB</Row>
                    </Col>
                  </Row>
                </Row>
                <Row className="mt-4 ">
                  {" "}
                  <Row>
                    <Col xxl={4} xl={4} lg={4} md={4}>
                      <Row className="ms-4 mt-2">Flash Screen Image(App)</Row>
                      <Button
                        className="ms-4 mb-3 app-uploadfile-btn"
                        onClick={() => handleButtonClick2(fileInputRef2)}
                      >
                        Choose File
                      </Button>
                      <input
                        type="file"
                        ref={fileInputRef2}
                        style={{ display: "none" }}
                        onChange={handleFileChange2}
                      />
                      <span className="borderbottom">
                        {selectedFileName2 || "No file selected"}
                      </span>
                    </Col>
                    {/* <Row className="ms-4 mb-4"> */}
                    <Col className="ms-5 smallfontsemibold">
                      <Row> Note:</Row>
                      <Row> Image Specs: Image Pixel 8024*2424</Row>
                      <Row> Format:Jpeg</Row>
                      <Row> Size {"<"}1 MB</Row>
                    </Col>
                  </Row>
                </Row>
                {/* Action Buttons */}
                <Row className="ms-2 mb-4 mt-5">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.create}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                      onClick={handleShowAll}
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default CreateClient;
