import {
  Row,
  Col,
  Button,
  Container,
  Form,
  Table,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import TotalNSMDataChart from "../../../../../assets/Charts/TotalNSMDataChart.JSX";

const ISPDashboard = () => {
  const navigate = useNavigate();

 
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
  const handleViewClient = () => {
    navigate("/viewclient");
  };
 
  return (
    <Container fluid>
      <Row className="mb-4">
        <></>

        <>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom">
            {MenuConstants.manage} {MenuConstants.client}
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
                className="cursorpointer p-1 me-3  fontcolorwhite backgroundcoloroffwhite   mediumfontbold app-btns-format "
                onClick={handleSalesTrendClick}
              >
                Sales Trend
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                className="cursorpointer  fontcolorwhite backgroundcolor bordercolororange mediumfontbold app-btns-format "
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
                      //   onClick={handleShowAll}
                    >
                      Reset
                    </Button>
                  </Col>
                  {/* Action Buttons */}
                </Row>
              </Row>
            </Form>

            <Row className="align-items-center justify-content-end mt-2">
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
                  <th className="fontcolorwhite backgroundcolor">NSM</th>

                  <th className="fontcolorwhite backgroundcolor">No. of ISP</th>
                  <th className="fontcolorwhite backgroundcolor">YDay Sale</th>
                  <th className="fontcolorwhite backgroundcolor">MTD Sale</th>
                  <th className="fontcolorwhite backgroundcolor">
                    30 Days Avg
                  </th>

                  <th className="fontcolorwhite backgroundcolor">
                    Counter Sale
                  </th>
                  <th className="fontcolorwhite backgroundcolor">
                    Mkt Share (%)
                  </th>
                  <th className="fontcolorwhite backgroundcolor">
                    Zero Sale ISP
                  </th>
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
                </tr>
              </tbody>
            </Table>

            <Table
              className="ms-2 mt-2 equal-width-table"
              style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            >
              <thead className=" smallfontsemibold">
                <tr>
                  <th className="fontcolorwhite backgroundcolor">RSM</th>

                  <th className="fontcolorwhite backgroundcolor">No. of ISP</th>
                  <th className="fontcolorwhite backgroundcolor">YDay Sale</th>
                  <th className="fontcolorwhite backgroundcolor">MTD Sale</th>
                  <th className="fontcolorwhite backgroundcolor">
                    30 Days Avg
                  </th>

                  <th className="fontcolorwhite backgroundcolor">
                    Counter Sale
                  </th>
                  <th className="fontcolorwhite backgroundcolor">
                    Mkt Share (%)
                  </th>
                  <th className="fontcolorwhite backgroundcolor">
                    Zero Sale ISP
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                  <td>xxxxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>

                  <td>xxxx</td>
                  <td>xxxx</td>
                  <td>xxxx</td>
                </tr>
                <tr className="">
                  <td>xxxxxxxxx</td>
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
                    Top 10 ISP
                  </Col>
                  <Col xs="auto" className="p-0">
                    <Form.Check type="switch" id="custom-switch-1" />
                  </Col>
                  <Col xs="auto" className="p-0 fw-semibold">
                    Bottom 10 ISP
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
                  <th className="fontcolorwhite backgroundcolor">ISP Name</th>

                  <th className="fontcolorwhite backgroundcolor">City</th>
                  <th className="fontcolorwhite backgroundcolor">
                    Retailer Code
                  </th>
                  <th className="fontcolorwhite backgroundcolor">MTD Val</th>
                  <th className="fontcolorwhite backgroundcolor">MTD ASP</th>

                  <th className="fontcolorwhite backgroundcolor">LMTD Vol</th>
                  <th className="fontcolorwhite backgroundcolor">LMTD Val</th>
                  <th className="fontcolorwhite backgroundcolor">LMTD ASP</th>
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
                </tr>
              </tbody>
            </Table>
            <Row className="mb-5 ms-2">
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={6}
                style={{
                  boxShadow: "1px 3px 4px #ED713E",
                  borderRadius: "12px",
                }}
              >
                <TotalNSMDataChart />
              </Col>
            </Row>
          </Row>
        </>
      </Row>
    </Container>
  );
};

export default ISPDashboard;
