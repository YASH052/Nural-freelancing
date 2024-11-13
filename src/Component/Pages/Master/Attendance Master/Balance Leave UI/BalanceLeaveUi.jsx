import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Button,
  Container,
  FormControl,
  InputGroup,
  Table,
  Form,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, Box, Radio, TextField } from "@mui/material";
import { useState } from "react";

const BalanceLeaveUi = () => {
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic for search functionality goes here
  };

  const handleShowAll = () => {
    // Logic for showing all results goes here
  };
  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };

  const [leavesTypes, setLeavesTypes] = useState("");
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedValue, setSelectedValue] = useState("b"); // Set initial value if needed

  const handleCreate = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!leavesTypes) {
      validationErrors.leavesTypes = "leavetypes Name is required.";
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    // Proceed with create logic
    console.log("Creating entry with:", { leavesTypes, status });
  };
const handleChange = (event) => {
  setSelectedValue(event.target.value);
  navigate("/balanceleaveexcel");
};
  const handleCancel = () => {
    setLeavesTypes("");
    setStatus(false);
    setErrors({});
  };

  return (
    <Container fluid>
      <Row className="mb-4">
        <></>

        <Row>
          {/* <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   "> */}
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>
            {" > "}
            {MenuConstants.attendance} Master {">"} {MenuConstants.balance}{" "}
            Leave Update
          </Col>
          {/* </Col> */}
          <Row className="ms2 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              Leave Allocation
            </Col>
            <Form onSubmit={handleCreate} onReset={handleCancel}>
              <Row className="app-country-box">
                <Col className="ms-4">
                  <span>Select Mode</span>
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    color="success"
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  Excel{" "}
                  <Radio
                    checked={selectedValue === "b"}
                    // onChange={handleChange}
                    value="b"
                    color="success"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                  UI
                </Col>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-4">{MenuConstants.user} Type</Row>
                    <Col className="ms-3 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="ms-2 app-input-width"
                            required
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-4">{MenuConstants.user} Name</Row>
                    <Col className="ms-3 mb-3">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="ms-2 app-input-width"
                        required
                      />
                    </Col>
                  </Col>
                  <Col className="ms-4 mt-5 p-2">
                    Note: Leaves Updated will be as on Date{" "}
                  </Col>
                </Row>
                <Row className="ms-4 mt-4">
                  <Col lg={5} className="p-0">
                    <Box
                      sx={{
                        borderLeft: "1px solid #ddd",
                        borderRight: "1px solid #ddd",
                      }}
                    >
                      <Table className="custom-table">
                        <thead>
                          <tr>
                            <th className="fontcolorwhite backgroundcolor">
                              Leave Type
                            </th>
                            <th className="fontcolorwhite backgroundcolor">
                              No. of Leaves
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td style={{ width: "50%", textAlign: "center" }}>
                              CL
                            </td>
                            <td style={{ width: "50%" }}>
                              <TextField
                                className="app-text-field-table"
                                required
                                size="small"
                                variant="outlined"
                              />
                            </td>
                          </tr>
                          <tr className="">
                            <td style={{ width: "50%", textAlign: "center" }}>
                              PL
                            </td>
                            <td style={{ width: "50%" }}>
                              <TextField
                                className="app-text-field-table"
                                required
                                size="small"
                                variant="outlined"
                              />
                            </td>
                          </tr>
                          <tr className="">
                            <td style={{ width: "50%", height: "50px" }}></td>
                            <td style={{ width: "50%", height: "50px" }}></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Box>
                  </Col>
                </Row>
                {/* Status Toggle */}
                {/* Buttons */}
                <Row className="mb-3 ms-2">
                  <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.submit}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </Row>
          <Row className="ms-2 mt-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite ms-0 me-4 app-btns-format "
            >
              {MenuConstants.list}
            </Col>

            <Row className="app-country-box ms-0 p-0 position-relative">
              <Form>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-4">{MenuConstants.user} Type</Row>
                    <Col className="ms-3 mb-3">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="ms-2 app-input-width"
                            required
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-4">{MenuConstants.user} Name</Row>
                    <Col className="ms-3 mb-3">
                      <TextField
                        // {...params}
                        variant="standard"
                        className="ms-2 app-input-width"
                        required
                      />
                    </Col>
                  </Col>

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
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.showall}
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Table className="mt-2">
                <thead className="backgroundcolor mediumfont fontcolorwhite ">
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">S.No</th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.user} Type
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.user} Name
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      Leave Type
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      No. of Leaves
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="">xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
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
              <Row className="mt5 app-pageformat mb3">
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

export default BalanceLeaveUi;
