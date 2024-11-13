import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import { Row, Col, Button, Container, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, Radio, TextField } from "@mui/material";
import { useRef, useState } from "react";

const BulkUploadMapping = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(
    MenuConstants.nofileselected
  );
  const handleUpload = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
  };

  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
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


  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
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
<<<<<<< HEAD
            {">"} {MenuConstants.user} Master {">"} Bulk Upload Mapping
=======
            {">"} User Master {">"} Bulk Upload Mapping
>>>>>>> 40659183f3ab1a75310227313b80d1938144048b
          </Col>
          {/* </Col> */}
          <Row className="ms2 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfontbold backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              Upload
            </Col>

            <Form onSubmit={handleUpload}>
              <Row className="app-country-box">
                {/* Price List Name */}
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-4">Mapping Type</Row>
                    <Autocomplete
                      {...defaultProps}
                      id="disable-close-on-select"
                      disableCloseOnSelect
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="ms-4 app-input-width"
                          required
                          // onChange={(e) => setCountry(e.target.value)}
                        />
                      )}
                    />
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-2 mt-4">Relation Type</Row>
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
                          // onChange={(e) => setCountry(e.target.value)}
                        />
                      )}
                    />
                  </Col>
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
                  <Col
                    xxl={3}
                    lg={3}
                    md={3}
                    xl={3}
                    sm={3}
                    className="cursorpointer"
                  >
                    {MenuConstants.download} Mapped Data
                  </Col>
                  <Col
                    xxl={3}
                    lg={3}
                    md={3}
                    xl={3}
                    sm={3}
                    className="cursorpointer"
                  >
                    {MenuConstants.download} Unmapped Data
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

export default BulkUploadMapping;
