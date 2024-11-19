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

const ManageAssesment = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(
    MenuConstants.nofileselected
  );

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the click event on the hidden file input
  };

 ;
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handleViewViewAssesment = () => {
    navigate("/viewassesment"); // Navigate to the settings route
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
  const [status, setStatus] = useState("")
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
 const [questions, setQuestions] = useState([
   {
     questionType: "",
     correctOption: "",
     options: { A: "", B: "", C: "", D: "" },
     file: null,
     errors: {},
   },
 ]);

 const handleAddQuestion = () => {
   setQuestions([
     ...questions,
     {
       questionType: "",
       correctOption: "",
       options: { A: "", B: "", C: "", D: "" },
       file: null,
       errors: {},
     },
   ]);
 };

 const handleInputChange = (index, field, value) => {
   const updatedQuestions = [...questions];
   updatedQuestions[index][field] = value;
   setQuestions(updatedQuestions);
 };

 const handleOptionChange = (index, option, value) => {
   const updatedQuestions = [...questions];
   updatedQuestions[index].options[option] = value;
   setQuestions(updatedQuestions);
 };

 const handleAddOption = (index) => {
   const updatedQuestions = [...questions];
   const optionCount = Object.keys(updatedQuestions[index].options).length;
   const newOptionKey = String.fromCharCode(65 + optionCount); // Next option (e.g., E, F, etc.)
   updatedQuestions[index].options[newOptionKey] = "";
   setQuestions(updatedQuestions);
 };

 const handleFileChange = (index, event) => {
   const file = event.target.files[0];
   const updatedQuestions = [...questions];
   updatedQuestions[index].file = file;
   setQuestions(updatedQuestions);
 };
 const options = ["A", "B", "C", "D"];
  return (
    <Container fluid>
      <Row className="mb-5">
        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
            {MenuConstants.learningAndDevelopment} {">"} Manage Assesment
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              Manage Assesment
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0 me-3  bordercolororange mediumfontbold app-btns-format "
              onClick={handleViewViewAssesment}
            >
              View Assesment
            </Col>
            <Row className="app-country-box ms-0">
              <Form onSubmit={handleUpload} onReset={handleCancel}>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Assesment Name</Row>
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
                    <Row className="ms-4 mt-3">
                      {MenuConstants.trainingcategory}{" "}
                    </Row>
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
                    <Row className="ms-4 mt-3">
                      {MenuConstants.trainingcategory} Content
                    </Row>
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
                  {/* Date Fields */}
                  <Col className="ms-4 mt-3">
                    Start Date
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
                    End Date
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

                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Test Duration (Minutes)</Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">No. of Attempts allowed</Row>
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
                    <Row className="ms-4 mt-3">Minimum Percentage(%)</Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        type="number"
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
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-2 mt-3  ">Status</Row>
                    <Col className="ms-2 mt-2 form-check form-switch">
                      <input
                        className="form-check-input cursorpointer"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        checked={status}
                        onChange={(e) => setStatus(e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </Col>
                  </Col>
                  <Row>
                    <Col className="text-end ms-5" lg={4}>
                      <Checkbox />
                      {MenuConstants.nsm}
                    </Col>
                    <Col className="ms-5" lg={4}>
                      <Checkbox /> {MenuConstants.rsm}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-end ms-5" lg={4}>
                      <Checkbox />
                      {MenuConstants.asm}
                    </Col>
                    <Col className="ms-5" lg={4}>
                      <Checkbox /> ISP
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
                {questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <Row>
                      <Col xxl={3} xl={3} lg={3} md={3}>
                        <Row className="ms-4 mt-3">Question</Row>
                        <Col className="ms-4 mb-3">
                          <TextField
                            variant="standard"
                            className="mt-1 app-input-width"
                            value={question.questionType}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "questionType",
                                e.target.value
                              )
                            }
                          />
                        </Col>
                      </Col>
                      <Col xxl={3} xl={3} lg={3} md={3}>
                        <Row className="ms-4 mt-3">Correct Option</Row>
                        <Col className="ms-4 mb-3">
                          <Autocomplete
                            disableCloseOnSelect
                            options={options} // Provide the array of options
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="standard"
                                className="mt-1 app-input-width"
                              />
                            )}
                            value={question.correctOption}
                            onChange={(e, newValue) =>
                              handleInputChange(
                                index,
                                "correctOption",
                                newValue
                              )
                            }
                          />
                        </Col>
                      </Col>
                    </Row>

                    {/* Render Options Dynamically in Two-Column Rows */}
                    {Object.keys(question.options)
                      .reduce((acc, option, idx, array) => {
                        if (idx % 2 === 0) acc.push(array.slice(idx, idx + 2)); // Group into pairs
                        return acc;
                      }, [])
                      .map((pair, rowIdx) => (
                        <Row key={rowIdx}>
                          {pair.map((option) => (
                            <Col xxl={3} xl={3} lg={3} md={3} key={option}>
                              <Row className="ms-4 mt-3">Option {option}</Row>
                              <Col className="ms-4 mb-3">
                                <TextField
                                  variant="standard"
                                  className="mt-1 app-input-width"
                                  value={question.options[option]}
                                  onChange={(e) =>
                                    handleOptionChange(
                                      index,
                                      option,
                                      e.target.value
                                    )
                                  }
                                />
                              </Col>
                            </Col>
                          ))}
                        </Row>
                      ))}

                    {/* Add More Options Button */}
                    <Row>
                      <Col className="ms-4 mt-3">
                        <Button
                          className="text-decoration-none fontcolororange p-0 no-bg-hover"
                          onClick={() => handleAddOption(index)}
                        >
                          Add More Options
                        </Button>
                      </Col>
                    </Row>

                    {/* Image Upload */}
                    <Row>
                      <Col xxl={4} xl={4} lg={4} md={4}>
                        <Row className="ms-4 mt-4">Image Upload</Row>
                        <Button
                          className="ms-4 mb-3 app-uploadfile-btn"
                          onClick={() =>
                            document
                              .getElementById(`file-input-${index}`)
                              .click()
                          }
                        >
                          Choose File
                        </Button>
                        <Form.Control
                          type="file"
                          id={`file-input-${index}`}
                          style={{ display: "none" }}
                          onChange={(event) => handleFileChange(index, event)}
                        />
                        <span className="borderbottom">
                          {question.file
                            ? question.file.name
                            : "No file chosen"}
                        </span>
                      </Col>
                    </Row>
                  </div>
                ))}

                {/* Add More Question */}
                <Row className="ms-3 fontcolororange mediumfontbold cursorpointer mt-3 align-items-center">
                  <span onClick={handleAddQuestion}>
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
                      Save
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
            </Row>
          </Row>
        </Row>
      </Row>
      {/* </Row> */}
    </Container>
  );
};

export default ManageAssesment;
