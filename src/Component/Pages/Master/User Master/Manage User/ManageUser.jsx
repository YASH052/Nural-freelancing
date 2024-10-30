import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import { Row, Col, Button, Container, Form, Table, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, Checkbox, FormControl, Radio, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ManageUser = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(
    MenuConstants.nofileselected
  );
  const handleUpload = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
  };

  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };




  
  
  const [selectedValue, setSelectedValue] = useState("a"); // Set initial value if needed

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    navigate("/manageispexcel");
  };
  const handleSubmit = (event) => {};
  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
   const [showModal, setShowModal] = useState(false);
   const [status, setStatus] = useState(false);

   // Handler for opening the modal
   const handleOpenModal = () => setShowModal(true);

   // Handler for closing the modal
   const handleCloseModal = () => setShowModal(false);
  return (
    <Container fluid>
      <Row className="mb-5">
        <></>

        <Row>
          {/* <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   "> */}
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} User Master {">"} Manage User
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
              Manage User
            </Col>

            <Row className="app-country-box ms-0">
              <Form onSubmit={handleSubmit}>
                <Row className="ms-4 mt-4 ">
                  <FormControl className=" app-input-width me-5">
                    <Col>User Role</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Full Name</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Mobile No.</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Email ID</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-4 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>Login ID</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Password</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <Col className="mt-2 form-check form-switch">
                    <Col>Status</Col>
                    <input
                      className="ms-2 mt-2 form-check-input cursorpointer"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      //   checked={status}
                      //   onChange={(e) => setStatus(e.target.checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </Col>
                </Row>
                {/* Price List Name */}
                <Row>
                  <Col
                    className="ms-4 mt-4"
                    xxl={4}
                    xl={4}
                    lg={4}
                    md={4}
                    sm={4}
                  >
                    <span className="largefontbold">Location</span>
                    <Radio
                      checked={selectedValue === "a"}
                      //   onChange={handleChange}
                      color="success"
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                    Single{" "}
                    <Radio
                      checked={selectedValue === "b"}
                      // onChange={handleChange}
                      value="b"
                      color="success"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "B" }}
                    />
                    Multiple
                  </Col>
                  <Col>
                    <Button
                      //   type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-4 backgroundcolorsecondary fontcolorwhite app-btns-format"
                      onClick={handleOpenModal} // Open modal on click
                    >
                      {MenuConstants.create} {MenuConstants.location}
                    </Button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3} xl={3} xxl={3} md={3} sm={3} className="ms-3">
                    <Checkbox defaultChecked /> Location Code 1
                  </Col>
                  <Col lg={3} xl={3} xxl={3} md={3} sm={3} className="ms-3">
                    <Checkbox defaultChecked /> Location Code 2
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} xl={3} xxl={3} md={3} sm={3} className="ms-3">
                    <Checkbox defaultChecked /> Location Code 3
                  </Col>
                  <Col lg={3} xl={3} xxl={3} md={3} sm={3} className="ms-3">
                    <Checkbox defaultChecked /> Location Code 4
                  </Col>
                </Row>

                <Row>
                  <Col lg={3} xl={3} xxl={3} md={3} sm={3} className="ms-3">
                    <Checkbox defaultChecked /> Location Code 5
                  </Col>
                  <Col lg={3} xl={3} xxl={3} md={3} sm={3} className="ms-3">
                    <Checkbox defaultChecked /> Location Code 6
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} xl={3} xxl={3} md={3} sm={3} className="ms-3">
                    <Checkbox defaultChecked /> Location Code 7
                  </Col>
                  <Col lg={3} xl={3} xxl={3} md={3} sm={3} className="ms-3">
                    <Checkbox defaultChecked /> Location Code 8
                  </Col>
                </Row>

                <Row className="ms-2 mb-4">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.create} User
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>

            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="mt-5 cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              User List
            </Col>
            <Modal
              show={showModal}
              onHide={handleCloseModal}
              className="align-items-center d-flex custom-modal-width"
            >
              <Modal.Header className="backgroundcolor fontcolorwhite mediumfontbold">
                Create Location
              </Modal.Header>
              <Modal.Body>
                <Row className="">
                  <FormControl className="app-input-width ms-3">
                    <Col className=""> Hierarchy Level</Col>
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
                          // onChange={(e) => setCountry(e.target.value)}
                        />
                      )}
                    />
                  </FormControl>

                  <FormControl className="app-input-width ms-5">
                    <Col className=""> Parent Hierarchy Name</Col>
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
                          // onChange={(e) => setCountry(e.target.value)}
                        />
                      )}
                    />
                  </FormControl>
                  <FormControl className="app-input-width ms-5">
                    <Col>Location Name</Col>
                    <TextField variant="standard" className="" />
                  </FormControl>
                </Row>

                <Row>
                  <FormControl className="app-input-width ms-3 mt-3">
                    <Col>Location Code</Col>
                    <TextField variant="standard" className="" />
                  </FormControl>

                  <Col className="ms-2 mt-3 form-check form-switch">
                    <Col className="">Status</Col>
                    <input
                      className="form-check-input ms-2 mt-1 cursorpointer"
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
                </Row>
                <Row className="ms-2 mb-4">
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Button
                      //   type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.create}
                    </Button>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Button
                      onClick={handleCloseModal}
                      //   type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
            <Form onSubmit={handleSubmit} className="">
              <Row className="app-country-box">
                <Row className="ms-4 mt-3">
                  <FormControl className="app-input-width me-5">
                    <Col className=""> User Role</Col>
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
                          // onChange={(e) => setCountry(e.target.value)}
                        />
                      )}
                    />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Full Name</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Mobile No.</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Email ID</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-4 mt-3">
                  <FormControl className="app-input-width me-5">
                    <Col>Login ID</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.showall}
                    </Button>
                  </Col>
                </Row>
                <Col className="d-flex mt-3 align-items-end cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className=" equal-width-table">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">
                        User Role
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Full Name
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Email ID
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Mobile No.
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Location Code
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Login ID
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
              className="mt-5 cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              Location List
            </Col>
            <Form onSubmit={handleSubmit} className="">
              <Row className="app-country-box">
                <Row className="ms-4 mt-3">
                  <FormControl className="app-input-width me-5">
                    <Col className="">Hierachy Level</Col>

                    <TextField
                      variant="standard"
                      className=""
                      required
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                  <FormControl className=" app-input-width me-5 ms-3">
                    <Col>Location Name</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Location Code</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-2 mt-3">
                  <Col lg={3}>
                    <FormControl className="">
                      <Col>Parent Location Name</Col>
                      <TextField
                        variant="standard"
                        className="app-input-width"
                      />
                    </FormControl>
                  </Col>
                  <FormControl className="app-input-width me-5">
                    <Col>Parent Code</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className="app-input-width me-5">
                    <Col>User Name</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-2">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.showall}
                    </Button>
                  </Col>
                </Row>
                <Col className="d-flex mt-4 align-items-end cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className="">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">
                        Hierarchy Level
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Location Name
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Location Code
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        User Name
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Parent Location
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Parent User Name
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
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default ManageUser;
