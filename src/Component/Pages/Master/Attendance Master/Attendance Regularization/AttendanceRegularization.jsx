import { useRef, useState } from "react";

import { faArrowLeft, faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  Form,
  Table,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import { Autocomplete, Checkbox, Radio, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AttendanceRegularization = () => {
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
  const [status, setStatus] = useState("");
  const [selectedValue, setSelectedValue] = useState("b")
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

  const handleStatusChange = (event) => {
    setSelectedValue(event.target.value);
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
            </span>
            {" > "}
            {MenuConstants.attendance} Master {">"} {MenuConstants.attendance}{" "}
            Regularization
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format"
            >
              {MenuConstants.attendance} Regularization
            </Col>

            <Row className="app-country-box ms-0">
              <Form onSubmit={handleUpload} onReset={handleCancel}>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">{MenuConstants.user} Type</Row>
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
                    <Row className="ms-4 mt-3">{MenuConstants.user} Name</Row>
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
                    Date
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
                <Col className="ms-4 mt-3">
                  <span>Status: </span>
                  <Radio
                    checked={selectedValue === "Present"}
                    onChange={handleStatusChange}
                    color="success"
                    value="Present"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "Present" }}
                  />
                  Present
                  <Radio
                    checked={selectedValue === "Absent"}
                    onChange={handleStatusChange}
                    value="Absent"
                    color="success"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "Absent" }}
                  />
                  Absent
                  <Radio
                    checked={selectedValue === "Leave"}
                    onChange={handleStatusChange}
                    value="Leave"
                    color="success"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "Leave" }}
                  />
                  Leave
                </Col>

                {/* Leave Type Section, visible only if 'Leave' is selected */}
                {selectedValue === "Leave" && (
                  <Col className="ms-4 mt-1">
                    <span>Leave Type: </span>
                    <Radio
                      checked={status === "CL"}
                      onChange={(e) => setStatus("CL")}
                      color="success"
                      value="CL"
                      name="leave-type"
                      inputProps={{ "aria-label": "CL" }}
                    />
                    CL
                    <Radio
                      checked={status === "PL"}
                      onChange={(e) => setStatus("PL")}
                      color="success"
                      value="PL"
                      name="leave-type"
                      inputProps={{ "aria-label": "PL" }}
                      className="ms-3"
                    />
                    PL
                    <Radio
                      checked={status === "Sick"}
                      onChange={(e) => setStatus("Sick")}
                      color="success"
                      value="Sick"
                      name="leave-type"
                      inputProps={{ "aria-label": "Sick" }}
                      className="ms-3"
                    />
                    Sick
                  </Col>
                )}

                <Row className="ms-2 mb-4 mt-3">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.submit}
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
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer mt-5 me-3  bordercolororange backgroundcolorsecondary fontcolorwhite app-btns-format "
            >
              {MenuConstants.list}
            </Col>
            {/* <Col>
                <img
                  className="position-absolute end-0 mt-5 me-3 cursorpointer"
                  src="/xls.jpg"
                  alt=""
                />
              </Col> */}
            <Row className="app-country-box ms-0 p-0">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3">{MenuConstants.user} Type</Row>
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
                <Row className="ms-4 mt-3">{MenuConstants.user} Name</Row>
                <Col className="ms-4 mb-3">
                  <TextField
                    // {...params}
                    variant="standard"
                    className="mt-1 app-input-width"
                  />
                </Col>
              </Col>
              <Col className="ms-4 mt-3">
                From Date
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
                To Date
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
              <Row className="ms-2 mb-4 mt-3">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button
                    type="submit"
                    className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                  >
                    Search
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="reset"
                    className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                  >
                    {MenuConstants.showall}
                  </Button>
                </Col>
              </Row>
              <Col>
                <img
                  src="xls.jpg"
                  alt=""
                  className="position-absolute end-0 me-3"
                />
              </Col>
              <Table className="mt-5 equal-width-table mb-4">
                <thead className="mediumfontbold">
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">S No.</th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.user} Type
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.user} Name
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Date</th>
                    <th className="backgroundcolor fontcolorwhite">Status</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="">
                    <td>xxxx</td>

                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxx</td>
                  </tr>
                </tbody>
              </Table>
              <Row className="  app-pageformat mt5 mb-3">
                <Col xs="auto">
                  First {MenuConstants.page}
                  <span className="cursorpointer app-pageformat-style">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>{" "}
                  {MenuConstants.page}
                  <span className="app-pageformat-style">1</span> out of xx
                  <span className="cursorpointer app-pageformat-style">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>{" "}
                  Last {MenuConstants.page}
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

export default AttendanceRegularization;
