import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import { Row, Col, Button, Container, Form, Table, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, FormControl, Radio, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faPlusSquare, faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";



const ManageIspUi = () => {
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

  const handleAddRetailderUI = () => {
    navigate("/addretailerui"); // Navigate to the settings route
  };
  const handleViewRetailer = () => {
    navigate("/viewretailer"); // Navigate to the settings route
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the click event on the hidden file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name); // Update the state with the file name
    } else {
      setSelectedFileName(MenuConstants.nofileselected); // Reset if no file is selected
    }
  };
  const [errors, setErrors] = useState({});
  const [selectedValue, setSelectedValue] = useState("b"); // Set initial value if needed

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    navigate("/manageispexcel");
  };
   const handleSubmit = (event) => {
     
     
   };
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState(false);

    // Handler for opening the modal
    const handleOpenModal = () => setShowModal(true);

    // Handler for closing the modal
  const handleCloseModal = () => setShowModal(false);
  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };


const [showTable, setShowTable] = useState(false);

const handleTable = () => {
  setShowTable((prevShowTable) => !prevShowTable);
};


  function table(){
    return (
      <>
        <Table className="mt-4 border equal-width-table">
          <thead className="smallfontsemibold">
            <tr>
              <th className="fontcolorwhite backgroundcolor">{MenuConstants.retailer} Name</th>
              <th className="fontcolorwhite backgroundcolor">{MenuConstants.retailer} Code</th>
              <th className="fontcolorwhite backgroundcolor">
                {MenuConstants.isp} Activation Code
              </th>
              <th className="fontcolorwhite backgroundcolor">
                {MenuConstants.isp} Deactivation Code
              </th>
              <th className="fontcolorwhite backgroundcolor">Action</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="">
                <span className="">
                  <FontAwesomeIcon className="cursorpointer" onClick={handleTable} icon={faSquareMinus} size="sm"/>
                  
                </span>{" "}
                xxxx
              </td>
              <td>xxxx</td>
              <td>xxxx</td>
              <td>xxxx</td>

              <td>
                <Button className="app-details-btn smallfont backgroundcolorsecondary bordercolororange">
                  Exit {MenuConstants.isp}
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
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
            {">"} {MenuConstants.isp} {">"} {MenuConstants.manage}{" "}
            {MenuConstants.isp}
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
              {MenuConstants.manage} {MenuConstants.isp}
            </Col>

            <Row className="app-country-box ms-0">
              {/* Price List Name */}
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
              <Form onSubmit={handleSubmit}>
                <Row className="ms-4 mt-4 ">
                  <FormControl className=" app-input-width me-5">
                    <Col>{MenuConstants.isp} Store Code</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>{MenuConstants.retailer} Name</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>

                  <Button
                    // type="submit"
                    onClick={handleOpenModal}
                    className="cursorpointer bordercolororange mediumfont mt-3 backgroundcolorsecondary fontcolorwhite mediumfontbold me-4 app-btns-format"
                  >
                    {MenuConstants.search} {MenuConstants.retailer}
                  </Button>
                </Row>
                <Row className="ms-4 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>{MenuConstants.isp} Name</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>{MenuConstants.isp} Code</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Mobile No.</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className="app-input-width">
                    <Col className="ms-2">Reporting Hierarchy</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="ms-2"
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

                  <FormControl className="ms-5 app-input-width me-5">
                    <Col className="ms-2">Email Id</Col>

                    <TextField variant="standard" className="ms-2 app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width">
                    <span className="ms-2">Joining Date</span>
                    <input type="date" className="date-input ms-2 app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className="app-input-width">
                    <Col className="ms-2">Agency</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="ms-2"
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
                  <FormControl className="ms-5 app-input-width me-5">
                    <Col className="ms-2"> Login Id</Col>
                    <TextField
                      variant="standard"
                      className=" ms-2 app-input-width"
                      required
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                  <FormControl className="app-input-width me-5">
                    <Col className="ms-2"> Password</Col>
                    <TextField
                      variant="standard"
                      className="ms-2 app-input-width"
                      required
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                </Row>
                <Row className="ms-2 mb-4">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.create}
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
            <Modal
              show={showModal}
              onHide={handleCloseModal}
              className="align-items-center app-modal-border d-flex border-dark custom-modal-width"
            >
              <Modal.Header className="backgroundcolor fontcolorwhite mediumfontbold">
                Search {MenuConstants.retailer}
              </Modal.Header>
              <Modal.Body>
                <Row className="app-btns-format  cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite">
                  List
                </Row>
                <Row className="app-country-box ">
                  <FormControl className="app-input-width ms-4">
                    <Col className=""> {MenuConstants.retailer} Name</Col>

                    <TextField
                      variant="standard"
                      className=""
                      required
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                  <FormControl className="app-input-width ms-5">
                    <Col className=""> {MenuConstants.retailer} Code</Col>

                    <TextField
                      variant="standard"
                      className=""
                      required
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-4 p-1 ms-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.search} {MenuConstants.retailer}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      // type="submit"
                      onClick={handleCloseModal}
                      className="cursorpointer bordercolororange mediumfont mt-4 ms-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>

                  <Table className="mt-4 equal-width-table">
                    <thead className="smallfontsemibold">
                      <tr>
                        <th className="fontcolorwhite backgroundcolor">
                          {MenuConstants.retailer} Code
                        </th>

                        <th className="fontcolorwhite backgroundcolor">
                          {MenuConstants.retailer} Name
                        </th>
                        <th className="fontcolorwhite backgroundcolor">
                          Select {MenuConstants.retailer}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="">
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>
                          <Button className="app-details-btn smallfont backgroundcolorsecondary bordercolororange">
                            Select
                          </Button>
                        </td>
                      </tr>
                      <tr className="">
                        <td>xxxx</td>
                        <td>xxxx</td>
                        <td>
                          <Button className="app-details-btn smallfontsemibold backgroundcolorsecondary bordercolororange">
                            Select
                          </Button>
                        </td>
                      </tr>
                      <tbody></tbody>
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
              </Modal.Body>
            </Modal>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="mt-5 cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.isp} Search
            </Col>
            <Form onSubmit={handleSubmit} className="">
              <Row className="app-country-box ">
                <Row className="ms-4 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>{MenuConstants.isp} Name</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>{MenuConstants.isp} Code</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Store Code</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className=" ms-2 app-input-width">
                    <span className="">Joining Date</span>
                    <input type="date" className="date-input app-input-width" />
                  </FormControl>
                  <FormControl className="ms-5 app-input-width">
                    <Col className=""> Mobile No.</Col>

                    <TextField
                      variant="standard"
                      className=""
                      required
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                  <FormControl className="ms-5 app-input-width me-5">
                    <Col>Login Id</Col>
                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col className="ms-2">Agency Code</Col>

                    <TextField
                      variant="standard"
                      className="ms-2 app-input-width"
                      required
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>

                  <FormControl className="ms-2 app-input-width me-5">
                    <Col> Status</Col>
                    <TextField
                      variant="standard"
                      className="ms-1 app-input-width"
                      required
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                </Row>
                <Row className="ms-2 mb-4">
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
                <Col className="d-flex align-items-end cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className=" equal-width-table">
                  <thead className="smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">
                        {MenuConstants.isp} Code
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        {MenuConstants.isp} Name
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Store Code
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Mobile No.
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Reporting Hierarchy
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Login Name
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Password
                      </th>
                      <th className="fontcolorwhite backgroundcolor">Action</th>
                      <th className="fontcolorwhite backgroundcolor">Status</th>
                      <th className="fontcolorwhite backgroundcolor">Edit</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="">
                      <td className="">
                        <span className="">
                          <FontAwesomeIcon
                            className="cursorpointer"
                            onClick={handleTable}
                            icon={faSquarePlus}
                            size="xs"
                          />
                        </span>{" "}
                        xxxx
                      </td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>

                      <td>
                        <Button className="app-details-btn1 smallfont backgroundcolorsecondary bordercolororange">
                          Switch {MenuConstants.retailer}
                        </Button>
                      </td>
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
                    {showTable && (
                      <tr>
                        <td colSpan="10">{table()}</td>
                      </tr>
                    )}
                    <tr className="">
                      <td>
                        <span className="">
                          <FontAwesomeIcon
                            className=""
                            icon={faSquarePlus}
                            size="xs"
                          />
                        </span>{" "}
                        xxxx
                      </td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>
                        <Button className="app-details-btn1 smallfontsemibold backgroundcolorsecondary bordercolororange">
                          Switch {MenuConstants.retailer}
                        </Button>
                      </td>

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
                    <tbody></tbody>
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

export default ManageIspUi;
