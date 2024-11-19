import { useRef, useState } from "react";

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
import { Autocomplete, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Height } from "@mui/icons-material";

const ManageAttendanceDashboard = () => {
  const navigate = useNavigate();

  const handleCreateClient = () => {
    navigate("/createclient"); // Navigate to the settings route
  };

  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
  const handleSalesTrendClick = () => {
    navigate("/salestrend");
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
  const ispDashboard = () => {
    navigate("/ispdashboard");
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

        <>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom">
            {MenuConstants.dashboard}
          </Col>
          <Row className="mt-2 p-0 ms-0 position-relative">
            <Row className="backgroundcolorsecondary me-0 ms-0 p-1">
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                className="cursorpointer bordercolororange p-0 backgroundcolor fontcolorwhite mediumfont  mediumfontbold  me-3 app-btns-format "
              >
                {MenuConstants.attendance} {MenuConstants.dashboard}
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                className="cursorpointer p-1 me-3 fontcolorwhite backgroundcoloroffwhite  mediumfontbold app-btns-format "
                onClick={handleSalesTrendClick}
              >
                Sales Trend
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                className="cursorpointer fontcolorwhite backgroundcoloroffwhite mediumfontbold app-btns-format "
                onClick={ispDashboard}
              >
                {MenuConstants.isp} {MenuConstants.dashboard}
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                className="cursorpointer  ms-3 p-1 me-3 fontcolorwhite  backgroundcoloroffwhite mediumfontbold app-btns-format "
              >
                {MenuConstants.competition}
              </Col>
            </Row>
            <Form>
              <Row className="">
                <Row className="mt-3">
                  <span>
                    <img
                      className="position-absolute end-0 me-3 cursorpointer"
                      src="/xls.jpg"
                      alt=""
                    />
                  </span>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Date</Row>
                    <Col className="ms-4 mb-3">
                      <input
                        type="date"
                        className="date-input app-input-width"
                        required
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
            <Row className="">
              <Col
                xxl={2}
                xl={2}
                lg={2}
                sm={2}
                md={2}
                className="app-modal-border rounded-4 p-4 ms-5 position-relative "
              >
                <Row className="position-absolute bg-white fw-bold ps-3 end-0">
                  750{" "}
                </Row>
                <Row className="position-absolute bg-white end-0 fw-bold mt-4">
                  Total Users{" "}
                </Row>
                <img
                  src="/icons/employees 1.png"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                sm={2}
                md={2}
                className="app-modal-border rounded-4 p-4  position-relative app-margin-start"
              >
                <Row className="position-absolute bg-white fw-bold ps-3 end-0">
                  150{" "}
                </Row>
                <Row className="position-absolute bg-white end-0 fw-bold mt-4">
                  Present{" "}
                </Row>
                <img
                  src="/icons/check.png"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                sm={2}
                md={2}
                className="app-modal-border rounded-4 p-4 position-relative app-margin-start"
              >
                <Row className="position-absolute bg-white fw-bold ps-3 end-0">
                  150{" "}
                </Row>
                <Row className="position-absolute bg-white end-0 fw-bold mt-4">
                  Absent{" "}
                </Row>
                <img
                  src="/icons/absence.png"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col
                xxl={2}
                xl={2}
                lg={2}
                sm={2}
                md={2}
                className="app-modal-border rounded-4 p-4 ms-5 position-relative "
              >
                <Row className="position-absolute bg-white fw-bold ps-3 end-0">
                  150{" "}
                </Row>
                <Row className="position-absolute bg-white end-0 fw-bold mt-4">
                  Late{" "}
                </Row>
                <img
                  src="/icons/time.png"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                sm={2}
                md={2}
                className="app-modal-border rounded-4 p-4  position-relative app-margin-start"
              >
                <Row className="position-absolute bg-white fw-bold ps-3 end-0">
                  150{" "}
                </Row>
                <Row className="position-absolute bg-white end-0 fw-bold mt-4">
                  Leave{" "}
                </Row>
                <img
                  src="/icons/leave.png"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                sm={2}
                md={2}
                className="app-modal-border rounded-4 p-4 position-relative app-margin-start"
              >
                <Row className="position-absolute bg-white fw-bold ps-3 end-0">
                  150{" "}
                </Row>
                <Row className="position-absolute bg-white end-0 fw-bold mt-4">
                  Weekly off{" "}
                </Row>
                <img
                  src="/icons/holidays.png"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </Col>
            </Row>
            <Table
              className="ms-2 mt-3 equal-width-table"
              style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            >
              <thead className=" smallfontsemibold">
                <tr>
                  <th className="fontcolorwhite backgroundcolor">NSM</th>

                  <th className="fontcolorwhite backgroundcolor">Total</th>
                  <th className="fontcolorwhite backgroundcolor">Present</th>
                  <th className="fontcolorwhite backgroundcolor">Absent</th>
                  <th className="fontcolorwhite backgroundcolor">Late</th>

                  <th className="fontcolorwhite backgroundcolor">Leave</th>
                  <th className="fontcolorwhite backgroundcolor">Weekly Off</th>
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
                  <td>xxxx</td>
                </tr>
                <tr className="">
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                </tr>
              </tbody>
            </Table>
            <Table
              className="ms-2 mt-3 equal-width-table"
              style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            >
              <thead className=" smallfontsemibold">
                <tr>
                  <th className="fontcolorwhite backgroundcolor">RSM</th>

                  <th className="fontcolorwhite backgroundcolor">Total</th>
                  <th className="fontcolorwhite backgroundcolor">Present</th>
                  <th className="fontcolorwhite backgroundcolor">Absent</th>
                  <th className="fontcolorwhite backgroundcolor">Late</th>

                  <th className="fontcolorwhite backgroundcolor">Leave</th>
                  <th className="fontcolorwhite backgroundcolor">Weekly Off</th>
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
                  <td>xxxx</td>
                </tr>
                <tr className="">
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </>
      </Row>
    </Container>
  );
};

export default ManageAttendanceDashboard;
