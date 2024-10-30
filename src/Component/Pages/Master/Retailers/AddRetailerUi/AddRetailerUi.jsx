import React from 'react'
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import { Row, Col, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Autocomplete, FormControl, Radio, TextField } from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const AddRetailerUi = () => {
    const navigate = useNavigate();
     const [selectedValue, setSelectedValue] = useState("b"); 
     const handleChange = (event) => {
        setSelectedValue(event.target.value);
        navigate("/addretailerexcel");
      };
   const handleSetting = () => {
         navigate("/setting"); // Navigate to the settings route
       };
    const handleCreate = (e) => {
          e.preventDefault();    
        };

    const handleCancel = () => {
        };

    const handleViewRetailer = () => {
      navigate("/viewretailer"); // Navigate to the settings route
    };
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

            <Row className="app-country-box mb-3 ms-0">
              {/* Price List Name */}
              <Col className="ms-4">
                <span>Select Mode</span>
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  color="success"
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                Excel{" "}
                <Radio
                  checked={selectedValue === "b"}
                  // onChange={handleChange}
                  value="b"
                  color="success"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                UI
              </Col>
              <Form onSubmit={handleCreate} onReset={handleCancel}>
                <Row className="ms-4 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>Retailer Type</Col>
                    <Autocomplete
                      id="disable-close-on-select"
                      disableCloseOnSelect
                      options={["Option 1", "Option 2", "Option 3"]} // replace with relevant options
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="app-input-width"
                        />
                      )}
                    />
                  </FormControl>
                  <FormControl className="app-input-width">
                    <Col className="">Parent Sales Channel</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        size="xl"
                        className="mt-2 cursorpointer"
                        style={{
                          color: "#ed713e",
                          position: "absolute",
                          end: 0,
                          marginInlineStart: 90,
                        }}
                      />
                    </Row>
                  </FormControl>
                </Row>
                <Row className="ms-4 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>Is Child</Col>
                    <Autocomplete
                      id="disable-close-on-select"
                      disableCloseOnSelect
                      options={["Option 1", "Option 2", "Option 3"]} // replace with relevant options
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="app-input-width"
                        />
                      )}
                    />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Parent Retailer</Col>
                    <Autocomplete
                      id="disable-close-on-select"
                      disableCloseOnSelect
                      options={["Option 1", "Option 2", "Option 3"]} // replace with relevant options
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="app-input-width"
                        />
                      )}
                    />
                  </FormControl>
                </Row>
                <Row className="ms-4 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>Retailer Name</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Contact Person</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Retailer Code</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-4 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>Login Id</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Password</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-4 mt-3">
                  <FormControl className="app-input-width">
                    <Col className="ms-2">Country</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        size="xl"
                        className="mt-2 cursorpointer"
                        style={{
                          color: "#ed713e",
                          position: "absolute",
                          end: 0,
                          marginInlineStart: 90,
                        }}
                      />
                    </Row>
                  </FormControl>
                  <FormControl className="ms-5 app-input-width">
                    <Col className="">State</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        size="xl"
                        className="mt-2 cursorpointer"
                        style={{
                          color: "#ed713e",
                          position: "absolute",
                          end: 0,
                          marginInlineStart: 90,
                        }}
                      />
                    </Row>
                  </FormControl>
                  <FormControl className="ms-5 app-input-width">
                    <Col className="ms-2">City</Col>
                    <Row className="d-flex align-items-center position-relative">
                      <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            className=""
                            required
                          />
                        )}
                      />
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        size="xl"
                        className="mt-2 cursorpointer"
                        style={{
                          color: "#ed713e",
                          position: "absolute",
                          end: 0,
                          marginInlineStart: 90,
                        }}
                      />
                    </Row>
                  </FormControl>
                </Row>
                <Row className="ms-4 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>Address Line 1</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>

                  <FormControl className=" app-input-width me-5">
                    <Col>Address Line 2</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-4 mt-3">
                  <FormControl className=" app-input-width me-5">
                    <Col>Pincode</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Mobile Number</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>Mobile Number 2</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-4 mt-3 ">
                  <FormControl className=" app-input-width me-5">
                    <Col>Email Id</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>PAN no</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                  <FormControl className=" app-input-width me-5">
                    <Col>GST No</Col>

                    <TextField variant="standard" className="app-input-width" />
                  </FormControl>
                </Row>
                <Row className="ms-3 mb-3">
                  <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.create}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-5 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Row>
        </Row>
      </Row>
    </Container>
  );
}

export default AddRetailerUi
