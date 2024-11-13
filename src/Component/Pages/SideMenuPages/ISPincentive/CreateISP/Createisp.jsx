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
  let data = [];
const defaultProps = {
  options: data,
  getOptionLabel: (option) => option.title,
};
 const [schemeName, setSchemeName] = useState("");
 const [schemeOn, setSchemeOn] = useState(null);
 const [payoutType, setPayoutType] = useState(null);
 const [payoutOn, setPayoutOn] = useState(null);
 const [schemeFrom, setSchemeFrom] = useState("");
 const [schemeTo, setSchemeTo] = useState("");
 const [errors, setErrors] = useState({});

 const validateForm = () => {
   const validationErrors = {};

   if (!schemeName) {
     validationErrors.schemeName = "Scheme Name is required.";
   }
   if (!schemeFrom) {
     validationErrors.schemeFrom = "Scheme From date is required.";
   }
   if (!schemeTo) {
     validationErrors.schemeTo = "Scheme To date is required.";
   } else if (schemeTo < schemeFrom) {
     validationErrors.schemeTo =
       "Scheme To date cannot be earlier than Scheme From date.";
   }

   setErrors(validationErrors);
   return Object.keys(validationErrors).length === 0;
 };

 const handleSearch = (e) => {
   e.preventDefault();
   if (validateForm()) {
     console.log("Form data:", {
       schemeName,
       schemeOn,
       payoutType,
       payoutOn,
       schemeFrom,
       schemeTo,
     });
     // Add search logic here
   }
 };

const [fileError, setFileError] = useState("");

const handleButtonClick2 = (inputRef2) => {
  inputRef2.current.click();
};
const handleButtonClick3 = (inputRef3) => {
  inputRef3.current.click();
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
const handleFileChange3 = (event) => {
  const file = event.target.files[0];
  if (file) {
    setSelectedFileName3(file.name);
    setFileError(""); // Clear error if a file is selected
  } else {
    setSelectedFileName3("");
    setFileError("No file selected"); // Show error if no file is selected
  }
};
const handleFormSubmit1 = (e) => {
  e.preventDefault();
  if (!selectedFileName1) {
    setFileError("Please choose a file to upload");
  } else {
    console.log("File uploaded:", selectedFileName1);
    // Further file handling code here
  }
};
const handleFormSubmit2 = (e) => {
  e.preventDefault();
  if (!selectedFileName2) {
    setFileError("Please choose a file to upload");
  } else {
    console.log("File uploaded:", selectedFileName2);
    // Further file handling code here
  }
};
const handleFormSubmit3 = (e) => {
  e.preventDefault();
  if (!selectedFileName2) {
    setFileError("Please choose a file to upload");
  } else {
    console.log("File uploaded:", selectedFileName3);
    // Further file handling code here
  }
};
 const handleShowAll = () => {
   // Add logic for showing all schemes here
   console.log("Show all schemes");
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
              className="cursorpointer bordercolororange p-1 mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.create} {MenuConstants.ispIncentive}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              onClick={handleviewisp}
              className="cursorpointer  position-absolute end-0 p-1 me-3  bordercolororange mediumfontbold app-btns-format "
            >
              {MenuConstants.view} {MenuConstants.ispIncentive}
            </Col>
            <Form onSubmit={handleSearch}>
              <Row className="app-country-box">
                {/* Scheme Name */}
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 mt-3">{MenuConstants.Scheme} Name</Row>
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
                  <Row className="ms-4 mt-3">{MenuConstants.Scheme} On</Row>
                  <Col className="ms-4 mb-3">
                    <Autocomplete
                      {...defaultProps}
                      value={schemeOn}
                      onChange={(e, newValue) => setSchemeOn(newValue)}
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

                {/* Payout Type */}
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 mt-3">{MenuConstants.payout} Type</Row>
                  <Col className="ms-4 mb-3">
                    <Autocomplete
                      {...defaultProps}
                      value={payoutType}
                      onChange={(e, newValue) => setPayoutType(newValue)}
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

                <Row className="mt-3">
                  {/* Payout On */}
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">{MenuConstants.payout} On</Row>
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

                  {/* Scheme From Date */}
                  <Col className="ms-4" xxl={3} xl={3} lg={3} md={3}>
                    {MenuConstants.Scheme} From
                    <Col className="mt-1">
                      <input
                        type="date"
                        value={schemeFrom}
                        onChange={(e) => setSchemeFrom(e.target.value)}
                        className="date-input"
                        required
                      />
                      {errors.schemeFrom && (
                        <div className="error-text">{errors.schemeFrom}</div>
                      )}
                    </Col>
                  </Col>

                  {/* Scheme To Date */}
                  <Col className="ms-3">
                    {MenuConstants.Scheme} To
                    <Col className="input-container mt-1">
                      <input
                        type="date"
                        value={schemeTo}
                        onChange={(e) => setSchemeTo(e.target.value)}
                        className="date-input"
                        required
                      />
                      {errors.schemeTo && (
                        <div className="error-text">{errors.schemeTo}</div>
                      )}
                    </Col>
                  </Col>
                </Row>

                {/* Action Buttons */}
                <Row className="ms-2 mb-4 mt-3">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                      onClick={handleShowAll}
                    >
                      {MenuConstants.showall}
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </Row>
          <Row className="ms-4 mt-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              Select Users
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              {" "}
              <Form onSubmit={handleFormSubmit1}>
                <Row>
                  <Col xxl={4} xl={4} lg={4} md={4}>
                    <Row className="ms-4 mt-4">Upload File</Row>
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
                    {fileError && (
                      <div className="text-danger">{fileError}</div>
                    )}
                  </Col>
                  {/* <Row className="ms-4 mb-4"> */}
                  <Col>
                    <Button
                      type="submit"
                      className="cursorpointer app-btn-format mt-5 backgroundcolorsecondary bordercolororange app-btns-format"
                    >
                      Upload
                    </Button>
                  </Col>

                  <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                    {MenuConstants.download} {MenuConstants.user} Template
                  </Col>
                  <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                    {MenuConstants.download} Reference Code
                  </Col>
                </Row>
              </Form>
            </Row>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-4 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.upload} {MenuConstants.SKU}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              {" "}
              <Form onSubmit={handleFormSubmit2}>
                <Row>
                  <Col xxl={4} xl={4} lg={4} md={4}>
                    <Row className="ms-4 mt-4">Upload File</Row>
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
                    {fileError && (
                      <div className="text-danger">{fileError}</div>
                    )}
                  </Col>
                  {/* <Row className="ms-4 mb-4"> */}
                  <Col>
                    <Button
                      type="submit"
                      className="cursorpointer app-btn-format mt-5 backgroundcolorsecondary bordercolororange app-btns-format"
                    >
                      Upload
                    </Button>
                  </Col>

                  <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                    {MenuConstants.download} {MenuConstants.SKU} Template
                  </Col>
                  <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                    {MenuConstants.download} Reference Code
                  </Col>
                </Row>
              </Form>
            </Row>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-4 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.upload} {MenuConstants.payout}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              {" "}
              <Form onSubmit={handleFormSubmit3}>
                <Row>
                  <Col xxl={4} xl={4} lg={4} md={4}>
                    <Row className="ms-4 mt-4">Upload File</Row>
                    <Button
                      className="ms-4 mb-3 app-uploadfile-btn"
                      onClick={() => handleButtonClick3(fileInputRef3)}
                    >
                      Choose File
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef3}
                      style={{ display: "none" }}
                      onChange={handleFileChange3}
                    />
                    <span className="borderbottom">
                      {selectedFileName3 || "No file selected"}
                    </span>
                    {fileError && (
                      <div className="text-danger">{fileError}</div>
                    )}
                  </Col>
                  {/* <Row className="ms-4 mb-4"> */}
                  <Col lg={2} md={2} xl={2} xxl={2} sm={2}>
                    <Button
                      type="submit"
                      className="cursorpointer app-btn-format mt-5 backgroundcolorsecondary bordercolororange app-btns-format"
                    >
                      Upload
                    </Button>
                  </Col>
                  <Col className="mt-5 fontcolororange cursorpointer" lg={3}>
                    {MenuConstants.download} {MenuConstants.payout} Template
                  </Col>
                </Row>
              </Form>
            </Row>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default Createisp;
