import { MenuConstants } from "../../../CommonFiles/constant/MenuConstants";

import { Row, Col, Button, Container, Form, Table } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, FormControl, Radio, TextField } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
let data = [];
const AddAgency = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
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

  return (
    <Container fluid>
      <Row className="mb-4">
        <></>

        <Row>
          {/* <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   "> */}
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.agency} Master {">"} Manage{" "}
            {MenuConstants.agency}
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
              Add {MenuConstants.agency}
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                {/* Price List Name */}

                <Row className="ms-3 mt-4">
                  <FormControl className=" app-input-width me-5">
                    <Col> {MenuConstants.agency} Name</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col> {MenuConstants.agency} Code</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Contact Person</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col className="mt-4">Mobile No.</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col className="mt-4">Email</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col className="mt-4">User Name</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col className="mt-4">Password</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-2 mt-4">Status</Row>
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
                <Row className="ms-1">
                  <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.submit}
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
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              List
            </Col>
            <Col className="d-flex align-items-end cursorpointer justify-content-end">
              <img src="/xls.jpg" alt="" />
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                {/* Price List Name */}

                <Row className="ms-3 mt-4">
                  <FormControl className=" app-input-width me-5">
                    <Col> {MenuConstants.agency} Name</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col> {MenuConstants.agency} Code</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Contact Person</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col className="mt-4">Mobile No.</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col className="mt-4">Email</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col className="mt-4">User Name</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col className="mt-4">Status</Col>
                    <Col className=" mb-3">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=" app-input-width"
                            required
                          />
                        )}
                      />
                    </Col>
                  </FormControl>
                </Row>

                <Row className="ms-2">
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
                </Row>
                <Row className="ms-2 mb-3"></Row>
                <Col className="d-flex align-items-end cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className="equal-width-table">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">
                        User Role
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        {MenuConstants.agency} Name
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        {MenuConstants.agency} Code
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Contact Person
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Email ID
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Mobile No.
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Login Name
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Password
                      </th>
                      <th className="fontcolorwhite backgroundcolor">Status</th>
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
                      <td>
                        <img
                          className="cursorpointer"
                          src="/action2.png"
                          style={{ width: "15px", height: "15px" }}
                        />
                      </td>
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
                      <td>
                        <img
                          className="cursorpointer"
                          src="/action2.png"
                          style={{ width: "15px", height: "15px" }}
                        />
                      </td>
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

export default AddAgency;
