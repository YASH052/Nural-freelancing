import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import { Row, Col, Button, Container, Form, Table } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, FormControl, Radio, TextField } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ViewRetailer = () => {
    const navigate = useNavigate();
      const handleSetting = () => {
        navigate("/setting"); // Navigate to the settings route
      };
       const handleAddRetailderexcel = () => {
         navigate("/addretailerexcel"); // Navigate to the settings route
       };

    const handlesubmit = () => {

    }
    const handleShowAll = () => {

    }
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
            {">"} Retailer {">"} Manage Retailer
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
              View {MenuConstants.retailer}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange position-absolute end-0 mediumfont  me-3 app-btns-format "
              onClick={handleAddRetailderexcel}
            >
              Add {MenuConstants.retailer}
            </Col>
            <Form onSubmit={handlesubmit}>
              <Row className="app-country-box mb-4">
                {/* Price List Name */}

                <Row className="ms-3 mt-4">
                  <FormControl className=" app-input-width me-5">
                    <Col>ND</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Sales Channel</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Retailer Name</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>Retailer Code</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>State</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Status</Col>

                    <Autocomplete
                      id="disable-close-on-select"
                      disableCloseOnSelect
                      options={["Option 1", "Option 2", "Option 3"]} // replace with relevant options
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="app-input-width"
                        />
                      )}
                    />
                  </FormControl>
                </Row>
                <Row className="ms-2 mt-4 fontcolororange mediumfont ">
                  <Col
                    xxl={3}
                    lg={3}
                    md={3}
                    xl={3}
                    sm={3}
                    className="cursorpointer"
                  >
                    {MenuConstants.download}
                    {"  "}
                    Retailers Detail
                  </Col>
                  <Col
                    xxl={3}
                    lg={3}
                    md={3}
                    xl={3}
                    sm={3}
                    className="cursorpointer"
                  >
                    {MenuConstants.download} Retails Mapping Info
                  </Col>
                </Row>
                <Row className="ms-2 mb-3">
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
                <Col className="d-flex align-items-end cursorpointer justify-content-end">
                  <img src="/xls.jpg" alt="" />
                </Col>
                <Table className="equal-width-table">
                  <thead className=" smallfontsemibold">
                    <tr>
                      <th className="fontcolorwhite backgroundcolor">
                        Retailer Code
                      </th>

                      <th className="fontcolorwhite backgroundcolor">
                        Retailer Name
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        SC code
                      </th>
                      <th className="fontcolorwhite backgroundcolor">
                        SC Name
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
                      <th className="fontcolorwhite backgroundcolor">
                        Details
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
                      <td className="">
                        <Button className="app-details-btn  mb-1 mt-1 backgroundcolorsecondary bordercolororange">
                          {MenuConstants.details}
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
                    <tr className="">
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>xxxx</td>
                      <td>
                        <Button className="app-details-btn mb-1 mt-1 backgroundcolorsecondary bordercolororange">
                          {MenuConstants.details}
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

export default ViewRetailer;
