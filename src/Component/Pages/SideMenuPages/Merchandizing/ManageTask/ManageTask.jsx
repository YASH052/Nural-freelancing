import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import {
  Row,
  Col,
  Button,
  Container,
  Form,
  Table,
  Modal,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, FormControl, Radio, TextField } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
let data = [];
const ManageTask = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("a"); // Set initial value if needed
  // const [showModal, setShowModal] = useState(false);
  // const handleCloseModal = () => setShowModal(false);
  // const [showModal2, setShowModal2] = useState(false);
  // const handleCloseModal2 = () => setShowModal2(false);
  // const [status, setStatus] = useState("");
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handleSalesExcel = () => {
    navigate("/addsalesexcel"); // Navigate to the settings route
  };

  const handlesubmit = () => {};
  const handleShowAll = () => {};
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    navigate("/managecompetitiondataexcel");
  };
  const handleChangea = (event) => {
   setSelectedValue(event.target.value);
  };
  const handleChangeb = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Container fluid>
      <Row className="mb-4">
        <></>

        <Row>
          {/* <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   "> */}
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.merchandizing}
            </span>{" "}
            {">"} Manage Task
          </Col>
          {/* </Col> */}
          <Row className="ms2 mt-2 position-relative">
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
              Add/ Edit Task
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                <Col className="ms-4">
                  <span>Select Mode</span>
                  <Radio
                    checked={selectedValue === "b"}
                    // onChange={handleChange}
                    color="success"
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  Excel{" "}
                  <Radio
                    checked={selectedValue === "a"}
                    // onChange={handleChange}
                    value="b"
                    color="success"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                  UI
                </Col>

                <Row className="ms-3 mt-4">
                  <FormControl className="app-input-width me-5">
                    <Col className="">Task For Type</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                    </Row>
                  </FormControl>
                  <Col
                    xxl={4}
                    xl={4}
                    lg={4}
                    md={4}
                    sm={4}
                    className="ms-4 mt-3"
                  >
                    <span>Task For</span>
                    <Radio
                      checked={selectedValue === "a"}
                      onChange={handleChangea}
                      color="success"
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "All" }}
                    />
                    All{" "}
                    <Radio
                      checked={selectedValue === "b"}
                      onChange={handleChangeb}
                      value="b"
                      color="success"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "Single" }}
                    />
                    Single
                  </Col>
                  {selectedValue === "b" && (
                    <FormControl className="app-input-width me-5">
                      <Col className="">Select ISP</Col>
                      <Row className="d-flex align-items-center position-relative">
                        <Autocomplete
                          {...defaultProps}
                          id="disable-close-on-select"
                          disableCloseOnSelect
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="standard"
                              className=""
                              required
                            />
                          )}
                        />
                      </Row>
                    </FormControl>
                  )}
                </Row>

                <Row className="ms-3 mt-3">
                  <FormControl className="app-input-width me-5">
                    <Col className="">Task Type</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                    </Row>
                  </FormControl>
                  <FormControl className="app-input-width ms-4">
                    <Col className="ms-3">Task Description</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="ms-4"
                        required
                      />
                    </Row>
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <span className="ms-1">Due Date</span>
                    <input
                      type="date"
                      className="date-input  app-input-width "
                    />
                  </FormControl>

                  <Col
                    xxl={4}
                    xl={4}
                    lg={4}
                    md={4}
                    sm={4}
                    className="ms-4 mt-3"
                  >
                    <span>Need To Verify </span>
                    <Radio
                      checked={selectedValue === "b"}
                      // onChange={handleChange}
                      color="success"
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                    Yes{" "}
                    <Radio
                      checked={selectedValue === "a"}
                      //   onChange={handleChange}
                      value="b"
                      color="success"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "B" }}
                    />
                    No
                  </Col>
                </Row>
                <Row className="ms-1">
                  <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3">
                    <Button
                      // onClick={setShowModal}
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.create}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="button"
                      onClick={handleShowAll}
                      className="bordercolororange cursorpointer mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
                <Row className="ms-2 mb-3"></Row>
              </Row>
            </Form>
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
              List
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                <Row className="ms-3 mt-4">
                  <FormControl className="app-input-width me-5">
                    <Col className="">Task For Type</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                    </Row>
                  </FormControl>
                  <FormControl className="app-input-width me-5">
                    <Col className="">Task For</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                    </Row>
                  </FormControl>
                </Row>

                <Row className="ms-3 mt-4">
                  <FormControl className="app-input-width me-5">
                    <Col className="">Task Type</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                    </Row>
                  </FormControl>
                  <FormControl className="app-input-width me-5">
                    <Col className="">Task Status</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                    </Row>
                  </FormControl>
                  <FormControl className="app-input-width">
                    <Col className="">Verification Status</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                    </Row>
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-4">
                  <FormControl className=" app-input-width me-5">
                    <span className="ms-1">From Due Date</span>
                    <input
                      type="date"
                      className="date-input  app-input-width "
                    />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <span className="ms-1">To Due Date</span>
                    <input
                      type="date"
                      className="date-input  app-input-width "
                    />
                  </FormControl>
                </Row>
                <Row className="ms-1">
                  <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="button"
                      onClick={handleShowAll}
                      className="bordercolororange cursorpointer mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.showall}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="button"
                      onClick={handleShowAll}
                      className="bordercolororange cursorpointer mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
                <Row className="ms-2 mb-3"></Row>
                <Col className="d-flex align-items-end cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className="equal-width-table">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">S No.</th>

                      <th className="fontcolorwhite backgroundcolor">
                        Creation Date
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Entity Code
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Entity Name
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Task Type
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Description
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Due Date
                      </th>
                      <th className="fontcolorwhite backgroundcolor">Status</th>
                      <th className="fontcolorwhite backgroundcolor">
                        Verification
                      </th>
                      <th className="fontcolorwhite backgroundcolor">Edit</th>
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
                      <td>xxxx</td>

                      <td>xxxx</td>
                      <td>
                        <img
                          className="cursorpointer"
                          src="/action1.png"
                          style={{ width: "15px", height: "15px" }}
                        />
                      </td>
                    </tr>
                    <tr className="">
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>

                      <td>xxxxx</td>
                      <td>
                        <img
                          className="cursorpointer"
                          src="/action1.png"
                          style={{ width: "15px", height: "15px" }}
                        />
                      </td>
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
            </Form>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default ManageTask;
