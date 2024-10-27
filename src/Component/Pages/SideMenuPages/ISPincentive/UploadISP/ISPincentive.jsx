import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  
} from "@fortawesome/free-solid-svg-icons";

import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

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
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const ISPincentive = () => {
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handlecreateisp = () => {
    navigate("/createisp"); // Navigate to the settings route
  };
   const incentiveData = [
     {
       schemaName: "Incentive Plan A",
       startDate: "2024-01-01",
       endDate: "2024-12-31",
       schemaOn: "Sales Ach- Qty",
       payoutType: "% of Inv Value",
       statusIcon: "./action2.png",
       statusAlt: "Active",
     },
     {
       schemaName: "Incentive Plan B",
       startDate: "2024-06-01",
       endDate: "2025-05-31",
       schemaOn: "Sales Ach- Value",
       payoutType: "Points per Qty",
       statusIcon: "./action2.png",
       statusAlt: "Pending",
     },

   ];
   let data = [];
   const defaultProps = {
     options: data,
     getOptionLabel: (option) => option.title,
   };
   const [schemaName, setSchemaName] = useState("");
   const [schemaOn, setSchemaOn] = useState(null);
   const [payoutType, setPayoutType] = useState(null);
   const [fromDate, setFromDate] = useState("");
   const [toDate, setToDate] = useState("");
   const [errors, setErrors] = useState({});

   const validateForm = () => {
     const validationErrors = {};

     if (!schemaName) {
       validationErrors.schemaName = "Schema Name is required.";
     }
     if (!fromDate) {
       validationErrors.fromDate = "From Date is required.";
     }
     if (!toDate) {
       validationErrors.toDate = "To Date is required.";
     } else if (toDate < fromDate) {
       validationErrors.toDate = "To Date cannot be earlier than From Date.";
     }

     setErrors(validationErrors);
     return Object.keys(validationErrors).length === 0;
   };

   const handleSearch = (e) => {
     e.preventDefault();
     if (validateForm()) {
       console.log("Form data:", {
         schemaName,
         schemaOn,
         payoutType,
         fromDate,
         toDate,
       });
       // Add search logic here
     }
   };

   const handleShowAll = () => {
     // Add logic for showing all schema entries here
     console.log("Show all schemas");
   };

  return (
    <Container fluid>
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
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format  me-4 app-btns-format"
            >
              {MenuConstants.view} {MenuConstants.ispIncentive}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0 p-1  me-3 bordercolororange mediumfontbold app-btns-format app-btns-format"
              onClick={handlecreateisp}
            >
              {MenuConstants.create} {MenuConstants.ispIncentive}
            </Col>
            <Row className="app-country-box ms-0 ">
              <Form onSubmit={handleSearch}>
                <Row className=" ms-0">
                  {/* Schema Name */}
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-3 mt-3">Schema Name</Row>
                    <Col className="ms-3 mb-3">
                      <TextField
                        id="standard-basic"
                        className="mt-1 app-input-width"
                        variant="standard"
                        value={schemaName}
                        onChange={(e) => setSchemaName(e.target.value)}
                        error={!!errors.schemaName}
                        helperText={errors.schemaName}
                      />
                    </Col>
                  </Col>

                  {/* Schema On */}
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-3">Schema On</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        value={schemaOn}
                        onChange={(e, newValue) => setSchemaOn(newValue)}
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
                </Row>

                <Row className="mt-3">
                  {/* From Date */}
                  <Col className="ms-4" xxl={3} xl={3} lg={3} md={3}>
                    From Date
                    <Col className="mt-1">
                      <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="date-input"
                        required
                      />
                      {errors.fromDate && (
                        <div className="error-text">{errors.fromDate}</div>
                      )}
                    </Col>
                  </Col>

                  {/* To Date */}
                  <Col>
                    To Date
                    <Col className="input-container mt-1">
                      <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="date-input"
                        required
                      />
                      {errors.toDate && (
                        <div className="error-text">{errors.toDate}</div>
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
              </Form>
            </Row>
          </Row>
          <Row className="ms-4 mt-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format app-btns-format"
            >
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              <Table className="mt-5">
                <thead className="">
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">
                      Schema Name
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      Start Date
                    </th>

                    <th className="backgroundcolor fontcolorwhite">End Date</th>
                    <th className="backgroundcolor fontcolorwhite">
                      Schema On
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.payout} Type
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Status</th>
                    <th className="backgroundcolor fontcolorwhite">
                      View {MenuConstants.details}
                    </th>
                  </tr>
                </thead>
                <tbody className="app-placeholder">
                  {incentiveData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.schemaName}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>{item.schemaOn}</td>
                      <td>{item.payoutType}</td>
                      <td>
                        <img
                          src={item.statusIcon}
                          alt={item.statusAlt}
                          style={{ width: "15px", height: "15px" }}
                        />
                      </td>
                      <td>
                        <Button className="app-details-btn mb-1 mt-1 backgroundcolorsecondary bordercolororange">
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

export default ISPincentive;
