import {
  Row,
  Col,
  Button,
  Container,
  Table,
  Form,
   
} from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
let data = [];
const datas = [
  {
    serial: "1",
    brand: "Brand A",
    actions: ["./action2.png", "./action1.png"],
  },
  {
    serial: "2",
    brand: "Brand B",
    actions: ["./action2.png", "./action1.png"],
  },
];

import {
  
  faArrowLeft,
  faArrowRight,
  
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FormControl, Input, InputLabel } from "@mui/material";
const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState("Brand"); // Initial placeholder text

  const handleSelect = (eventKey, event) => {
    setSelectedBrand(event.target.textContent); // Update the placeholder with selected dropdown item
  };

   const handleSubmit = (e) => {
     e.preventDefault();
     // Add form submission logic here
   };
 const defaultProps = {
   options: data,
   getOptionLabel: (option) => option.title,
 };
  const navigate = useNavigate();
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
            {">"} {MenuConstants.brand}
          </Col>
          <Row className="ms2 mt-2">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.manage} {MenuConstants.brand}
            </Col>
            <Row className="app-country-box ms-0">
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  // as={Row}
                  className="ms-2 mt-3"
                  controlId="formBrandName"
                >
                  <Form.Label column className="ms2">
                    Brand
                  </Form.Label>
                  <Col xxl={3} xl={3} lg={3} md={3} className="ms2 mb-3">
                    <FormControl>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        className="app-input-width"
                      />
                    </FormControl>
                  </Col>
                </Form.Group>

                <Form.Group
                  // as={Row}
                  className="ms-2 mt-3"
                  controlId="formDescription"
                >
                  <Form.Label column className="ms2">
                    {MenuConstants.description}
                  </Form.Label>
                  <Row className="ms2 mb-3">
                    <FormControl>
                      <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                  </Row>
                </Form.Group>

                <Row className="ms-2 mb-4">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format "
                    >
                      {MenuConstants.create}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      className="bordercolororange backgroundcolorsecondarybuttons cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format "
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
              </Form>
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
            <Row className="app-country-box ms-0 p-0 position-relative">
              <Row className="ms-4 mt-3">{MenuConstants.brand}</Row>
              <Col xxl={3} xl={3} lg={3} md={3} sm={3} className="ms3 mt-1">
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
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                sm={2}
                xs={2}
                className="cursorpointer position-absolute end-0 mt-5 me-3 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format "
              >
                {MenuConstants.search}
              </Col>

              <Table className="mt-5">
                <thead>
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">S.No</th>
                    <th className="backgroundcolor fontcolorwhite">Brand</th>
                    <th className="backgroundcolor fontcolorwhite">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((item, index) => (
                    <tr key={index} className="">
                      <td>{item.serial}</td>
                      <td>{item.brand}</td>
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

export default Brands;
