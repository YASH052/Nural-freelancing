import { useRef, useState } from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateSurveyLink = () => {
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
  const handleViewSurvey = () => {
    navigate("/viewsurvey"); // Navigate to the settings route
  };
  const data = [];
  const defaultProps = {
    options: data,
  };
  const SurveyType = ["Link", "Self", "Customer"];
  const props ={
    options:SurveyType
  }

  const [targetName, setTargetName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
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
  const handleSelect = (event, value) => {
    if (value === "Customer") {
      navigate("/createsurveycustomer"); // Replace with your target path
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
            {MenuConstants.survey} {">"} {MenuConstants.create}{" "}
            {MenuConstants.survey}
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.create} {MenuConstants.survey}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0 me-3  bordercolororange mediumfontbold app-btns-format "
              onClick={handleViewSurvey}
            >
              {MenuConstants.view} {MenuConstants.survey}
            </Col>
            <Row className="app-country-box ms-0">
              <Form onSubmit={handleUpload} onReset={handleCancel}>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">{MenuConstants.survey} Type</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...props}
                        disableCloseOnSelect
                        value="Link"
                        onChange={handleSelect}
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
                    <Row className="ms-4 mt-3">{MenuConstants.survey} Name</Row>
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
                    <Row className="ms-4 mt-3">{MenuConstants.survey} Link</Row>
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
                </Row>
                <Row>
                  {/* Date Fields */}
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">{MenuConstants.description}</Row>
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
                  <Col xxl={3} xl={3} lg={3} md={3} className="ms-4 mt-3">
                    {MenuConstants.survey} Start Date
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
                  <Col xxl={3} xl={3} lg={3} md={3} className=" mt-3">
                    {MenuConstants.survey} End Date
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
                </Row>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Open TO All</Row>
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
                  <Row className="ms-0">
                    <Col>
                      <Checkbox />
                      {MenuConstants.nsm}
                      <Checkbox className="ms-5" /> {MenuConstants.rsm}
                    </Col>
                  </Row>
                  <Row className="ms-0">
                    <Col>
                      <Checkbox />
                      {MenuConstants.asm}
                      <Checkbox className="ms-5" /> ISP
                    </Col>
                  </Row>
                </Row>
                {/* File Upload */}

                <Row className="ms-2 mb-4 mt-3">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-4 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.create}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-4 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>

                {/* Action Buttons */}
              </Form>
            </Row>
          </Row>
        </Row>
      </Row>
      {/* </Row> */}
    </Container>
  );
};

export default CreateSurveyLink;
