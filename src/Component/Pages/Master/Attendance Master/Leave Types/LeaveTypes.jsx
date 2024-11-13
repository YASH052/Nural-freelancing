import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Button,
  Container,
  FormControl,
  InputGroup,
  Table,
  Form,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const LeaveTypes = () => {
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic for search functionality goes here
  };

  const handleShowAll = () => {
    // Logic for showing all results goes here
  };
  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };

  const [leavesTypes, setLeavesTypes] = useState("");
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCreate = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!leavesTypes) {
      validationErrors.leavesTypes = "leavetypes Name is required.";
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    // Proceed with create logic
    console.log("Creating entry with:", { leavesTypes, status });
  };

  const handleCancel = () => {
    setLeavesTypes("");
    setStatus(false);
    setErrors({});
  };

  
  return (
    <Container fluid>
      <Row className="mb-4">
        <></>

        <Row>
          {/* <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   "> */}
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom app-LandingPage-setting">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>
            {" > "}
            {MenuConstants.attendance} Master {">"} Manage Leave Types
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
              Leave Type Master
            </Col>
            <Form onSubmit={handleCreate} onReset={handleCancel}>
              <Row className="app-country-box">
                {/* Price List Name */}
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-3 mt-4">Leave Type Name</Row>
                  <Col className="ms-3 mb-3">
                    <TextField
                      id="price-list-name"
                      className="mt-1 app-input-width"
                      variant="standard"
                      value={leavesTypes}
                      onChange={(e) => {
                        setLeavesTypes(e.target.value);
                        setErrors((prev) => ({ ...prev, leavesTypes: "" }));
                      }}
                      error={!!errors.leavesTypes}
                      helperText={errors.leavesTypes}
                    />
                  </Col>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-3 mt-4">Leave Type Code</Row>
                  <Col className="ms-3 mb-3">
                    <TextField
                      id="price-list-name"
                      className="mt-1 app-input-width"
                      variant="standard"
                      value={leavesTypes}
                      onChange={(e) => {
                        setLeavesTypes(e.target.value);
                        setErrors((prev) => ({ ...prev, leavesTypes: "" }));
                      }}
                      error={!!errors.leavesTypes}
                      helperText={errors.leavesTypes}
                    />
                  </Col>
                </Col>

                {/* Status Toggle */}
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-2 mt-4">Status</Row>
                  <Col className="ms-2 mt-2 form-check form-switch">
                    <input
                      className="form-check-input cursorpointer"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={status}
                      onChange={(e) => setStatus(e.target.checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    ></label>
                  </Col>
                </Col>

                {/* Buttons */}
                <Row className="mb-3 ms-0">
                  <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.create} Leave
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </Row>
          <Row className="ms-2 mt-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite ms-0 me-4 app-btns-format "
            >
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              <form onSubmit={handleSearch}>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-3 mt-4">Leave Type Name</Row>
                    <Col className="ms-3 mb-3">
                      <TextField
                        id="price-list-name"
                        className="mt-1 app-input-width"
                        variant="standard"
                        value={leavesTypes}
                        onChange={(e) => {
                          setLeavesTypes(e.target.value);
                          setErrors((prev) => ({ ...prev, leavesTypes: "" }));
                        }}
                        error={!!errors.leavesTypes}
                        helperText={errors.leavesTypes}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-3 mt-4">Leave Type Code</Row>
                    <Col className="ms-3 mb-3">
                      <TextField
                        id="price-list-name"
                        className="mt-1 app-input-width"
                        variant="standard"
                        value={leavesTypes}
                        onChange={(e) => {
                          setLeavesTypes(e.target.value);
                          setErrors((prev) => ({ ...prev, leavesTypes: "" }));
                        }}
                        error={!!errors.leavesTypes}
                        helperText={errors.leavesTypes}
                      />
                    </Col>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4 mt-4">Status</Row>
                    <Col className="ms-3 mb-3">
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
                          />
                        )}
                      />
                    </Col>
                  </Col>
                  <Row className="ms-0">
                    <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3">
                      <Button
                        type="submit"
                        className="cursorpointer bordercolororange mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                      >
                        {MenuConstants.search}
                      </Button>
                    </Col>
                    <Col xxl={2} xl={2} lg={2} md={2}>
                      <Button
                        type="button"
                        onClick={handleShowAll}
                        className="bordercolororange cursorpointer mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                      >
                        {MenuConstants.showall}
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </form>
              <Col>
                <img
                  className="position-absolute end-0 me-3 cursorpointer"
                  src="/xls.jpg"
                  alt=""
                />
              </Col>
              <Table className="mt-5">
                <thead className="backgroundcolor mediumfont fontcolorwhite ">
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">S.No</th>
                    <th className="backgroundcolor fontcolorwhite">
                      Leave Type Name
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      Leave Type Code
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Status</th>
                    <th className="backgroundcolor fontcolorwhite">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>
                      <img
                        src="/action2.png"
                        className="cursor-pointer ms-2"
                        alt="Edit"
                        style={{ width: "15px", height: "15px" }}
                      />
                    </td>
                    <td>
                      <img
                        src="/action1.png"
                        className="cursor-pointer ms-2"
                        alt="Edit"
                        style={{ width: "15px", height: "15px" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Row className="mt5 app-pageformat mb3">
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

export default LeaveTypes;
