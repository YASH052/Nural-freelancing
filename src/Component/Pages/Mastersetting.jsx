import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import SideMenu from "../SideMenu/SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import '../../App.css'
import "../../Color.css";
import "../../Fonts.css";
// import { MenuConstants } from "../Constant/MenuConstants";
import {MenuConstants} from '../CommonFiles/MenuConstants.jsx'

import {
  faLightbulb,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

// import Footer from "../Footer/Footer";
const Mastersetting = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

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
   
        <Row  className="">
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
              className="cursorpointer mt-2 p-4  backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
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
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
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
              className="cursorpointer mt-2 p-4  backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
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
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
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
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  app-LandingPage-locations"
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
              className=" cursorpointer backgroundcolor p-4 fontcolorwhite  app-LandingPage-locations"
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
              className="cursorpointer mt-2 p-4  backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
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
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
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
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
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
              className=" cursorpointer mt-2 p-4 backgroundcolor fontcolorwhite cursorpointer  me-4 app-LandingPage-locations"
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
              className=" backgroundcolor mt-2 p-4 cursorpointer fontcolorwhite  app-LandingPage-locations"
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
              className=" backgroundcolor fontcolorwhite cursorpointer p-4  me-4 app-LandingPage-locations"
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
              className=" backgroundcolor fontcolorwhite cursorpointer mt-2 p-4 me-4 app-LandingPage-locations"
            >
              {MenuConstants.manageSalesChannel}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor p-4 fontcolorwhite  cursorpointer me-4 mt-2 app-LandingPage-locations"
            >
              {MenuConstants.spare}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer p-4  me-4 mt-2 app-LandingPage-locations"
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
              className="backgroundcolor fontcolorwhite cursorpointer me-4 mt-2 p-4 app-LandingPage-locations"
            >
              {MenuConstants.userMaster}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
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
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
              onClick={handlePrice}
            >
              {MenuConstants.price}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
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
              className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              {MenuConstants.manageLeaveTypes}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
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
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              {MenuConstants.manageISP}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="backgroundcolor fontcolorwhite cursorpointer  me-4 mt-2 p-4 app-LandingPage-locations"
            >
              {MenuConstants.preBookingSKU}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className=" backgroundcolor fontcolorwhite cursorpointer cursorpointer me-4 mt-2 p-4 app-LandingPage-locations"
            >
              {MenuConstants.rankingWeightage}
            </Col>
          </Row>
        </Row>
  );
};

export default Mastersetting
