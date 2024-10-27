import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight, 
} from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  Table,
  Form,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
  const datas = [
    {
      targetName: "Target A",
      targetFor: "Department A",
      targetType: "Type A",
      targetFrom: "2024-01-01",
      targetTo: "2024-12-31",
      target: "500 Units",
    },
    {
      targetName: "Target B",
      targetFor: "Department B",
      targetType: "Type B",
      targetFrom: "2024-01-01",
      targetTo: "2024-12-31",
      target: "750 Units",
    },
  ];
let data = [];
const defaultProps = {
  options: data,
  getOptionLabel: (option) => option.title,
};



const ViewTarget = () => {

  
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleValidation = () => {
    const errors = {};

    if (!fromDate) errors.fromDate = "From Date is required";
    if (!toDate) errors.toDate = "To Date is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // Perform search action
      console.log("Form is valid, perform search");
    }
  };
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handleCreateTarget = () => {
    navigate("/createtarget"); // Navigate to the settings route
  };
  return (
    <Container fluid>
      <Row className="mb-4">
        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
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
              {MenuConstants.view} {MenuConstants.target}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0  me-3 bordercolororange mediumfontbold app-btns-format "
              onClick={handleCreateTarget}
            >
              {MenuConstants.create} {MenuConstants.target}
            </Col>
            <Form onSubmit={handleSearch}>
              <Row className="app-country-box">
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 mt-3">Entity Type</Row>
                  <Col className="ms-4 mb-3">
                    <Autocomplete
                      {...defaultProps}
                      id="disable-close-on-select-entity"
                      disableCloseOnSelect
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="mt-1 app-input-width"
                          
                          required
                        />
                      )}
                    />
                  </Col>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 mt-3">{MenuConstants.target} Name</Row>
                  <Col className="ms-4 mb-3">
                    <Autocomplete
                      {...defaultProps}
                      id="disable-close-on-select-target"
                      disableCloseOnSelect
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="mt-1 app-input-width"
                          
                          required
                        />
                      )}
                    />
                  </Col>
                </Col>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3} className="ms-4">
                    From Date
                    <Col>
                      <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="date-input app-input-width"
                        // required
                      />
                      {formErrors.fromDate && (
                        <div className="error-text">{formErrors.fromDate}</div>
                      )}
                    </Col>
                  </Col>
                  <Col>
                    To Date
                    <Col>
                      <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="date-input"
                        // required
                      />
                      {formErrors.toDate && (
                        <div className="error-text">{formErrors.toDate}</div>
                      )}
                    </Col>
                  </Col>
                </Row>
                <Row className="ms-2 mb-4 mt-3">
                  <Col className="app-input-width">
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
                      onClick={() => {
                        setFromDate("");
                        setToDate("");
                        setFormErrors({});
                      }}
                      className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite app-btns-format"
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
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              <Table className="mt-4">
                <thead>
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.target} Name
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.target} For
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.target} Type
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.target} From
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.target} To
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.target}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      View {MenuConstants.details}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((item, index) => (
                    <tr key={index} className="app-placeholder">
                      <td>{item.targetName}</td>
                      <td>{item.targetFor}</td>
                      <td>{item.targetType}</td>
                      <td>{item.targetFrom}</td>
                      <td>{item.targetTo}</td>
                      <td>{item.target}</td>
                      <td>
                        <Button className="app-details-btn backgroundcolorsecondary bordercolororange mb-1">
                          {MenuConstants.details}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Row className="  app-pageformat mt5 mb3">
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
    </Container>
  );
};

export default ViewTarget;
