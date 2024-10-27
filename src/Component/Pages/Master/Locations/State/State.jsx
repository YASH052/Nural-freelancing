import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  Table
} from "react-bootstrap";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
 import TextField from "@mui/material/TextField";
 import Autocomplete from "@mui/material/Autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faArrowLeft,
  faArrowRight,
  
} from "@fortawesome/free-solid-svg-icons";
// import Header from "./Header";
// import SideMenu from "../SideMenu/SideMenu";
// import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
let data = [];

const datas = [
  {
    country: "India",
    region: "South Asia",
    state: "Maharashtra",
    actions: ["./action1.png", "./action2.png"], // Paths to your action images
  },
  {
    country: "United States",
    region: "North America",
    state: "California",
    actions: ["./action1.png", "./action2.png"],
  },
  {
    country: "Germany",
    region: "Europe",
    state: "Bavaria",
    actions: ["./action1.png", "./action2.png"],
  },
  {
    country: "Australia",
    region: "Oceania",
    state: "New South Wales",
    actions: ["./action1.png", "./action2.png"],
  },
  {
    country: "Japan",
    region: "East Asia",
    state: "Tokyo",
    actions: ["./action1.png", "./action2.png"],
  },
];


const State = () => {
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
  return (
    <Container fluid>
      
      <Row className="mb-4">
        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.state}
          </Col>
          <Row className="ms2 mt-2">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              sm={3}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.manage} {MenuConstants.state}
            </Col>
            <Row className="app-country-box ms-0">
              <Col lg={3}>
                <Row className="ms-4 mt-3">{MenuConstants.country}</Row>
                <Col className="ms-4 mt-1">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="app-input-width"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col lg={3}>
                <Row className="ms-4 mt-3">{MenuConstants.region}</Row>
                <Col className="ms3 mt-1">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className=" app-input-width"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col>
                <Row className="ms2 mt-3">{MenuConstants.state}</Row>
                <Col className="ms2 mb-3">
                  <TextField
                    id="standard-basic"
                    className="mt-1 app-input-width"
                    variant="standard"
                  />
                </Col>
              </Col>
              <Row className="ms-2 mb-4">
                <Col lg={3} xl={3} xxl={3} md={3}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format ">
                    {MenuConstants.create}
                  </Button>
                </Col>
                <Col lg={3} xl={3} xxl={3} md={3}>
                  <Button className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format ">
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>
          <Row className="ms2 mt-4 mb-5">
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format ">
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              <Col>
                <Row className="ms-4 mt-3">{MenuConstants.country}</Row>
                <Col className="ms-4 mt-2">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col>
                <Row className="ms-3 mt-3">{MenuConstants.region}</Row>
                <Col className="ms3 mt-2">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col>
                <Row className="ms2 mt-4">State</Row>
                <Col className="ms2 mb-3">
                  <TextField
                    id="standard-basic"
                    className="mt-1 app-input-width"
                    variant="standard"
                  />
                </Col>
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                sm={3}
                xs={3}
                className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary me-3 fontcolorwhite mt-5 app-btns-format "
              >
                {MenuConstants.search}
              </Col>
              <Table className="mt-5">
                <thead>
                  <tr className="first-row">
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.country}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.region}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.state}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.action}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((item, index) => (
                    <tr key={index}>
                      <td>{item.country}</td>
                      <td>{item.region}</td>
                      <td>{item.state}</td>
                      <td>
                        {item.actions.map((action, idx) => (
                          <img
                            key={idx}
                            src={action}
                            className={`cursorpointer ${
                              idx === 0 ? "me-1" : ""
                            }`}
                            alt="Action"
                            style={{
                              width: idx === 0 ? "15px" : "15px",
                              height: "15px",
                            }}
                          />
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Row className="  app-pageformat mt5 mb3">
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

export default State;
