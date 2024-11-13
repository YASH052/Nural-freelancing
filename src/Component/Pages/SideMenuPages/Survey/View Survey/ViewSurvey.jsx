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

const ViewSurvey = () => {
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
  const handleCreateSurveyLink = () => {
    navigate("/createsurveylink"); // Navigate to the settings route
  };
  const handleView = () => {
    navigate("/viewsurvey"); // Navigate to the settings route
  };
  const data = [];
  const defaultProps = {
    options: data,
  };
  const SurveyType = ["Link", "Self", "Customer"];
  const props = {
    options: SurveyType,
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
            {MenuConstants.survey} {">"} View {MenuConstants.survey}
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              View {MenuConstants.survey}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0 me-3  bordercolororange mediumfontbold app-btns-format "
              onClick={handleCreateSurveyLink}
            >
              Create {MenuConstants.survey}
            </Col>
            <Row className="app-country-box ms-0">
              <Form onSubmit={handleUpload} onReset={handleCancel}>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">{MenuConstants.survey} Name</Row>
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
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Date</Row>
                    <Col className="mt-1 ms-4">
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
                      className="cursorpointer bordercolororange mediumfont mt-4 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-4 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.view} All
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
              className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite ms-0 me-4 app-btns-format "
            >
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0">
              <Table className="mt-5 equal-width-table mb-5">
                <thead className="backgroundcolor mediumfont fontcolorwhite ">
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">Name </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.survey} Type
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.description}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      From & To Date
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      Min {MenuConstants.survey} Reqd
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.survey} Link
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Status</th>
                    <th className="backgroundcolor fontcolorwhite">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>
                      <img
                        src="/action2.png"
                        className="cursor-pointer ms-2"
                        alt="Edit"
                        style={{ width: "15px", height: "15px" }}
                      />
                    </td>
                    <td>
                      <img
                        src="/action1.png"
                        className="cursor-pointer ms-2"
                        alt="Edit"
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

export default ViewSurvey;
