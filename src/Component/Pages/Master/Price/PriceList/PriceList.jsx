import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Button,
  Container,
  FormControl,
  InputGroup,
  Table,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
const priceListData = [
  {
    priceListName: "Basic Plan",
    statusIcon: "./action2.png",
    editIcon: "./action1.png",
  },
  {
    priceListName: "Premium Plan",
    statusIcon: "./action2.png",
    editIcon: "./action1.png",
  },
  // Add more data objects as needed
];
const PriceList = () => {
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handleuploadprice = () => {
    navigate("/uploadprice"); // Navigate to the settings route
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
            {">"} {MenuConstants.price}
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
              {MenuConstants.manage} {MenuConstants.price} {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms0 ">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-3 mt-3">
                  {MenuConstants.price} {MenuConstants.list}{" "}
                  {MenuConstants.name}
                </Row>
                <Col className="ms3 mb3">
                  <TextField
                    id="standard-basic"
                    className="mt-1 app-input-width"
                    variant="standard"
                  />
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms2 mt-3">Status</Row>
                <>
                  <Col className="ms2 mt-2 form-check form-switch">
                    <input
                      className="form-check-input cursorpointer"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </Col>
                </>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2} className=" col-md-3">
                <Button className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite  app-btns-format ">
                  {MenuConstants.create}
                </Button>
              </Col>
              <Col xxl={2} xl={2} lg={2} md={2}>
                <Button className="bordercolororange cursorpointer mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format ">
                  {MenuConstants.cancel}
                </Button>
              </Col>
            </Row>
          </Row>
          <Row className="ms2 mt-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms0 p-0 position-relative">
              <Table className="mt-5">
                <thead className="backgroundcolor fontcolorwhite ">
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.price} {MenuConstants.list} Name
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Status</th>
                    <th className="backgroundcolor fontcolorwhite">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {priceListData.map((item, index) => (
                    <tr key={index} className="app-placeholder">
                      <td>{item.priceListName}</td>
                      <td className="">
                        <img
                          src={item.statusIcon}
                          className="cursor-pointer ms-3"
                          alt="Status"
                          style={{ width: "15px", height: "15px" }}
                        />
                      </td>
                      <td>
                        <img
                          src={item.editIcon}
                          className="cursor-pointer ms-2"
                          alt="Edit"
                          style={{ width: "15px", height: "15px" }}
                        />
                      </td>
                    </tr>
                  ))}
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

export default PriceList;
