import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import { Row, Col, Button, Container, Form, Table, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, FormControl, Radio, TextField } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
let data = [];
const ManagCompetitionData = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("a"); // Set initial value if needed
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleCloseModal2 = () => setShowModal2(false);
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
 const handleChange = (event) => {
   setSelectedValue(event.target.value);
   navigate("/managecompetitiondataexcel");
 };
  return (
    <Container fluid>
      <Row className="mb-4">
        <></>

        <Row>
          {/* <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   "> */}
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.competition}
            </span>{" "}
            {">"} Manage {MenuConstants.competition} Data
          </Col>
          {/* </Col> */}
          <Row className="ms2 mt-2 position-relative">
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
              Manage Competition Data
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
                    onChange={handleChange}
                    value="b"
                    color="success"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                  UI
                </Col>

                <Row className="ms-3 mt-4">
                  <FormControl className=" app-input-width me-5">
                    <Col> {MenuConstants.brand} </Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col> {MenuConstants.category} </Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>SubCategory</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Model</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>

                <Row className="ms-3 mt-3">
                  <FormControl className="app-input-width">
                    <Col className="">Price Band</Col>
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
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        size="xl"
                        className="mt-2 cursorpointer"
                        style={{
                          color: "#ed713e",
                          position: "absolute",
                          end: 0,
                          marginInlineStart: 90,
                        }}
                      />
                    </Row>
                  </FormControl>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-5">Status</Row>
                    <Col className="ms-5 mt-2 form-check form-switch">
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
                      onClick={setShowModal}
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
              Search Model
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                <Row className="ms-3 mt-4">
                  <FormControl className=" app-input-width me-5">
                    <Col> {MenuConstants.brand} </Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col> {MenuConstants.category} </Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>SubCategory</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Model</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>

                <Row className="ms-3 mt-4">
                  <FormControl className="app-input-width me-5">
                    <Col className="">Price Band</Col>
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
                    <Col className="">Status</Col>
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
                </Row>
                <Row className="ms-2 mb-3"></Row>
                <Col className="d-flex align-items-end cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className="equal-width-table">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">S No.</th>

                      <th className="fontcolorwhite backgroundcolor">Brand</th>
                      <th className="fontcolorwhite backgroundcolor">
                        Category
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Sub Category
                      </th>
                      <th className="fontcolorwhite backgroundcolor">Model</th>
                      <th className="fontcolorwhite backgroundcolor">
                        Price Band
                      </th>
                      <th className="fontcolorwhite backgroundcolor">Status</th>
                      <th className="fontcolorwhite backgroundcolor">Action</th>
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
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              Search Price Band
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                {/* Price List Name */}

                <Row className="ms-3 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col className="mt-4">Price Band</Col>
                    <Col className=" mb-3">
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
                  </FormControl>
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
                            className="ms-2 app-input-width"
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
                <Modal
                  show={showModal}
                  onHide={handleCloseModal}
                  className="align-items-center app-modal-border d-flex border-dark"
                >
                  <Modal.Header className="backgroundcolor fontcolorwhite mediumfontbold">
                    Create Price Band
                  </Modal.Header>
                  <Modal.Body>
                    <Row className="app-country-box">
                      <Row>
                        <FormControl className="app-input-width ms-4">
                          <Col className=""> {MenuConstants.price} Band</Col>

                          <TextField
                            variant="standard"
                            className=""
                            required
                            // onChange={(e) => setCountry(e.target.value)}
                          />
                        </FormControl>
                        <Col>
                          <Row className="ms-2 ">Status</Row>
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
                      <Col xxl={3} xl={3} lg={3} md={3}>
                        <Button
                          type="submit"
                          className="cursorpointer bordercolororange mediumfont mt-4 mb-2 p-1 ms-2 backgroundcolorsecondary fontcolorwhite app-btns-format"
                        >
                          {MenuConstants.create}
                        </Button>
                      </Col>
                      <Col xxl={3} xl={3} lg={3} md={3}>
                        <Button
                          // type="submit"
                          onClick={handleCloseModal

                          }
                          className="cursorpointer bordercolororange mediumfont mt-4 ms-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                        >
                          {MenuConstants.cancel}
                        </Button>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
                <Col className="d-flex align-items-end cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className="">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">S No.</th>
                      <th className="fontcolorwhite backgroundcolor">
                        Price Band
                      </th>
                      <th className="fontcolorwhite backgroundcolor">Status</th>
                      <th className="fontcolorwhite backgroundcolor">Edit</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="">
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
                        onClick={setShowModal2}
                          className="cursorpointer"
                          src="/action1.png"
                          style={{ width: "15px", height: "15px" }}
                        />
                      </td>
                    </tr>
                    <tr className="">
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
                <Modal
                  show={showModal2}
                  onHide={handleCloseModal2}
                  className="align-items-center app-modal-border d-flex border-dark"
                >
                  <Modal.Header className="backgroundcolor fontcolorwhite mediumfontbold">
                   Edit Price Band
                  </Modal.Header>
                  <Modal.Body>
                    <Row className="app-country-box">
                      <Row>
                        <FormControl className="app-input-width ms-4">
                          <Col className=""> {MenuConstants.price} Band</Col>

                          <TextField
                            variant="standard"
                            className=""
                            required
                            // onChange={(e) => setCountry(e.target.value)}
                          />
                        </FormControl>
                        <Col>
                          <Row className="ms-2 ">Status</Row>
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
                      <Col xxl={3} xl={3} lg={3} md={3}>
                        <Button
                          type="submit"
                          className="cursorpointer bordercolororange mediumfont mt-4 mb-2 p-1 ms-2 backgroundcolorsecondary fontcolorwhite app-btns-format"
                        >
                          Save
                        </Button>
                      </Col>
                      <Col xxl={3} xl={3} lg={3} md={3}>
                        <Button
                          // type="submit"
                          onClick={handleCloseModal2}
                          className="cursorpointer bordercolororange mediumfont mt-4 ms-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                        >
                          {MenuConstants.cancel}
                        </Button>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
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

export default ManagCompetitionData;
