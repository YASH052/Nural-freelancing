import {
  Row,
  Col,
  Button,
  Container,
  Table,
  Dropdown,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import  { useState } from "react";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
  import TextField from "@mui/material/TextField";
  import Autocomplete from "@mui/material/Autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
let data = [];
 const datas = [
   {
     country: "India",
     region: "South Asia",
     state: "Maharashtra",
     city: "Mumbai",
     actions: ["./action1.png", "./action2.png"],
   },
   {
     country: "United States",
     region: "North America",
     state: "California",
     city: "Los Angeles",
     actions: ["./action1.png", "./action2.png"],
   },
   {
     country: "Germany",
     region: "Europe",
     state: "Bavaria",
     city: "Munich",
     actions: ["./action1.png", "./action2.png"],
   },
   {
     country: "Australia",
     region: "Oceania",
     state: "New South Wales",
     city: "Sydney",
     actions: ["./action1.png", "./action2.png"],
   },
   {
     country: "Japan",
     region: "East Asia",
     state: "Tokyo",
     city: "Tokyo City",
     actions: ["./action1.png", "./action2.png"],
   },
 ];
const City = () => {
  const navigate = useNavigate();
 const [countryInputsearch, setCountryInputsearch] = useState("");
 const [regionInputsearch, setRegionInputsearch] = useState("");
 const [stateInputsearch, setStateInputsearch] = useState("");
 const [cityInputsearch, setCityInputsearch] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    setCountryInputsearch("");
    setRegionInputsearch("");
    setStateInputsearch("");
  };
   const defaultProps = {
     options: data,
     getOptionLabel: (option) => option.title,
   };
    const handleCancel = () => {
      // Clear the form values or perform any cancel logic
      setCountry("");
      setRegion("");
      setState("");
      setCity("");
    };
     const handleCreate = (e) => {
       e.preventDefault();
       // Submit logic here, like form validation or API calls
       console.log("Creating with:", { country, region, state,city });
     };
  // const handleSelectCountry = (eventKey, event) => {
  //   setSelectedCountry(event.target.textContent); // Update the placeholder with selected dropdown item
  // };
  // const handleSelectRegion = (eventKey, event) => {
  //   setSelectedRegion(event.target.textContent); // Update the placeholder with selected dropdown item
  // };
  // const handleSelectState = (eventKey, event) => {
  //   setSelectedState(event.target.textContent); // Update the placeholder with selected dropdown item
  // };
  // const handleEnterCountry = (eventKey, event) => {
  //   setEnteredCountry(event.target.textContent); // Update the placeholder with Entered dropdown item
  // };
  // const handleEnterRegion = (eventKey, event) => {
  //   setEnteredRegion(event.target.textContent); // Update the placeholder with Entered dropdown item
  // };
  // const handleEnterState = (eventKey, event) => {
  //   setEnteredState(event.target.textContent); // Update the placeholder with Entered dropdown item
  // };

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
            {">"} {MenuConstants.city}
          </Col>

          <Form onSubmit={handleCreate} onReset={handleCancel}>
            <Row className="ms2 mt-2">
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
              >
                {MenuConstants.manage} {MenuConstants.city}
              </Col>
            </Row>
            <Row className="app-country-box ms-2">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3">{MenuConstants.country}</Row>
                <Col className="ms-3">
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
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    )}
                  />
                </Col>
              </Col>

              {/* Region Input */}
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-3 mt-3">{MenuConstants.region}</Row>
                <Col className="ms2 mb-3">
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
                        onChange={(e) => setRegion(e.target.value)}
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-3 mt-3">{MenuConstants.state}</Row>
                <Col className="ms2 mb-3">
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
                        onChange={(e) => setRegion(e.target.value)}
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms2 mt-3">{MenuConstants.city}</Row>
                <Col className="ms2 mb-3">
                  <TextField
                    id="region-input"
                    variant="standard"
                    value={state}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1 app-input-width"
                  />
                </Col>
              </Col>

              {/* Buttons */}
              <Row className="ms-1 mb-4">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button
                    type="submit"
                    className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                  >
                    {MenuConstants.create}
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="reset"
                    className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                  >
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Form>

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
            <Row className="app-country-box ms-0 p-0 position-relative">
              <Form onSubmit={handleSearch} className="ms-0">
                <Row className="mt-4">
                  <Col>
                    <Row className="mt-2 ms-3">{MenuConstants.country}</Row>

                    <Col className="ms-2 mb-3">
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
                            onChange={(e) =>
                              setCountryInputsearch(e.target.value)
                            }
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col>
                    <Row className="mt-2 ms-3">{MenuConstants.region}</Row>
                    <Col className="ms-2 mb-3">
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
                            onChange={(e) =>
                              setRegionInputsearch(e.target.value)
                            }
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col>
                    <Row className="mt-2 ms-2">{MenuConstants.state}</Row>
                    <Col className="ms-2 mb-3">
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
                            onChange={(e) =>
                              setStateInputsearch(e.target.value)
                            }
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Col>
                    <Row className="mt-2 ms-2">{MenuConstants.city}</Row>
                    <Col className="ms-2 mb-3">
                      <TextField
                        variant="standard"
                        className="ms-2 app-input-width"
                        required
                        onChange={(e) => setCityInputsearch(e.target.value)}
                      />
                    </Col>
                  </Col>

                  <Col className="ms-5">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary mt-4 fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                </Row>
              </Form>
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
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.city}
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

export default City;
