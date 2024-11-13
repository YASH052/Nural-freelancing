import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";

import {
  Row,
  Col,
  Button,
  Container,

  Table,
  Form,
} from "react-bootstrap";

// import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useState } from "react";

const ManageBulletinCategory = () => {
  // const navigate = useNavigate();
  // const handleSetting = () => {
  //   navigate("/setting"); // Navigate to the settings route
  // };

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
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
           
             Bulletin {">"} Manage Bulletin Category
          </Col>
          {/* </Col> */}
          <Row className="ms2 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite p-0 app-btns-format "
            >
              Create Bulletin Category
            </Col>
            <Form onSubmit={handleCreate} onReset={handleCancel}>
              <Row className="app-country-box">
                {/* Price List Name */}

                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-3 mt-4">Category Name</Row>
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
                      {MenuConstants.create}
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
                    <Row className="ms-3 mt-4">Category Name</Row>
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

                  <Col xxl={2} xl={2} lg={2} md={2} className="col-md-3 mt-4">
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col xxl={2} xl={2} lg={2} md={2} className="mt-4">
                    <Button
                      type="button"
                      onClick={handleShowAll}
                      className="bordercolororange cursorpointer mediumfont mt-3 backgroundcolorsecondary fontcolorwhite app-btns-format"
                    >
                      {MenuConstants.showall}
                    </Button>
                  </Col>
                </Row>
              </form>
              <Table className="mt-5 mb-5">
                <thead className="backgroundcolor mediumfont fontcolorwhite ">
                  <tr>
                    <th className="backgroundcolor fontcolorwhite">
                      Category Name
                    </th>
                    <th className="backgroundcolor fontcolorwhite">Status</th>
                    <th className="backgroundcolor fontcolorwhite">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>xxxx</td>
                    <td>xxxx</td>
                    <td>
                      <img
                        src="/action2.png"
                        className="cursor-pointer ms-2"
                        alt="Edit"
                        style={{ width: "15px", height: "15px" }}
                      />
                   
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
            </Row>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default ManageBulletinCategory;
