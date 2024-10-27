import { Row, Table,Container, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function Country() {
  const navigate = useNavigate();
  const [countryInput, setCountryInput] = useState("");
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

  const handleCreate = () => {
    if (countryInput) {
      console.log("Country created:", countryInput);
    }
  };

  const handleCancel = () => {
    setCountryInput("");
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

            <Row className="app-country-box ms-0">
              <Row className="mt-3 ms-1">{MenuConstants.country}</Row>
              <Col className="ms-1 mb-3">
                <TextField
                  id="country-input"
                  // label="Country"
                  variant="standard"
                  value={countryInput}
                  onChange={(e) => setCountryInput(e.target.value)}
                  required
                  className="app-input-width"
                />
              </Col>
              <Row className="mb-4">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button
                    onClick={handleCreate}
                    className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite app-btns-format me-4"
                  >
                    {MenuConstants.create}
                  </Button>
                </Col>
                <Col>
                  <Button
                    onClick={handleCancel}
                    className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                  >
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>

          <Row className="ms2 mt-4 mb-5">
            <Col className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0">
              <Row className="mt-3 ms-3">{MenuConstants.country}</Row>
              <Col xxl={3} xl={3} lg={3} md={3} className="mt-2">
                <TextField
                  id="search-country"
                  // label="Search Country"
                  variant="standard"
                  className="app-input-width ms-3"
                />
              </Col>
              <Col className="cursorpointer bordercolororange ms-5 mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format">
                {MenuConstants.search}
              </Col>

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
