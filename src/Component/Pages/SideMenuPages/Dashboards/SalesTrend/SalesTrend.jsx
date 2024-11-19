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

const SalesTrend = () => {
  const navigate = useNavigate();

  const handleIspDashboard = () => {
    navigate("/ispdashboard");
  };

  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
  const handleAttendanceDashboard = () => {
    navigate("/attendancedashboard");
  };
  const handleSalesTrendClick = () => {
    navigate("/salestrend");
  };

  const handleShowAll = () => {
    // Add logic for showing all schemes here
    console.log("Show all schemes");
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
                className="cursorpointer  p-0  backgroundcoloroffwhite fontcolorwhite mediumfont  mediumfontbold  me-3 app-btns-format "
                onClick={handleAttendanceDashboard}
              >
                {MenuConstants.attendance} {MenuConstants.dashboard}
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                className="cursorpointer p-1 me-3 bordercolororange fontcolorwhite backgroundcolor  mediumfontbold app-btns-format "
                onClick={handleSalesTrendClick}
              >
                Sales Trend
              </Col>
              <Col
                onClick={handleIspDashboard}
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                className="cursorpointer  fontcolorwhite backgroundcoloroffwhite mediumfontbold app-btns-format "
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
                    <Row className="ms-3">Date</Row>
                    <Col className="ms-3 mb-3">
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
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      className="bordercolororange cursorpointer mediumfont mt-3 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                      onClick={handleShowAll}
                    >
                      Reset
                    </Button>
                  </Col>
                  {/* Action Buttons */}
                </Row>
              </Row>
            </Form>
            <Row className="">
              <Col
                xxl={3}
                xl={3}
                lg={3}
                sm={3}
                md={3}
                className="app-modal-border rounded-2 backgroundcolorsecondary  p-0 ms-4 position-relative "
              >
                <Row className="align-items-center fontcolorwhite justify-content-center">
                  Falcon
                </Row>
                <Row className="ms-0 fontcolorwhite">
                  <Col>MTD</Col>
                  <Col>LMTD</Col>
                  <Col>M-1</Col>
                </Row>
                <Row className="ms-0 fontcolorwhite fw-bold">
                  <Col>120</Col>
                  <Col>109</Col>
                  <Col>984</Col>
                </Row>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                sm={3}
                md={3}
                className="app-modal-border rounded-2 backgroundcolorsecondary  p-0 ms-5 position-relative "
              >
                <Row className="align-items-center fontcolorwhite justify-content-center">
                  Falcon
                </Row>
                <Row className="ms-0 fontcolorwhite">
                  <Col>MTD</Col>
                  <Col>LMTD</Col>
                  <Col>M-1</Col>
                </Row>
                <Row className="ms-0 fontcolorwhite fw-bold">
                  <Col>120</Col>
                  <Col>109</Col>
                  <Col>984</Col>
                </Row>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                sm={3}
                md={3}
                className="app-modal-border rounded-2 backgroundcolorsecondary  p-0 ms-5 position-relative "
              >
                <Row className="align-items-center fontcolorwhite justify-content-center">
                  Falcon
                </Row>
                <Row className="ms-0 fontcolorwhite">
                  <Col>MTD</Col>
                  <Col>LMTD</Col>
                  <Col>M-1</Col>
                </Row>
                <Row className="ms-0 fontcolorwhite fw-bold">
                  <Col>120</Col>
                  <Col>109</Col>
                  <Col>984</Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col
                xxl={3}
                xl={3}
                lg={3}
                sm={3}
                md={3}
                className="app-modal-border rounded-2 backgroundcolorsecondary  p-0 ms-4 position-relative "
              >
                <Row className="align-items-center fontcolorwhite justify-content-center">
                  Falcon
                </Row>
                <Row className="ms-0 fontcolorwhite">
                  <Col>MTD</Col>
                  <Col>LMTD</Col>
                  <Col>M-1</Col>
                </Row>
                <Row className="ms-0 fontcolorwhite fw-bold">
                  <Col>120</Col>
                  <Col>109</Col>
                  <Col>984</Col>
                </Row>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                sm={3}
                md={3}
                className="app-modal-border rounded-2 backgroundcolorsecondary  p-0 ms-5 position-relative "
              >
                <Row className="align-items-center fontcolorwhite justify-content-center">
                  Falcon
                </Row>
                <Row className="ms-0 fontcolorwhite">
                  <Col>MTD</Col>
                  <Col>LMTD</Col>
                  <Col>M-1</Col>
                </Row>
                <Row className="ms-0 fontcolorwhite fw-bold">
                  <Col>120</Col>
                  <Col>109</Col>
                  <Col>984</Col>
                </Row>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                sm={3}
                md={3}
                className="app-modal-border rounded-2 backgroundcolorsecondary  p-0 ms-5 position-relative "
              >
                <Row className="align-items-center fontcolorwhite justify-content-center">
                  Falcon
                </Row>
                <Row className="ms-0 fontcolorwhite">
                  <Col>MTD</Col>
                  <Col>LMTD</Col>
                  <Col>M-1</Col>
                </Row>
                <Row className="ms-0 fontcolorwhite fw-bold">
                  <Col>120</Col>
                  <Col>109</Col>
                  <Col>984</Col>
                </Row>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-between mt-2">
              {/* Left Side: Top and Bottom Distributor */}
              <Col xs="auto">
                <Row className="align-items-center">
                  <Col xs="auto" className="fw-semibold">
                    Top 10 Distributor
                  </Col>
                  <Col xs="auto" className="p-0">
                    <Form.Check type="switch" id="custom-switch-1" />
                  </Col>
                  <Col xs="auto" className="p-0 fw-semibold">
                    Bottom 10 Distributor
                  </Col>
                </Row>
              </Col>

              {/* Right Side: QTY, Switch, and Value */}
              <Col xs="auto">
                <Row className="align-items-center">
                  <Col xs="auto" className="fw-semibold">
                    QTY
                  </Col>
                  <Col xs="auto" className="p-0">
                    <Form.Check type="switch" id="custom-switch-2" />
                  </Col>
                  <Col xs="auto" className="p-0 fw-semibold">
                    Value
                  </Col>
                </Row>
              </Col>
            </Row>

            <Table
              className="ms-2 mt-2 equal-width-table"
              style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            >
              <thead className=" smallfontsemibold">
                <tr>
                  <th className="fontcolorwhite backgroundcolor">
                    Distributer
                  </th>

                  <th className="fontcolorwhite backgroundcolor">Purchase</th>
                  <th className="fontcolorwhite backgroundcolor">Sale</th>
                  <th className="fontcolorwhite backgroundcolor">DDR</th>
                  <th className="fontcolorwhite backgroundcolor">LMTS</th>

                  <th className="fontcolorwhite backgroundcolor">WOI</th>
                  <th className="fontcolorwhite backgroundcolor">M-1</th>
                  <th className="fontcolorwhite backgroundcolor">M-2</th>
                  <th className="fontcolorwhite backgroundcolor">M-3</th>
                  <th className="fontcolorwhite backgroundcolor">SOH</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                  <td>Disrtributer:1</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                </tr>
                <tr className="">
                  <td>Disrtributer:2</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
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
            <Row className="align-items-center justify-content-between mt-2">
              {/* Left Side: Top and Bottom Distributor */}
              <Col xs="auto">
                <Row className="align-items-center">
                  <Col xs="auto" className="fw-semibold">
                    Top 10 Retailer
                  </Col>
                  <Col xs="auto" className="p-0">
                    <Form.Check type="switch" id="custom-switch-1" />
                  </Col>
                  <Col xs="auto" className="p-0 fw-semibold">
                    Bottom 10 Retailer
                  </Col>
                </Row>
              </Col>

              {/* Right Side: QTY, Switch, and Value */}
            </Row>
            <Table
              className="ms-2 mt-2 equal-width-table"
              style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            >
              <thead className=" smallfontsemibold">
                <tr>
                  <th className="fontcolorwhite backgroundcolor">
                    Distributer
                  </th>

                  <th className="fontcolorwhite backgroundcolor">Purchase</th>
                  <th className="fontcolorwhite backgroundcolor">Sale</th>
                  <th className="fontcolorwhite backgroundcolor">DDR</th>
                  <th className="fontcolorwhite backgroundcolor">LMTS</th>

                  <th className="fontcolorwhite backgroundcolor">M-1</th>
                  <th className="fontcolorwhite backgroundcolor">M-2</th>
                  <th className="fontcolorwhite backgroundcolor">M-3</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                  <td>Retailer:1</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>

                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                </tr>
                <tr className="">
                  <td>Retailer:2</td>
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
            <Row className="align-items-center justify-content-between mt-2">
              {/* Left Side: Top and Bottom Distributor */}
              <Col xs="auto">
                <Row className="align-items-center">
                  <Col xs="auto" className="fw-semibold">
                    Top 10 Products
                  </Col>
                  <Col xs="auto" className="p-0">
                    <Form.Check type="switch" id="custom-switch-1" />
                  </Col>
                  <Col xs="auto" className="p-0 fw-semibold">
                    Bottom 10 Products
                  </Col>
                </Row>
              </Col>

              {/* Right Side: QTY, Switch, and Value */}
            </Row>
            <Table
              className="ms-2 mt-2 equal-width-table"
              style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            >
              <thead className=" smallfontsemibold">
                <tr>
                  <th className="fontcolorwhite backgroundcolor">SKU</th>

                  <th className="fontcolorwhite backgroundcolor">Purchase</th>
                  <th className="fontcolorwhite backgroundcolor">Sale</th>
                  <th className="fontcolorwhite backgroundcolor">DDR</th>
                  <th className="fontcolorwhite backgroundcolor">LMTS</th>

                  <th className="fontcolorwhite backgroundcolor">M-1</th>
                  <th className="fontcolorwhite backgroundcolor">M-2</th>
                  <th className="fontcolorwhite backgroundcolor">M-3</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                  <td>SKU:1</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>

                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                </tr>
                <tr className="">
                  <td>SKU:2</td>
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

export default SalesTrend;
