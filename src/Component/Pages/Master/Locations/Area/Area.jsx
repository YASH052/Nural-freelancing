import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  Table,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
 import TextField from "@mui/material/TextField";
 import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
let data = [];
const datas = [
  {
    country: "India",
    region: "South Asia",
    state: "Maharashtra",
    city: "Mumbai",
    area: "Andheri",
    pincode: "12121",
    actions: ["./action1.png", "./action2.png"],
  },
  {
    country: "United States",
    region: "North America",
    state: "California",
    city: "Los Angeles",
    area: "Hollywood",
    pincode: "12121",
    actions: ["./action1.png", "./action2.png"],
  },
  {
    country: "Germany",
    region: "Europe",
    state: "Bavaria",
    city: "Munich",
    area: "Altstadt",
    pincode: "12121",
    actions: ["./action1.png", "./action2.png"],
  },
  {
    country: "Australia",
    region: "Oceania",
    state: "New South Wales",
    city: "Sydney",
    area: "Darling Harbour",
    pincode: "12121",
    actions: ["./action1.png", "./action2.png"],
  },
  {
    country: "Japan",
    region: "East Asia",
    state: "Tokyo",
    city: "Tokyo City",
    area: "Shibuya",
    pincode: "12121",
    actions: ["./action1.png", "./action2.png"],
  },
];
const Area = () => {
  const navigate = useNavigate();
 

 const defaultProps = {
   options: data,
   getOptionLabel: (option) => option.title,
 };

 

  // Step 2: handleSideMenu function to toggle the side menu
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };

  return (
    <Container fluid>
      <Row className="mb-4">
        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.area}
          </Col>
          <Row className="ms2 mt-2">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.manage} {MenuConstants.area}
            </Col>
            <Row className="app-country-box ms-0">
              <Col>
                <Row className="ms-2 mt-3">{MenuConstants.country}</Row>
                <Col className=" mt-1">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="ms-2 app-input-width"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col>
                <Row className="ms2 mt-3">{MenuConstants.region}</Row>
                <Col className=" mt-1">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="app-input-width ms-2"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col>
                <Row className="ms2 mt-3">{MenuConstants.state}</Row>
                <Col className=" mt-1">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="app-input-width ms-2"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col>
                <Row className="ms2 mt-3">{MenuConstants.city}</Row>
                <Col className=" mt-1">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="app-input-width ms-2"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Row className=" mb-4">
                <Col lg={3} xl={3} md={3} xxl={3} sm={3}>
                  <Row className="ms2 mt-3">{MenuConstants.area}</Row>
                  <Col className="mb-3">
                    <TextField
                      id="standard-basic"
                      className="mt-1 app-input-width ms-2"
                      variant="standard"
                    />
                  </Col>
                </Col>
                <Col>
                  <Row className="ms-3 mt-3">{MenuConstants.pincode}</Row>
                  <Col className="mb-3">
                    <TextField
                      id="standard-basic"
                      className="app-input-width mt-1 ms-3"
                      variant="standard"
                    />
                  </Col>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format ">
                    {MenuConstants.create}
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format ">
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>
          <Row className="ms2 mt-4 ">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0 mb-5 position-relative">
              <Col>
                <Row className="ms-3 mt-3">{MenuConstants.country}</Row>
                <Col className="ms3 mt-1">
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
              <Col>
                <Row className="ms-3 mt-3">{MenuConstants.region}</Row>
                <Col className="ms3 mt-1">
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
              <Col>
                <Row className="ms-3 mt-3">{MenuConstants.state}</Row>
                <Col className="ms3 mt-1">
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
              <Col>
                <Row className="ms-3 mt-3">{MenuConstants.city}</Row>
                <Col className="ms3 mt-1">
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
              <Row>
                <Col lg={3}>
                  <Row className="ms-4 mt-4">{MenuConstants.area}</Row>
                  <Col className="ms3 mb-3">
                    <TextField
                      id="standard-basic"
                      className="app-input-width mt-1"
                      variant="standard"
                    />
                  </Col>
                </Col>
                <Col lg={3}>
                  <Row className="ms-4 mt-4">{MenuConstants.pincode}</Row>
                  <Col className="ms3 mb-3">
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
                  className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite ms-5 mt-5 app-btns-format "
                >
                  {MenuConstants.search}
                </Col>
              </Row>
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
                      {MenuConstants.city}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.area}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.pincode}
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
                      <td>{item.city}</td>
                      <td>{item.area}</td>
                      <td>{item.pincode}</td>
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

export default Area;
