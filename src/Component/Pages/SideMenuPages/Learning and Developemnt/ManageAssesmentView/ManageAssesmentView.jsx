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
  Modal,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewAssesment = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(
    MenuConstants.nofileselected
  );
const [showModal, setShowModal] = useState(false);
const handleOpenModal = () => setShowModal(true);
const handleCloseModal = () => setShowModal(false);
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
  const handleManageAssesment = () => {
    navigate("/manageassesment"); // Navigate to the settings route
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
              View Assesment
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0 me-3  bordercolororange mediumfontbold app-btns-format "
              onClick={handleManageAssesment}
            >
              Manage Assesment
            </Col>
            <Row className="app-country-box ms-0">
              <Form onSubmit={handleUpload} onReset={handleCancel}>
                <Row>
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
                    <Row className="ms-4 mt-3">Status</Row>
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
                    <Row className="ms-4 mt-3">Date Type</Row>
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
                  <Col xxl={3} xl={3} lg={3} md={3} className="ms-4 mt-3">
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
                  <Col xxl={3} xl={3} lg={3} md={3} className="mt-3">
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
                </Row>

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
              <Table className="mt-4 equal-width-table">
                <thead className="smallfontsemibold">
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">Name</th>
                    <th className="backgroundcolor fontcolorwhite">
                      Start Date
                    </th>
                    <th className="backgroundcolor fontcolorwhite">End Date</th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.trainingcategory}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      Content Category
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      Total Questions
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Status</th>
                    <th className="backgroundcolor fontcolorwhite">Action</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="">
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>
                      {" "}
                      <img
                        src="/action2.png"
                        alt=""
                        style={{ width: "15px", height: "15px" }}
                      />{" "}
                    </td>
                    <td>
                      <img
                        src="/action1.png"
                        alt=""
                        style={{ width: "15px", height: "15px" }}
                      />
                      <Button
                        className="app-details-btn1 ms-2 smallfont backgroundcolorsecondary bordercolororange"
                        onClick={handleOpenModal}
                      >
                        {" "}
                        Relaunch
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Row className="  app-pageformat mt-5 mb-3">
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
            {showModal && (
              <Form onSubmit>
                <Col
                  lg={8}
                  md={8}
                  xl={8}
                  xxl={8}
                  sm={8}
                  className=" mx-auto mt-3 borderrelaunch"
                >
                  {/* <Modal.Header closeButton> */}
                  <Row className="bordertoprelaunch backgroundcolor ms-0 bordertoprelaunch me-0 p-2 fontcolorwhite mediumfontbold">
                    Relaunch
                  </Row>
                  {/* </Modal.Header> */}
                  <Row>
                    {" "}
                    <Col lg={4} md={4} xl={4} xxl={4} sm={4}>
                      <Row className="ms-4 mt-3">Open To All</Row>
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
                    <Row className="ms-3">
                      <Col
                        lg={4}
                        md={4}
                        xl={4}
                        xxl={4}
                        sm={4}
                        className="mt-3 app-input-width"
                      >
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
                      <Col
                        lg={4}
                        md={4}
                        xl={4}
                        xxl={4}
                        sm={4}
                        className="mt-3 ms-3"
                      >
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
                      <Row className="mt-4 mb-2">
                        <Col xxl={3} xl={3} lg={3} md={3}>
                          <Button
                            // type="submit"
                            className="cursorpointer bordercolororange mediumfont p-3 mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                          >
                            Relaunch
                          </Button>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={3}>
                          <Button
                            onClick={handleCloseModal}
                            // type="reset"
                            className="bordercolororange cursorpointer mediumfont p-3 ms-3 mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                          >
                            {MenuConstants.cancel}
                          </Button>
                        </Col>
                      </Row>
                    </Row>
                  </Row>
                </Col>
              </Form>
            )}
          </Row>
        </Row>
      </Row>
      {/* </Row> */}
    </Container>
  );
};

export default ViewAssesment;
