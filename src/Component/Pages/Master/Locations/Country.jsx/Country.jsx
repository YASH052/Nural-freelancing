import { Row, Table,Container, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { TextFields } from "@mui/icons-material";

export default function Country() {

   const [errors, setErrors] = useState({});

   const handleCreate = (e) => {
     e.preventDefault();
     if (validateForm()) {
       console.log("Country:", countryInput);
       // Handle form submission logic here
     }
   };

   const handleCancel = () => {
     setCountryInput(""); // Clears the input
     setErrors({}); // Clears any validation errors
   };
    const handleSearch = () => {
      setCountryInputsearch(""); // Clears the input
      
    };

   const validateForm = () => {
     const newErrors = {};
     if (!countryInput.trim()) {
       newErrors.country = "Country is required";
     }
     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
   };


  const navigate = useNavigate();
  const [countryInput, setCountryInput] = useState("");
  const [countryInputsearch, setCountryInputsearch] = useState("");
  const data = [
    {
      serial: "1",
      country: "Country A",
      actions: ["./action2.png", "./action1.png"],
    },
    {
      serial: "2",
      country: "Country B",
      actions: ["./action2.png", "./action1.png"],
    },
  ];

  const handleSetting = () => {
    navigate("/setting");
  };
  return (
    <Container fluid>
      <Row>
        <Row>
          <Col className="mt-1 fontcolorblackbold borderbottom">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.country}
          </Col>

          <Row className="ms-2 mt-2">
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
              {MenuConstants.manage} {MenuConstants.country}
            </Col>

            <Form onSubmit={handleCreate} className="app-country-box ms-0">
              <Row className="mt-3 ms-4">{MenuConstants.country}</Row>
              <Col className="ms-4 mb-3">
                <TextField
                  id="country-input"
                  variant="standard"
                  value={countryInput}
                  onChange={(e) => setCountryInput(e.target.value)}
                  required
                  className="app-input-width"
                  error={!!errors.country}
                  helperText={errors.country}
                />
              </Col>
              <Row className="mb-4">
                <Col xxl={2} xl={2} lg={2} md={2} className="ms-4">
                  <Button
                    type="submit"
                    className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite app-btns-format me-4"
                  >
                    {MenuConstants.create}
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="button"
                    onClick={handleCancel}
                    className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                  >
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>

          <Row className="ms2 mt-4 mb-5">
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0">
              <Form onSubmit={handleSearch} className="">
                <Row className="mt-3 ms-4">{MenuConstants.country}</Row>
                <Row>
                  <Col className="ms-4 mb-3">
                    <TextField
                      id="country-input"
                      variant="standard"
                      value={countryInputsearch}
                      onChange={(e) => setCountryInputsearch(e.target.value)}
                      required
                      className="app-input-width"
                      error={!!errors.country}
                      helperText={errors.country}
                    />
                  </Col>
                  <Col className="ms-5">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Table className="mt-5">
                <thead>
                  <tr className="first-row">
                    <th className="backgroundcolor fontcolorwhite">S.No</th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.country}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.action}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.serial}</td>
                      <td>{item.country}</td>
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
                              width: idx === 0 ? "15px" : "20px",
                              height: "15px",
                            }}
                          />
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <Row className="app-pageformat mt5 mb3">
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
}
