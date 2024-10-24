import { Row, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../CommonFiles/constant/MenuConstants"
const Mastersetting = () => {


  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleCountryClick = () => {
    navigate("/country"); // Redirect to the /country route on click
  };
  const handlePrice = () => {
    navigate("/uploadprice"); // Redirect to the /country route on click
  };
  const handleStateClick = () => {
    navigate("/state"); // Redirect to the /country route on click
  };
  const handleRegionClick = () => {
    navigate("/region");
  };
  const handleCityClick = () => {
    navigate("/city"); // Redirect to the /country route on click
  };
  const handleAreaClick = () => {
    navigate("/area");
  };
  const handleBrandClick = () => {
    navigate("/brand");
  };
  const handleCategoryClick = () => {
    navigate("/category"); // Redirect to the /country route on click
  };
  const handleSubCategoryClick = () => {
    navigate("/subcategory");
  };
  const handleModelClick = () => {
    navigate("/model");
  };
  return (
   
        <Col  className="p-0">
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom">
            {MenuConstants.masterSetting}
          </Col>
          <Row className="ms-4 mt-2 fontcolorblackbold">
            {MenuConstants.location}
          </Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className="cursorpointer mt-2 app-mastersetting-btns  backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleCountryClick}
            >
              {MenuConstants.country}
            </Col>
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleRegionClick}
            >
              {MenuConstants.region}
            </Col>
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className="cursorpointer mt-2 app-mastersetting-btns  backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleStateClick}
            >
              {MenuConstants.state}
            </Col>
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleCityClick}
            >
              {MenuConstants.city}
            </Col>
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  app-LandingPage-locations"
              onClick={handleAreaClick}
            >
              {MenuConstants.area}
            </Col>
          </Row>
          <Row className="mt-2 ms-4">
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className=" cursorpointer backgroundcolor app-mastersetting-btns fontcolorwhite  app-LandingPage-locations"
            >
              {MenuConstants.bulkUpload}
            </Col>
          </Row>
          <Row className="ms-4 mt-4 fontcolorblackbold">
            {MenuConstants.product}
          </Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className="cursorpointer mt-2 app-mastersetting-btns  backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleBrandClick}
            >
              {MenuConstants.brand}
            </Col>
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleCategoryClick}
            >
              {MenuConstants.category}
            </Col>
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleSubCategoryClick}
            >
              {MenuConstants.subCategoryclassification}
            </Col>
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
              onClick={handleModelClick}
            >
              {MenuConstants.model}
            </Col>
            <Col
              xxl={2}
              lg={2}
              xl={2}
              md={2}
              sm={2}
              className=" backgroundcolor mt-2 app-mastersetting-btns cursorpointer fontcolorwhite  app-LandingPage-locations"
            >
              {MenuConstants.bulkUpload}
            </Col>
          </Row>

          <Row className="ms-4 mt-4 fontcolorblackbold">
            {MenuConstants.retailer}
          </Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer app-mastersetting-btns  me-4 app-LandingPage-locations"
            >
              {MenuConstants.manage} {MenuConstants.retailer}
            </Col>
          </Row>

          <Row className="ms-4 mt-4 fontcolorblackbold">
            {MenuConstants.salesChannel}
          </Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer mt-2 app-mastersetting-btns me-4 app-LandingPage-locations"
            >
              {MenuConstants.manageSalesChannel}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor app-mastersetting-btns fontcolorwhite  cursorpointer me-4 mt-2 app-LandingPage-locations"
            >
              {MenuConstants.spare}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer app-mastersetting-btns  me-4 mt-2 app-LandingPage-locations"
            >
              {MenuConstants.warrantyVoidReason}
            </Col>
          </Row>

          <Row className="ms-4 fontcolorblackbold mt-4">
            {MenuConstants.userMaster}
          </Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer me-4 mt-2 app-mastersetting-btns app-LandingPage-locations"
            >
              {MenuConstants.userMaster}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-LandingPage-locations"
            >
              {MenuConstants.bulkUploadMapping}
            </Col>
          </Row>

          <Row className="ms-4 fontcolorblackbold mt-2">
            {MenuConstants.price}
          </Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-LandingPage-locations"
              onClick={handlePrice}
            >
              {MenuConstants.price}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-LandingPage-locations"
            >
              {MenuConstants.priceGroup}
            </Col>
          </Row>

          <Row className="ms-4 fontcolorblackbold mt-4">Leave Master</Row>
          <Row className="ms-4">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-LandingPage-locations"
            >
              {MenuConstants.manageLeaveTypes}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-LandingPage-locations"
            >
              {MenuConstants.leaveAllocation}
            </Col>
          </Row>
          <Row className="ms-4 fontcolorblackbold mt-4">
            {MenuConstants.ISPmaster}
          </Row>
          <Row className="ms-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-LandingPage-locations"
            >
              {MenuConstants.manageISP}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-LandingPage-locations"
            >
              {MenuConstants.preBookingSKU}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer cursorpointer me-4 mt-2 app-mastersetting-btns app-LandingPage-locations"
            >
              {MenuConstants.rankingWeightage}
            </Col>
          </Row>
        </Col>
  );
};

export default Mastersetting
