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
  Form,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import { Autocomplete, TextField } from "@mui/material";
 

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
  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };

   const [targetName, setTargetName] = useState("");
   const [fromDate, setFromDate] = useState("");
   const [toDate, setToDate] = useState("");
   const [errors, setErrors] = useState({});
   const validateForm = () => {
     const validationErrors = {};

     if (!targetName) {
       validationErrors.targetName = "Target Name is required.";
     }
     if (!fromDate) {
       validationErrors.fromDate = "From Date is required.";
     }
     if (!toDate) {
       validationErrors.toDate = "To Date is required.";
     } else if (toDate < fromDate) {
       validationErrors.toDate = "To Date cannot be earlier than From Date.";
     }
     if (!selectedFileName) {
       validationErrors.file = "Please upload a file.";
     }

     setErrors(validationErrors);
     return Object.keys(validationErrors).length === 0;
   };

   const handleUpload = (e) => {
     e.preventDefault();
     if (validateForm()) {
       console.log("Form data:", {
         targetName,
         fromDate,
         toDate,
         selectedFileName,
       });
     }
   };

   const handleCancel = () => {
     setTargetName("");
     setFromDate("");
     setToDate("");
     setSelectedFileName("");
     setErrors({});
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
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.create} {MenuConstants.target}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0 me-3  bordercolororange mediumfontbold app-btns-format "
              onClick={handleTarget}
            >
              {MenuConstants.view} {MenuConstants.target}
            </Col>
            <Row className="app-country-box ms-0">
            <Form onSubmit={handleUpload} onReset={handleCancel}>
              
                {/* Save/Update */}
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Save/Update</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
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

                  {/* Target Name */}
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">{MenuConstants.target} Name</Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        variant="standard"
                        className="mt-1 app-input-width"
                        value={targetName}
                        onChange={(e) => setTargetName(e.target.value)}
                        error={!!errors.targetName}
                        helperText={errors.targetName}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Target For</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
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
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Target Type</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
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
                    <Row className="ms-4 mt-3">Target Based On</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
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
                  {/* Date Fields */}
                  <Col className="ms-4 mt-3">
                    Target From
                    <Col className="mt-1">
                      <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="date-input app-input-width"
                        required
                      />
                      {errors.fromDate && (
                        <div className="error-text">{errors.fromDate}</div>
                      )}
                    </Col>
                  </Col>
                  <Col className="mt-3">
                    Target To
                    <Col className="mt-1">
                      <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="date-input app-input-width"
                        required
                      />
                      {errors.toDate && (
                        <div className="error-text">{errors.toDate}</div>
                      )}
                    </Col>
                  </Col>
                </Row>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Target Based On</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
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
                {/* File Upload */}
                <Col xxl={4} xl={4} lg={4} md={4}>
                  <Row className="ms-4">
                    {MenuConstants.upload} {MenuConstants.file}
                  </Row>
                  <Button
                    className="ms-4 mb-3 app-uploadfile-btn"
                    onClick={handleButtonClick}
                  >
                    {MenuConstants.choose} {MenuConstants.file}
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <span className="borderbottom">{selectedFileName}</span>
                  {errors.file && (
                    <div className="error-text">{errors.file}</div>
                  )}
                </Col>
                <Row className="ms-2 mb-4 mt-3">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.upload}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
              

              {/* Action Buttons */}
            </Form>
            <Row className="smallfontsemibold mt-4 p-0 ms-3 fontcolororange">
              <Col className="cursorpointer">
                {MenuConstants.download} category {MenuConstants.wise} Template
              </Col>
              <Col className="cursorpointer">
                {MenuConstants.download} category {MenuConstants.wise} Template
              </Col>
              <Col className="cursorpointer">
                {MenuConstants.download} category {MenuConstants.wise} Template
              </Col>
              <Col className="cursorpointer">
                {MenuConstants.download} category {MenuConstants.wise} Template
              </Col>
            </Row>
            <Row className="smallfontsemibold mt-4 ms-3 p-0 fontcolororange">
              <Col xxl={3} xl={3} lg={3} md={3} className="cursorpointer">
                {MenuConstants.download} category {MenuConstants.wise} Template
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3} className="mb-3 cursorpointera">
                {MenuConstants.download} category {MenuConstants.wise} Template
              </Col>
            </Row>
            </Row>
          </Row>
        </Row>
      </Row>
      {/* </Row> */}
    </Container>
  );
};

export default CreateTarget;
