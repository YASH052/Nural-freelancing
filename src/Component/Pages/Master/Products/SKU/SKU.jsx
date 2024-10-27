import {
  Row,
  Col,
  Button,
  Table,
   
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
 import TextField from "@mui/material/TextField";
 import Autocomplete from "@mui/material/Autocomplete";
 import { useNavigate } from "react-router-dom";


 let data = [];

 // Sample data for SKU records
const skuData = [
  {
    sNo: 1,
    category: "Electronics",
    subCategory: "Mobile",
    model: "iPhone 13",
    skuName: "Apple iPhone 13 - 128GB",
    actions: ["./action2.png", "./action1.png"],
  },
  {
    sNo: 2,
    category: "Electronics",
    subCategory: "Laptop",
    model: "MacBook Pro",
    skuName: "Apple MacBook Pro - M1",
    actions: ["./action2.png", "./action1.png"],
  },
  {
    sNo: 3,
    category: "Appliances",
    subCategory: "Washing Machine",
    model: "Samsung EcoBubble",
    skuName: "Samsung EcoBubble - 7kg",
    actions: ["./action2.png", "./action1.png"],
  },
];


const SKU = () => {
  const navigate = useNavigate();
   const handleSetting = () => {
     navigate("/setting"); // Navigate to the settings route
   };
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
  return (
    <>
      <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
        <span className="cursorpointer" onClick={handleSetting}>
          {MenuConstants.master}
        </span>{" "}
        {">"} {MenuConstants.SKU}
      </Col>
      <Row className="ms-2 mt-2">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format "
        >
          {MenuConstants.manage} {MenuConstants.SKU}
        </Col>
        <Row className="app-country-box ms-0">
          <Col xxl={3} xl={3} lg={3} md={3}>
            <Row className="ms-3 mt-3">{MenuConstants.brand}</Row>
            <Col className="ms3 mt-1">
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    className="mt-1 app-input-width"
                  />
                )}
              />
            </Col>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={3}>
            <Row className="ms-3 mt-3">{MenuConstants.category}</Row>
            <Col className="ms3 mt-1">
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    className="mt-1 app-input-width"
                  />
                )}
              />
            </Col>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={3}>
            <Row className="ms-3 mt-3">{MenuConstants.subCategory}</Row>
            <Col className="ms3 mt-1">
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    className="mt-1 app-input-width"
                  />
                )}
              />
            </Col>
          </Col>

          <Col xxl={3} xl={3} lg={3} md={3}>
            <Row className="ms-3 mt-3">{MenuConstants.model}</Row>
            <Col className="ms3 mt-1">
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    className="mt-1 app-input-width"
                  />
                )}
              />
            </Col>
          </Col>
          <Row>
            <Col xxl={3} xl={3} lg={3} md={3}>
              <Row className="ms-3 mt-3">
                {MenuConstants.SKU} {MenuConstants.name}
              </Row>
              <Col className="ms-3 mb-3">
                <TextField
                  id="standard-basic"
                  className="mt-1 app-input-width"
                  variant="standard"
                />
              </Col>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={3}>
              <Row className="ms-4 mt-3">
                {MenuConstants.SKU} {MenuConstants.code}
              </Row>
              <Col className="ms-4 mb-3">
                <TextField
                  id="standard-basic"
                  className="mt-1 app-input-width"
                  variant="standard"
                />
              </Col>
            </Col>
          </Row>
          <Row className="ms-1 mt-4 mb-4">
            <Col xxl={2} xl={2} lg={2} md={2}>
              <Button className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format ">
                {MenuConstants.create}
              </Button>
            </Col>
            <Col>
              <Button className="bordercolororange cursorpointer mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format ">
                {MenuConstants.cancel}
              </Button>
            </Col>
          </Row>
        </Row>
      </Row>
      <Row className="ms-0 mt-4">
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
          <Col>
            <Row className="ms-4 mt-3">{MenuConstants.brand}</Row>
            <Col className="ms3 mt-2">
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    className="mt-1 app-input-width"
                  />
                )}
              />
            </Col>
          </Col>

          <Col>
            <Row className="ms-3 mt-3">{MenuConstants.category}</Row>
            <Col className="ms3 mt-2">
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    className="mt-1 app-input-width"
                  />
                )}
              />
            </Col>
          </Col>
          <Col>
            <Row className="ms-3 mt-3">{MenuConstants.subCategory}</Row>
            <Col className="ms3 mt-2">
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    className="mt-1 app-input-width"
                  />
                )}
              />
            </Col>
          </Col>

          <Col>
            <Row className="ms-3 mt-3">{MenuConstants.model}</Row>
            <Col className="ms3 mt-2">
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    className="mt-1 app-input-width"
                  />
                )}
              />
            </Col>
          </Col>

          <Col className="cursorpointer  mt-5 me-3 bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite app-btns-format ">
            {MenuConstants.search}
          </Col>

          <Table className="mt-5">
            <thead className="backgroundcolor fontcolorwhite">
              <tr>
                <th className="backgroundcolor fontcolorwhite">S.No</th>
                <th className="backgroundcolor fontcolorwhite">
                  {MenuConstants.category}
                </th>
                <th className="backgroundcolor fontcolorwhite">
                  {MenuConstants.subCategory}
                </th>
                <th className="backgroundcolor fontcolorwhite">
                  {MenuConstants.model}
                </th>
                <th className="backgroundcolor fontcolorwhite">
                  {MenuConstants.SKU}
                </th>
                <th className="backgroundcolor fontcolorwhite">
                  {MenuConstants.action}
                </th>
              </tr>
            </thead>
            <tbody>
              {skuData.map((item, index) => (
                <tr key={index}>
                  <td>{item.sNo}</td>
                  <td>{item.category}</td>
                  <td>{item.subCategory}</td>
                  <td>{item.model}</td>
                  <td>{item.skuName}</td>
                  <td>
                    {item.actions.map((action, idx) => (
                      <img
                        key={idx}
                        src={action}
                        className="cursor-pointer"
                        alt="Action"
                        style={{
                          width: idx === 0 ? "15px" : "20px",
                          height: "15px",
                          marginRight: idx === 0 ? "5px" : "0px",
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
              <span
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              {MenuConstants.page}
              <span
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginLeft: "10px",
                }}
              >
                1
              </span>{" "}
              out of xx
              <span
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginLeft: "10px",
                }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </span>{" "}
              Last {MenuConstants.page}
            </Col>
          </Row>
        </Row>
      </Row>
    </>
  );
};

export default SKU;
