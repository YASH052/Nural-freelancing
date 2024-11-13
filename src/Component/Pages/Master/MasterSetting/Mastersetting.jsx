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
   const handlePriceList = () => {
     navigate("/pricelist");
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
   const handleSKUClick = () => {
     navigate("/sku");
   };
  const handleModelClick = () => {
    navigate("/model");
  };
  const handleRetailerClick = () => {
    navigate("/addretailerexcel");
  };
   const handleSalesClick = () => {
     navigate("/addsalesexcel");
   };
    
   const handleManageIspExcel = () => {
     navigate("/manageispexcel");
   };
    const handleBulkUploadMapping = () => {
      navigate("/bulkuploadmapping");
    };
  const handleManageUser= () => {
    navigate("/manageuser");
  };
   const handleLeaveTypes = () => {
     navigate("/leavetypes");
   };
  

    const handleAttendanceRegularization = () => {
      navigate("/attendanceregularization");
    };
const handleBalanceLeaveUpdate = () => {
  navigate("/balanceleaveexcel");
};

  return (
    <Col className="p-0">
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
          className="cursorpointer mt-2 app-mastersetting-btns  backgroundcolor fontcolorwhite cursorpointer  me-4 app-btns-format "
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
          className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-btns-format "
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
          className="cursorpointer mt-2 app-mastersetting-btns  backgroundcolor fontcolorwhite cursorpointer  me-4 app-btns-format "
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
          className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-btns-format "
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
          className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  app-btns-format "
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
          className=" cursorpointer backgroundcolor app-mastersetting-btns fontcolorwhite  app-btns-format "
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
          className="cursorpointer mt-2 app-mastersetting-btns  backgroundcolor fontcolorwhite cursorpointer  me-4 app-btns-format "
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
          className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-btns-format "
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
          className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-btns-format "
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
          className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-btns-format "
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
          className=" cursorpointer mt-2 app-mastersetting-btns backgroundcolor fontcolorwhite cursorpointer  me-4 app-btns-format "
          onClick={handleSKUClick}
        >
          {MenuConstants.SKU}
        </Col>
        <Col
          xxl={2}
          lg={2}
          xl={2}
          md={2}
          sm={2}
          className=" backgroundcolor mt-2 app-mastersetting-btns cursorpointer fontcolorwhite  app-btns-format "
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
          className=" backgroundcolor fontcolorwhite cursorpointer app-mastersetting-btns  me-4 app-btns-format "
          onClick={handleRetailerClick}
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
          className=" backgroundcolor fontcolorwhite cursorpointer mt-2 app-mastersetting-btns me-4 app-btns-format "
          onClick={handleSalesClick}
        >
          {MenuConstants.manageSalesChannel}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className=" backgroundcolor app-mastersetting-btns fontcolorwhite  cursorpointer me-4 mt-2 app-btns-format "
        >
          {MenuConstants.spare}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className=" backgroundcolor fontcolorwhite cursorpointer app-mastersetting-btns  me-4 mt-2 app-btns-format "
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
          className="backgroundcolor fontcolorwhite cursorpointer me-4 mt-2 app-mastersetting-btns app-btns-format "
          onClick={handleManageUser}
        >
          {MenuConstants.userMaster}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-btns-format "
          onClick={handleBulkUploadMapping}
        >
          {MenuConstants.bulkUploadMapping}
        </Col>
      </Row>

      <Row className="ms-4 fontcolorblackbold mt-2">{MenuConstants.price}</Row>
      <Row className="ms-4">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-btns-format "
          onClick={handlePrice}
        >
          {MenuConstants.price}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-btns-format "
        >
          {MenuConstants.priceGroup}
        </Col>
        <Col
          onClick={handlePriceList}
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-btns-format "
        >
          {MenuConstants.pricelist}
        </Col>
      </Row>

      <Row className="ms-4 fontcolorblackbold mt-4">
        {MenuConstants.attendance} Master
      </Row>
      <Row className="ms-4">
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-btns-format "
          onClick={handleLeaveTypes}
        >
          {MenuConstants.manageLeaveTypes}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-btns-format "
          onClick={handleAttendanceRegularization}
        >
          {MenuConstants.attendance} Regularization
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-btns-format "
          onClick={handleBalanceLeaveUpdate}
        >
          {MenuConstants.balance} Leave Update
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
          className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-btns-format "
          onClick={handleManageIspExcel}
        >
          {MenuConstants.manageISP}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 app-mastersetting-btns app-btns-format "
        >
          {MenuConstants.preBookingSKU}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          className=" backgroundcolor fontcolorwhite cursorpointer cursorpointer me-4 mt-2 app-mastersetting-btns app-btns-format "
        >
          {MenuConstants.rankingWeightage}
        </Col>
      </Row>
    </Col>
  );
};

export default Mastersetting
