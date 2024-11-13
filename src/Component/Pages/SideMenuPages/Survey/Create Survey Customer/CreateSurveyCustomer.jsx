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
import { Autocomplete, Checkbox, FormControlLabel, FormGroup, Radio, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateSurveyCustomer = () => {
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
  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };

  const [targetName, setTargetName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [selectedValue, setSelectedValue] = useState("a");
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
     if (value === "Link") {
       navigate("/createsurveylink"); // Replace with your target path
     }
   };
 const SurveyType = ["Link", "Self", "Customer"];
 const props = {
   options: SurveyType,
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
                        onChange={handleSelect}
                        value="Customer"
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="mt-1 app-input-width"
                            // disabled
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
                  <Col className="ms-4 mt-3">
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
                  <Col className="ms-4 mt-3">
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
                    <Row className="ms-4 mt-3">
                      {MenuConstants.description}{" "}
                    </Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    </Col>
                  </Col>
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
                  <Row>
                    <Col xxl={3} xl={3} lg={3} md={3}>
                      <Row className="ms-4 mt-3">
                        {MenuConstants.survey} Count
                      </Row>
                      <Col className="ms-4 mb-3">
                        <TextField
                          type="number"
                          variant="standard"
                          className="mt-1 app-input-width"
                        />
                      </Col>
                    </Col>
                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} className="ms-4">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="NSM" />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="RSM" />
                      </FormGroup>
                    </Col>
                    <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="ASM" />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="ISP" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Row>
                {/* File Upload */}
                <Row className="ms-4 fontcolororange mediumfontbold">
                  Add Questions
                </Row>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Question Type</Row>
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
                    <Row className="ms-4 mt-3">Question</Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    </Col>
                  </Col>
                  <Col className="ms-4 mt-5">
                    <span>Is Mandatory:</span>
                    <Radio
                      checked={selectedValue === "a"}
                      // onChange={handleChange}
                      color="success"
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                    Yes{" "}
                    <Radio
                      checked={selectedValue === "b"}
                      //   onChange={handleChange}
                      value="b"
                      color="success"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "B" }}
                    />
                    No
                  </Col>
                </Row>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Option A</Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Option B</Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    </Col>
                  </Col>
                </Row>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Option C</Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Option D</Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    </Col>
                  </Col>
                  <Col className=" fontcolororange mediumfontbold cursorpointer mt-5">
                    Add More Questions
                  </Col>
                </Row>
                <Row className="ms-3 fontcolororange mediumfontbold cursorpointer mt-3 align-items-center">
                  <span>
                    Add More Question{" "}
                    <FontAwesomeIcon className="" icon={faPlus} size="2xs" />
                  </span>
                </Row>
                <Row className="ms-2 mb-4 mt-3">
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
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Row>
        </Row>
      </Row>
      {/* </Row> */}
    </Container>
  );
};

export default CreateSurveyCustomer;
