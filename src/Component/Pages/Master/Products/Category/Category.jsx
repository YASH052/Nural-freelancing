import {
  Row,
  Col,
  Button,
  Container,
  Table,
  Form,
   
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
 import { useState } from "react";

import {
  
  faArrowLeft,
  faArrowRight,
  
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
 import TextField from "@mui/material/TextField";
 import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, Input } from "@mui/material";
 let data = [];
const datas = [
  {
    serial: "1",
    category: "category A",
    actions: ["./action2.png", "./action1.png"],
  },
  {
    serial: "2",
    category: "category B",
    actions: ["./action2.png", "./action1.png"],
  },
];

const Category = () => {
  const navigate = useNavigate();
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
 const handleSubmit = (e) => {
   e.preventDefault();
   // Add form submission logic here
 };
  const [validated, setValidated] = useState(false);
  const [brandValue, setBrandValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const handleSubmitSearch = (event) => {
    event.preventDefault();

    // Basic validation logic
    if (brandValue && categoryValue) {
      // Proceed with the search logic
      console.log("Searching with", {
        brand: brandValue,
        category: categoryValue,
      });
    } else {
      setValidated(true);
    }
  };
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  return (
    <Container fluid>
      <Row className="mb-4">
        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              Masters
            </span>{" "}
            {">"} {MenuConstants.category}
          </Col>
          <Row className="ms2 mt-2">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.manage} {MenuConstants.category}
            </Col>
            <Row className="app-country-box ms-0">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Form.Group className="mt-3">
                      <Form.Label className="ms-3">
                        {MenuConstants.brand}
                      </Form.Label>
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
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mt-3">
                      <Form.Label className="ms-2">
                        {MenuConstants.category}
                      </Form.Label>
                      <Col xxl={3} xl={3} lg={3} md={3} className="ms2 mb-3">
                        <FormControl>
                          <Input
                            id="my-input"
                            className="mt-1 app-input-width"
                            aria-describedby="my-helper-text"
                          />
                        </FormControl>
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="ms-2 mt-3">
                  <Form.Label className="ms-3">
                    {MenuConstants.description}
                  </Form.Label>
                  <Row className="ms2 mb-3">
                    <FormControl>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        className="app-input-width"
                      />
                    </FormControl>
                  </Row>
                </Form.Group>

                <Row className="ms-2 mb-4">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary mt-2 fontcolorwhite me-4 app-btns-format "
                    >
                      {MenuConstants.create}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      className="bordercolororange cursorpointer mediumfont backgroundcolorsecondary mt-2 fontcolorwhite me-4 app-btns-format "
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
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmitSearch}
              >
                <Row className="">
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-4">{MenuConstants.brand}</Row>
                    <Col className="ms-3">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select-brand"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="app-input-width ms-2"
                            required
                            onChange={(e) => setBrandValue(e.target.value)}
                          />
                        )}
                      />
                    </Col>
                  </Col>

                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-3 mt-4">{MenuConstants.category}</Row>
                    <Col className="ms-3">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select-category"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className="app-input-width"
                            required
                            onChange={(e) => setCategoryValue(e.target.value)}
                          />
                        )}
                      />
                    </Col>
                  </Col>

                  <Col
                    xxl={2}
                    xl={2}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                    className="cursorpointer position-absolute end-0 mt-5 me-3"
                  >
                    <Button
                      className=" bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format"
                      type="submit"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Table className="mt-5">
                <thead>
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">S.No</th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.brand}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((item, index) => (
                    <tr key={index} className="">
                      <td>{item.serial}</td>
                      <td>{item.category}</td>
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

export default Category;
