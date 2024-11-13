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
  Table,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManageLDCategory = () => {
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
            {MenuConstants.learningAndDevelopment}    {">"} Manage L&D Category
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite p-0  me-4 app-btns-format "
            >
              Manage L&D Category
            </Col>
            <Row className="app-country-box ms-0">
              <Form onSubmit={handleUpload} onReset={handleCancel}>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">
                      {MenuConstants.trainingcategory} Name
                    </Row>
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
                    <Row className="ms-4 mt-3">Brand</Row>
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
                    <Row className="ms-4 mt-3">Product Category</Row>
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
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">
                      {MenuConstants.trainingcategory} Type
                    </Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    </Col>
                  </Col>

                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">
                      {MenuConstants.description}{" "}
                    </Row>
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
                  <Col xxl={4} xl={4} lg={4} md={4}>
                    <Row className="ms-4 mt-4">Image{MenuConstants.upload}</Row>
                    <Button
                      className="ms-4 mb-3 app-uploadfile-btn"
                      onClick={handleButtonClick}
                    >
                      {MenuConstants.choose} {MenuConstants.file}
                    </Button>
                    <Form.Control
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      isInvalid={!!errors.file}
                    />
                    <span className="borderbottom">{selectedFileName}</span>
                    <Form.Control.Feedback type="invalid" className="d-block">
                      {errors.file}
                    </Form.Control.Feedback>
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
                </Row>

                <Row className="ms-2 mb-4 mt-3">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      Create
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
              <Form>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Brand</Row>
                    <Col className="ms-4 mb-3">
                      <TextField
                        //   {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">
                      {MenuConstants.trainingcategory}{" "}
                    </Row>
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

                  <Col xxl={2} xl={2} lg={2} md={2} className="mt-4">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2} className="mt-4">
                    <Button
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.showall}
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Table className="mt-4 equal-width-table">
                <thead className="smallfontsemibold">
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">
                      Creation Date
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Name</th>
                    <th className="backgroundcolor fontcolorwhite">
                      Category Type
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Brand</th>
                    <th className="backgroundcolor fontcolorwhite">
                      Product Category
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.description}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Status</th>
                    <th className="backgroundcolor fontcolorwhite">Edit</th>
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
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Row>
        </Row>
      </Row>
      {/* </Row> */}
    </Container>
  );
};

export default ManageLDCategory;
