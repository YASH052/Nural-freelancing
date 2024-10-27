
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,

} from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Col,
  Button,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  Table,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
 import TextField from "@mui/material/TextField";
 import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
 let data = [];

 
const ViewPrice = () => {

  const [priceList, setPriceList] = useState("");
  const [sku, setSku] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [errors, setErrors] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!priceList) validationErrors.priceList = "Please select a price list.";
    if (!sku) validationErrors.sku = "Please select a SKU.";
    if (!fromDate) validationErrors.fromDate = "Please select a start date.";
    if (!toDate) validationErrors.toDate = "Please select an end date.";

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    // Proceed with search logic
    console.log("Searching with:", { priceList, sku, fromDate, toDate });
  };

  const handleShowAll = () => {
    setPriceList("");
    setSku("");
    setFromDate("");
    setToDate("");
    setErrors({});
  };

  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  const handleuploadprice = () => {
    navigate("/uploadprice"); // Navigate to the settings route
  };
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };

  const priceData = [
    {
      listName: "Standard Price List",
      sku: "SKU001",
      whPrice: "100",
      sdPrice: "110",
      mdPrice: "120",
      retailPrice: "130",
      mop: "140",
      mrp: "150",
      effectiveDate: "2024-01-01",
      validTill: "2024-12-31",
    },
    {
      listName: "Premium Price List",
      sku: "SKU002",
      whPrice: "200",
      sdPrice: "210",
      mdPrice: "220",
      retailPrice: "230",
      mop: "240",
      mrp: "250",
      effectiveDate: "2024-06-01",
      validTill: "2025-06-01",
    },
  
  ];
  return (
    <Container fluid>
      <Row className="mb-4">
        <Row>
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.price}
          </Col>
          <Row className="ms-4 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.view} {MenuConstants.price}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  position-absolute end-0  me-3 bordercolororange mediumfontbold app-btns-format "
              onClick={handleuploadprice}
            >
              {MenuConstants.upload} {MenuConstants.price}
            </Col>
            <Form onSubmit={handleSearch} onReset={handleShowAll}>
              <Row className="app-country-box">
                {/* Price List */}
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 mt-3">{MenuConstants.price} List</Row>
                  <Col className="ms3 mt-1 mb-4">
                    <Autocomplete
                      id="price-list"
                      options={["Option 1", "Option 2", "Option 3"]} // replace with actual price list options
                      value={priceList}
                      onChange={(event, newValue) => {
                        setPriceList(newValue);
                        setErrors((prev) => ({ ...prev, priceList: "" }));
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="mt-1 app-input-width"
                          error={!!errors.priceList}
                          helperText={errors.priceList}
                        />
                      )}
                    />
                  </Col>
                </Col>

                {/* SKU */}
                <Col xxl={3} xl={3} lg={3} md={3}>
                  <Row className="ms-4 mt-3">{MenuConstants.SKU}</Row>
                  <Col className="ms3 mt-1 mb-4">
                    <Autocomplete
                      id="sku-list"
                      options={["SKU1", "SKU2", "SKU3"]} // replace with actual SKU options
                      value={sku}
                      onChange={(event, newValue) => {
                        setSku(newValue);
                        setErrors((prev) => ({ ...prev, sku: "" }));
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="mt-1 app-input-width"
                          error={!!errors.sku}
                          helperText={errors.sku}
                        />
                      )}
                    />
                  </Col>
                </Col>

                {/* Date Range */}
                <Row>
                  <Col className="ms-4" xxl={3} xl={3} lg={3} md={3}>
                    <Form.Label>From Date</Form.Label>
                    <Col>
                      <Form.Control
                        type="date"
                        value={fromDate}
                        onChange={(e) => {
                          setFromDate(e.target.value);
                          setErrors((prev) => ({ ...prev, fromDate: "" }));
                        }}
                        className="date-input app-border-radius-none  app-input-width"
                        isInvalid={!!errors.fromDate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.fromDate}
                      </Form.Control.Feedback>
                    </Col>
                  </Col>

                  <Col className="ms-4" xxl={3} xl={3} lg={3} md={3}>
                    <Form.Label>To Date</Form.Label>
                    <Col>
                      <Form.Control
                        type="date"
                        value={toDate}
                        onChange={(e) => {
                          setToDate(e.target.value);
                          setErrors((prev) => ({ ...prev, toDate: "" }));
                        }}
                        className="date-input app-border-radius-none  app-input-width"
                        isInvalid={!!errors.toDate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.toDate}
                      </Form.Control.Feedback>
                    </Col>
                  </Col>
                </Row>

                {/* Buttons */}
                <Row className="ms-2 mb-4 mt-3">
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.search}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="reset"
                      className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      {MenuConstants.showall}
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </Row>
          <Row className="ms-4 mt-4 mb-5">
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
              <Table className="mt-4">
                <thead className=" smallfontsemibold">
                  <tr>
                    <th className="font colorwhite backgroundcolor">
                      Price List Name
                    </th>
                    <th className="font colorwhite backgroundcolor">SKU</th>
                    <th className="font colorwhite backgroundcolor">
                      WH Price
                    </th>
                    <th className="font colorwhite backgroundcolor">
                      SD Price
                    </th>
                    <th className="font colorwhite backgroundcolor">
                      MD Price
                    </th>
                    <th className="font colorwhite backgroundcolor">
                      Retail Price
                    </th>
                    <th className="font colorwhite backgroundcolor">MOP</th>
                    <th className="font colorwhite backgroundcolor">MRP</th>
                    <th className="font colorwhite backgroundcolor">
                      Effective Date
                    </th>
                    <th className="font colorwhite backgroundcolor">
                      Valid Till
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.listName}</td>
                      <td>{item.sku}</td>
                      <td>{item.whPrice}</td>
                      <td>{item.sdPrice}</td>
                      <td>{item.mdPrice}</td>
                      <td>{item.retailPrice}</td>
                      <td>{item.mop}</td>
                      <td>{item.mrp}</td>
                      <td>{item.effectiveDate}</td>
                      <td>{item.validTill}</td>
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

export default ViewPrice;
