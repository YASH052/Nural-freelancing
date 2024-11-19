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
import { Autocomplete, Checkbox, FormControl, TextField } from "@mui/material";
// import { BsFilter } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
let data = [];
const SerialNumberMovementum = () => {
  const navigate = useNavigate();
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
            {">"} Serial Number Movement
          </Col>
          {/* </Col> */}
          <Row className="ms2 mt-2 position-relative">
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
              Search Panel
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                <Row className="mt-4">
                  <Row>
                    <Col lg={3} className="mt-4 ms-2">
                      Enter Serial Number
                    </Col>
                    <Col lg={4} md={4} sm={4} xxl={4} xl={4} className="p-0">
                      <FormControl className="p-2">
                        <Row className="d-flex align-items-center position-relative">
                          <TextField
                            className=""
                            required
                            style={{ width: "300px" }}
                          />
                        </Row>
                      </FormControl>
                      <Col>
                        <span className="text-danger smallfont">
                          Note: maximum of 10,000 serial number allowed
                        </span>
                      </Col>
                    </Col>

                    <Col xxl={2} xl={2} lg={2} md={2}>
                      <Button
                        type="submit"
                        className="cursorpointer bordercolororange mediumfont mt-3 mb-2 p-1 ms-2 backgroundcolorsecondary fontcolorwhite app-btns-format"
                      >
                        {MenuConstants.submit}
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        // type="submit"
                        onClick={handleCloseModal}
                        className="cursorpointer bordercolororange mediumfont mt-3 ms-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                      >
                        {MenuConstants.cancel}
                      </Button>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-4 ms-2 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="button"
                      className="bordercolororange cursorpointer mediumfont mt-4 ms-2 backgroundcolorsecondary fontcolorwhite app-btns-format"
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
                <Col className="d-flex mt-2 align-items-end p-0 cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className="equal-width-table">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">
                        Serial No.
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        SKU Code
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        SKU Name
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Sales Channel
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Last Update On
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        View Transaction
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="">
                      <td>xxxx</td>
                      <td>xxxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td className="smallfontsemibold cursorpointer fontcolororange">
                        View Transaction
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
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
              Transaction
            </Col>

            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                <Col className="d-flex mt-2 align-items-end p-0 cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className="equal-width-table">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">
                        Transaction Type
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        From channel
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        From channel Type
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        To Channel
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        To Channel Type
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Transaction Date
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        SKU Code
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Reference Document No.
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        Created On
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="">
                      <td>xxxx</td>
                      <td>xxxxx</td>
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

export default SerialNumberMovementum;
