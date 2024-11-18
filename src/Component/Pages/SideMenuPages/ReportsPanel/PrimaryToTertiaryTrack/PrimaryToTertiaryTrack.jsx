import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import { Row, Col, Button, Container, Form, Table, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, Checkbox, FormControl, TextField } from "@mui/material";
import { BsFilter } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
let data = [];
const PrimaryToTertiaryTrack = () => {
  const navigate = useNavigate();
  const options = ["Format1", "Custom"];
  const handleOptionChange = (event, value) => {
    if (value === "Custom") {
      navigate("/serialnomov"); // Replace '/custom-page' with your target route
    }
  };
  const [status, setStatus] = useState("");
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
 const [records, setRecords] = useState(10);

 const handleSelectChange = (e) => {
   setRecords(e.target.value);
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
              {MenuConstants.reports}
            </span>{" "}
            {">"} Primary To Tertiary Track
          </Col>
          {/* </Col> */}
          <Row className="ms2 mt-2 position-relative">
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
              Search Panel
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                <Row className="ms-3 mt-4">
                  <Row className="fw-bold mb-4">Report Generator</Row>
                  <FormControl className="app-input-width me-5">
                    <Col className="">Select Report</Col>
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
                  <Col className="ms-4 app-input-width">
                    From Date
                    <Col className="mt-1">
                      <input
                        type="date"
                        // value={fromDate}
                        // onChange={(e) => setFromDate(e.target.value)}
                        className="date-input app-input-width"
                        required
                      />
                      {/* {errors.fromDate && (
                        <div className="error-text">{errors.fromDate}</div>
                      )} */}
                    </Col>
                  </Col>
                  <Col className="ms-5 app input width">
                    To Date
                    <Col className="mt-1">
                      <input
                        type="date"
                        // value={fromDate}
                        // onChange={(e) => setFromDate(e.target.value)}
                        className="date-input app-input-width"
                        required
                      />
                      {/* {errors.fromDate && (
                        <div className="error-text">{errors.fromDate}</div>
                      )} */}
                    </Col>
                  </Col>
                </Row>
                <Modal
                  show={showModal}
                  onHide={handleCloseModal}
                  className="align-items-center custom-modal-width1 app-modal-border d-flex border-dark"
                >
                  <Col className="cursorpointer bordercolororange mediumfont ms-1 p-2 backgroundcolorsecondary fontcolorwhite app-btns-format">
                    Search Panel
                  </Col>
                  <Modal.Body className="pt-0">
                    <Form>
                      <Row className="app-country-box">
                        <Row className="p-3 ms-1 fw-bold">Report Generator</Row>
                        <Row className="ms-2 mt-3">
                          <FormControl className="app-input-width me-5">
                            <Col className="">Select Report</Col>
                            <Row className="d-flex align-items-center position-relative">
                              <Autocomplete
                                options={options}
                                onChange={handleOptionChange}
                                disableCloseOnSelect
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    variant="standard"
                                    required
                                  />
                                )}
                              />
                            </Row>
                          </FormControl>
                          <FormControl className="app-input-width me-5">
                            <Col className="">Date Type</Col>
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
                          <Col className="ms-4  app-input-width">
                            From Date
                            <Col className="mt-1">
                              <input
                                type="date"
                                // value={fromDate}
                                // onChange={(e) => setFromDate(e.target.value)}
                                className="date-input app-input-width"
                                required
                              />
                              {/* {errors.fromDate && (
                        <div className="error-text">{errors.fromDate}</div>
                      )} */}
                            </Col>
                          </Col>
                          <Col className="ms-5  app input width">
                            To Date
                            <Col className="mt-1">
                              <input
                                type="date"
                                // value={fromDate}
                                // onChange={(e) => setFromDate(e.target.value)}
                                className="date-input app-input-width"
                                required
                              />
                              {/* {errors.fromDate && (
                        <div className="error-text">{errors.fromDate}</div>
                      )} */}
                            </Col>
                          </Col>
                        </Row>
                        <Col xxl={2} xl={2} lg={2} md={2}>
                          <Button
                            type="submit"
                            className="cursorpointer bordercolororange mediumfont mt-4 mb-2 p-1 ms-2 backgroundcolorsecondary fontcolorwhite app-btns-format"
                          >
                            {MenuConstants.submit}
                          </Button>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={3}>
                          <Button
                            // type="submit"
                            onClick={handleCloseModal}
                            className="cursorpointer bordercolororange mediumfont mt-4 ms-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                          >
                            {MenuConstants.cancel}
                          </Button>
                        </Col>
                        <Row className="p-3 mt-3 ms-1 fw-bold">
                          Header Section
                        </Row>
                        <Row>
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                        </Row>
                        <Row className="mt-3 mb-3">
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                          <Col
                            lg={2}
                            xxl={2}
                            md={2}
                            sm={2}
                            xl={2}
                            className="border rounded-3 ms-3"
                          >
                            <Checkbox defaultChecked /> Header 6
                          </Col>
                        </Row>

                        <div className="d-flex align-items-center">
                          <span className="me-2 ms-2">
                            Save Template For Future:{" "}
                          </span>
                          <Form.Control
                            value={records}
                            className="mb-1"
                            onChange={handleSelectChange}
                            style={{
                              border: "1px solid black",
                              borderRadius: "0px",
                              height: "35px",
                              width: "200px",
                            }}
                          ></Form.Control>
                          <Col
                            xxl={2}
                            xl={2}
                            lg={2}
                            md={2}
                            className="col-md-3"
                          >
                            <Button
                              onClick={setShowModal}
                              type="submit"
                              className="cursorpointer bordercolororange mediumfont ms-4 mb-1 backgroundcolorsecondary fontcolorwhite app-btns-format"
                            >
                              Save
                            </Button>
                          </Col>
                        </div>
                        <Row className="mb-2 mt-3 ms-0">
                          <Col
                            xxl={2}
                            xl={2}
                            lg={2}
                            md={2}
                            className="col-md-3"
                          >
                            <Button
                              type="submit"
                              className="cursorpointer bordercolororange mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                            >
                              {MenuConstants.submit}
                            </Button>
                          </Col>
                          <Col
                            xxl={2}
                            xl={2}
                            lg={2}
                            md={2}
                            className="col-md-3"
                          >
                            <Button
                              onClick={() => setShowModal(false)}
                              type="submit"
                              className="cursorpointer bordercolororange mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                            >
                              {MenuConstants.cancel}
                            </Button>
                          </Col>
                        </Row>
                      </Row>
                    </Form>
                  </Modal.Body>
                </Modal>
                <Row className="mt-3">
                  <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3 ">
                    <Button
                      onClick={setShowModal}
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-3 ms-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="button"
                      onClick={handleShowAll}
                      className="bordercolororange cursorpointer mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
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
            <Col className="d-flex align-items-end p-0 cursorpointer justify-content-end">
              <img src="/xls.jpg" alt="" />
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                <Col className="d-flex mt-2 align-items-end cursorpointer justify-content-end">
                  <div className="d-flex align-items-center">
                    <span className="me-2">Showing</span>
                    <Form.Select
                      value={records}
                      className="mb-1"
                      onChange={handleSelectChange}
                      style={{
                        border: "1px solid black",
                        borderRadius: "0px",
                        height: "35px",
                        width: "125px",
                      }}
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </Form.Select>
                    <span className="ms-2">Records</span>
                  </div>
                </Col>
                <Table className="equal-width-table">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">
                        Header 1
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Header 2
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Header 3
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Header 4
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Header 5
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Header 6
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="">
                      <td className="text-end">
                        <div
                          style={{
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            variant="standard"
                            className=""
                            style={{ paddingRight: "45px" }} // Add padding to avoid text overlap
                          />
                          <BsFilter
                            style={{
                              position: "absolute",
                              right: 30,
                              bottom: 0, // Adjust this value for vertical alignment
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </td>
                      <td className="text-end">
                        <div
                          style={{
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            variant="standard"
                            className=""
                            style={{ paddingRight: "45px" }} // Add padding to avoid text overlap
                          />
                          <BsFilter
                            style={{
                              position: "absolute",
                              right: 30,
                              bottom: 0, // Adjust this value for vertical alignment
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </td>
                      <td className="text-end">
                        <div
                          style={{
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            variant="standard"
                            className=""
                            style={{ paddingRight: "45px" }} // Add padding to avoid text overlap
                          />
                          <BsFilter
                            style={{
                              position: "absolute",
                              right: 30,
                              bottom: 0, // Adjust this value for vertical alignment
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </td>
                      <td className="text-end">
                        <div
                          style={{
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            variant="standard"
                            className=""
                            style={{ paddingRight: "45px" }} // Add padding to avoid text overlap
                          />
                          <BsFilter
                            style={{
                              position: "absolute",
                              right: 30,
                              bottom: 0, // Adjust this value for vertical alignment
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </td>
                      <td className="text-end">
                        <div
                          style={{
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            variant="standard"
                            className=""
                            style={{ paddingRight: "45px" }} // Add padding to avoid text overlap
                          />
                          <BsFilter
                            style={{
                              position: "absolute",
                              right: 30,
                              bottom: 0, // Adjust this value for vertical alignment
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </td>
                      <td className="text-end">
                        <div
                          style={{
                            position: "relative",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            variant="standard"
                            className=""
                            style={{ paddingRight: "45px" }} // Add padding to avoid text overlap
                          />
                          <BsFilter
                            style={{
                              position: "absolute",
                              right: 30,
                              bottom: 0, // Adjust this value for vertical alignment
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td>xxxx</td>
                      <td>xxxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
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

export default PrimaryToTertiaryTrack;
