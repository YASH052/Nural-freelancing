import { useState } from "react";

import {
  Row,
  Col,
  Button,
  Container,
  Form,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import { Autocomplete, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";


const ManageAppMenua = () => {
 
 
  const navigate = useNavigate();
  
  const handleCreateClient = () => {
    navigate("/createclient"); // Navigate to the settings route
  };
 const handleManageWebMenu = () =>{
  navigate("/managewebmenu");
 }
  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
  const handleViewClient = () => {
    navigate("/viewclient");
  };
   const handleShowAll = () => {
    // Add logic for showing all schemes here
    console.log("Show all schemes");
  };
  const [selectAll, setSelectAll] = useState(false);
  // State to track each individual checkbox
  const [checkboxes, setCheckboxes] = useState({
    attendance: false,
    dashboard: false,
    competitionSale: false,
    counterShare: false,
    marketInfo: false,
    competition: false,
    merchandizing: false,
    learningDevelopment: false,
    tertiarySale: false,
    incentive: false,
    target: false,
    preBooking: false,
    survey: false,
    inventory: false,
    bulletin: false,
    feedback: false,
    leaveApproval: false,
    attendanceDashboard: false,
  });
   const handleSelectAllChange = (e) => {
     const isChecked = e.target.checked;
     setSelectAll(isChecked);
     // Set all checkboxes to the same checked state
     setCheckboxes((prevState) =>
       Object.keys(prevState).reduce((acc, key) => {
         acc[key] = isChecked;
         return acc;
       }, {})
     );
   };
   const handleCheckboxChange = (name) => {
     setCheckboxes((prevState) => {
       const updatedCheckboxes = { ...prevState, [name]: !prevState[name] };
       // Update Select All if all are checked
       const allChecked = Object.values(updatedCheckboxes).every((val) => val);
       setSelectAll(allChecked);
       return updatedCheckboxes;
     });
   };
  return (
    <Container fluid>
      <Row className="mb-4">
        <></>

        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            {MenuConstants.manage} {MenuConstants.client}
          </Col>
          <Row className="ms-2 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange p-1 mediumfont  mediumfontbold  me-4 app-btns-format "
              onClick={handleCreateClient}
            >
              {MenuConstants.create} {MenuConstants.client}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer p-1 me-3  bordercolororange mediumfontbold app-btns-format "
              onClick={handleManageWebMenu}
            >
              {MenuConstants.manage} Web Menu
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  bordercolororange fontcolorwhite backgroundcolorsecondary mediumfontbold app-btns-format "
            >
              {MenuConstants.manage} App Menu
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              onClick={handleViewClient}
              className="cursorpointer  position-absolute end-0 p-1 me-3  bordercolororange mediumfontbold app-btns-format "
            >
              {MenuConstants.view} {MenuConstants.client}
            </Col>
            <Form>
              <Row className="app-country-box">
                <Row className="mt-3">
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Client</Row>
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
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-3 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      Update
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      className="bordercolororange cursorpointer mediumfont mt-3 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                      onClick={handleShowAll}
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                  {/* Action Buttons */}
                </Row>
              </Row>
            </Form>
            <Row className="mt-2 ms-0 fontcolorwhite backgroundcolor">
              Menu List
            </Row>
            <Form
              className="mb-5 ms-0"
              style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            >
              <Row xs="auto"  >
                <span>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                  <FontAwesomeIcon className="ms-1" icon={faEllipsisVertical} />
                </span>
                <Form.Check
                  className="fw-bold"
                  type="checkbox"
                  label="Select All"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
              </Row>

              <Row className="mt-2">
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/attendance.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.attendance}
                      onChange={() => handleCheckboxChange("attendance")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Attendance
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/dashboard.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.dashboard}
                      onChange={() => handleCheckboxChange("dashboard")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Dashboard
                  </Row>
                </Col>

                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/business.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.competitionSale}
                      onChange={() => handleCheckboxChange("competitionSale")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Competition Sale
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/tug-of-war.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.competition}
                      onChange={() => handleCheckboxChange("competition")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Competition
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/project-management 1.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.merchandizing}
                      onChange={() => handleCheckboxChange("merchandizing")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Merchandizing
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/classroom 1.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.learningDevelopment}
                      onChange={() =>
                        handleCheckboxChange("learningDevelopment")
                      }
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    L & D
                  </Row>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/incentive 1.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.tertiarySale}
                      onChange={() => handleCheckboxChange("tertiarySale")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Tertiary Sale
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/gift.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.incentive}
                      onChange={() => handleCheckboxChange("incentive")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Incentive
                  </Row>
                </Col>

                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/targeted.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.target}
                      onChange={() => handleCheckboxChange("target")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Target
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/book-now 1.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.preBooking}
                      onChange={() => handleCheckboxChange("preBooking")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Pre-Booking
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/reception.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.counterShare}
                      onChange={() => handleCheckboxChange("counterShare")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Counter Share
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/market-analysis.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.marketInfo}
                      onChange={() => handleCheckboxChange("marketInfo")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Market Info
                  </Row>
                </Col>
              </Row>
              <Row className="mt-2 mb-5">
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/online-survey.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.survey}
                      onChange={() => handleCheckboxChange("survey")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Survey
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/inventory-management.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.inventory}
                      onChange={() => handleCheckboxChange("inventory")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Inventory
                  </Row>
                </Col>

                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/pinboard 1.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.bulletin}
                      onChange={() => handleCheckboxChange("bulletin")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Bulletin
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/feedback.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.feedback}
                      onChange={() => handleCheckboxChange("feedback")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Feedback
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/immigration.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.leaveApproval}
                      onChange={() => handleCheckboxChange("leaveApproval")}
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Leave
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Approval
                  </Row>
                </Col>
                <Col className="align-items-center ms-3">
                  <Col className="app-icons-style d-flex justify-content-center align-items-center p-3">
                    <img
                      src="/public/icons/timetable.png"
                      alt="Attendance Icon"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </Col>
                  <Row xs="auto" className="justify-content-center">
                    <Form.Check
                      type="checkbox"
                      checked={checkboxes.attendanceDashboard}
                      onChange={() =>
                        handleCheckboxChange("attendanceDashboard")
                      }
                      className="mt-1"
                    />
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Attendance
                  </Row>
                  <Row className="fw-semibold justify-content-center">
                    Dashboard
                  </Row>
                </Col>
              </Row>
            </Form>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default ManageAppMenua;
