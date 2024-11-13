import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import {
  Row,
  Col,
  Button,
  Container,
  Form,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Radio, TextField } from "@mui/material";
import { useRef, useState } from "react";

const AddRetailerExcel = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(MenuConstants.nofileselected);
 const handleUpload = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
}

  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
   

   const handleViewRetailer = () => {
     navigate("/viewretailer"); // Navigate to the settings route
   };

   const handleButtonClick = () => {
     fileInputRef.current.click(); // Trigger the click event on the hidden file input
   };


 const handleFileChange = (event) => {
   const file = event.target.files[0];
   if (file) {
     setSelectedFileName(file.name); // Update the state with the file name
   } else {
     setSelectedFileName(MenuConstants.nofileselected); // Reset if no file is selected
   }
 };
  const [errors, setErrors] = useState({});
 const [selectedValue, setSelectedValue] = useState("a"); // Set initial value if needed

 const handleChange = (event) => {
   setSelectedValue(event.target.value);
   navigate("/addretailerui");
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
              Add {MenuConstants.retailer}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange position-absolute end-0 mediumfont  me-3 app-btns-format "
              onClick={handleViewRetailer}
            >
              View {MenuConstants.retailer}
            </Col>
            <Form onSubmit={handleUpload}>
              <Row className="app-country-box">
                {/* Price List Name */}
                <Col className="ms-4">
                  <span>Select Mode</span>
                  <Radio
                    checked={selectedValue === "a"}
                    // onChange={handleChange}
                    color="success"
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  Excel{" "}
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    color="success"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                  UI
                </Col>
                <Row>
                  <Col xxl={4} xl={4} lg={4} md={4}>
                    <Row className="ms-4 mt-4">{MenuConstants.upload} File</Row>
                    <Button
                      className="ms-4 mb-3 app-uploadfile-btn"
                      onClick={handleButtonClick}
                    >
                      {MenuConstants.choose} {MenuConstants.file}
                    </Button>
                    <Form.Control
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      isInvalid={!!errors.file}
                    />
                    <span className="borderbottom">{selectedFileName}</span>
                    <Form.Control.Feedback type="invalid" className="d-block">
                      {errors.file}
                    </Form.Control.Feedback>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.upload}
                    </Button>
                  </Col>
                </Row>
                <Row className="ms-3 fontcolororange mediumfont mb-4">
                  <Col
                    xxl={2}
                    lg={2}
                    md={2}
                    xl={2}
                    sm={2}
                    className="cursorpointer"
                  >
                    {MenuConstants.download}
                    {"  "}
                    Template
                  </Col>
                  <Col
                    xxl={3}
                    lg={3}
                    md={3}
                    xl={3}
                    sm={3}
                    className="cursorpointer"
                  >
                    {MenuConstants.download} Reference {MenuConstants.code}
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

export default AddRetailerExcel;
