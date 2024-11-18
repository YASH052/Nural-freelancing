import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faChevronDown,
  faChevronUp,
  faArrowRightLong,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { MenuConstants } from "../constant/MenuConstants";
// import "../App.css";

const SideMenu = () => {
  const navigate = useNavigate();
  const [transactionOpen, setTransactionOpen] = useState(false);
  const [transactionReturnOpen, setTransactionReturnOpen] = useState(false);
  const [merchandizingOpen, setMerchandizingOpen] = useState(false);
  const [competitionOpen, setCompetitionOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [bulletinOpen, setBulletinOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  const shouldTargethighlight = ["/createtarget", "/viewtarget"].includes(
    location.pathname
  );
  const shouldSurveyhighlight = [
    "/createsurveylink",
    "/createsurveycustomer",
    "/viewsurvey"
  ].includes(location.pathname);

  const shouldISPIncentiveHighlight = ["/createisp", "/ispincentive"].includes(
    location.pathname
  );
 const handleTarget = () => {
   navigate("/createtarget"); // Navigate to the settings route
 };
  const handleSurvey = () => {
    navigate("/createsurveylink"); // Navigate to the settings route
  };
 const handleispincentive = () => {
   navigate("/createisp"); // Navigate to the settings route
 };

  const shouldManageBulletinHighlight = [
    "/createbulletin",
    "/viewbulletin",
  ].includes(location.pathname);
  const shouldManageBulletinCategoryHighlight = [
     "/managebulletincategory",
   ].includes(location.pathname);
  const handleBulletinClick = () => {
    setBulletinOpen(!bulletinOpen);
  };
  const handleManageBulletinClick = () => {
    navigate("/createbulletin");
  };
  const handleManageBulletinCategoryClick = () => {
    navigate("/managebulletincategory");
  };
  const activeStyle = "backgroundcolor p-1 fontcolorwhite"; // Add or modify styles as needed
const shouldManageAssesmentHighlight = [
  "/manageassesment",
  "/viewassesment",
].includes(location.pathname);
const shouldLDContentHighlight = [
  "/viewl&dcontent",
  "/managel&dcontent",
].includes(location.pathname);
const shouldLDCategoryHighlight = [
  "/managel&dcategory",
].includes(location.pathname);

  const handleManageAssessmentClick = () => {
    navigate("/manageassesment");
  };
  const handleLDCategoryClick = () => {
    navigate("/managel&dcategory");
  };
  const handleLDContentClick = () => {
    navigate("/managel&dcontent");
  };
  return (
    <Col
      className={`app-sidemenu-col sidemenuborder col-md-3 col-sm-3 col-lg-2 sidemenubg ${
        showMenu ? "sidemenuwidth  " : "sidemenubg col-lg-2"
      }`}
    >
      <Col
        className={`align-items-center d-flex mediumfontbold  fontcolorwhite app-sidemenu-mainmenu ${
          showMenu ? "sidemenuwidth backgroundcolor " : "backgroundcolor"
        }`}
      >
        <Col className="ms-2 ">
          {" "}
          <FontAwesomeIcon
            className="cursorpointer"
            onClick={toggleMenu}
            icon={faBars}
          />
          {!showMenu && " Main Menu"}
        </Col>
      </Col>
      {!showMenu && (
        <>
          <Col className="mt-3 mediumfont ms-2">
            <img
              src="./Dashboard.png"
              className="me-2"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
            {MenuConstants.dashboard}
          </Col>
          <Col
            className="mt-3 cursorpointer mediumfont ms-2 position-relative"
            onClick={() => setTransactionOpen(!transactionOpen)}
          >
            <img
              src="./Transaction.png"
              className="me-2"
              alt="Transaction"
              style={{ width: "20px", height: "20px" }}
            />
            {MenuConstants.transaction}
            <FontAwesomeIcon
              className="position-absolute end-0 me-2"
              icon={transactionOpen ? faChevronUp : faChevronDown}
            />
          </Col>
          {transactionOpen && (
            <Col className="ms-2 mt-2">
              <Col className="mediumfont cursorpointer">
                <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                {MenuConstants.uploadPrimarySales}
              </Col>
              <Col className="cursorpointer mediumfont mt-2">
                <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                {MenuConstants.uploadSecondary}
              </Col>
              <Col className="cursorpointer mediumfont mt-2">
                <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                {MenuConstants.uploadStockAdjustment}
              </Col>
            </Col>
          )}
          {shouldTargethighlight ? (
            <Col
              className={`align-items-center d-flex cursorpointer mediumfontbold mt-3 fontcolorwhite app-sidemenu-mainmenu ${
                shouldTargethighlight ? "backgroundcolor" : "sidemenuwidth"
              }`}
            >
              <Col className="ms-2">
                <img
                  className="me-2 fontcolorwhite"
                  src="./Targetw.png"
                  alt=""
                  // style={{ width: "20px", height: "20px" }}
                />
                {MenuConstants.target}
              </Col>
            </Col>
          ) : (
            <Col
              className="mt-3 mediumfont ms-2 cursorpointer"
              onClick={handleTarget}
            >
              <img
                className="me-2"
                src="./Target.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              {MenuConstants.target}
            </Col>
          )}

          <Col
            className="mt-3 cursorpointer mediumfont ms-2 position-relative"
            onClick={() => setTransactionReturnOpen(!transactionReturnOpen)}
          >
            <img
              src="./Transaction Return.png"
              className="me-2"
              alt="Transaction return"
              style={{ width: "20px", height: "20px" }}
            />
            {MenuConstants.transactionReturn}
            <FontAwesomeIcon
              className="position-absolute end-0 me-2"
              icon={transactionReturnOpen ? faChevronUp : faChevronDown}
            />
          </Col>
          {transactionReturnOpen && (
            <Col className="ms-2 mt-2">
              <Col className="cursorpointer mediumfont">
                <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                {MenuConstants.uploadPrimarySales} Return
              </Col>
              <Col className="cursorpointer mediumfont">
                <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                {MenuConstants.upload} Sec Sales Return
              </Col>
            </Col>
          )}
          {shouldISPIncentiveHighlight ? (
            <Col
              className={`align-items-center d-flex cursorpointer mediumfontbold mt-3 fontcolorwhite app-sidemenu-mainmenu backgroundcolor`}
            >
              <Col className="ms-2">
                <img
                  className="me-2 fontcolorwhite "
                  src="./incentivew.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                {MenuConstants.ispIncentive}
              </Col>
            </Col>
          ) : (
            <Col
              className="mt-3 mediumfont cursorpointer ms-2"
              onClick={handleispincentive}
            >
              <img
                src="./incentive.png"
                className="me-2"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              {MenuConstants.ispIncentive}
            </Col>
          )}
          <Col
            className="mt-3 cursorpointer mediumfont ms-2 position-relative"
            onClick={() => setMerchandizingOpen(!merchandizingOpen)}
          >
            <img
              src="./merchandizing.png"
              className="me-2"
              alt="Merchandizing"
              style={{ width: "20px", height: "20px" }}
            />
            {MenuConstants.merchandizing}
            <FontAwesomeIcon
              className="position-absolute end-0 me-2"
              icon={merchandizingOpen ? faChevronUp : faChevronDown}
            />
          </Col>
          {merchandizingOpen && (
            <Col className="ms-3 mt-2">
              <Col className="cursorpointer mediumfont">
                <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                {MenuConstants.taskCategoryMaster}
              </Col>
              <Col className="cursorpointer mediumfont mt-2">
                <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                {MenuConstants.manageTask}
              </Col>
              <Col className="cursorpointer mediumfont mt-2">
                <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                {MenuConstants.updateTask}
              </Col>
            </Col>
          )}
          <Col
            className="mt-3 cursorpointer mediumfont ms-2 position-relative"
            onClick={() => setCompetitionOpen(!competitionOpen)}
          >
            <img
              className="me-2"
              src="./competition.png"
              alt="Competetion"
              style={{ width: "20px", height: "20px" }}
            />
            {MenuConstants.competition}
            <FontAwesomeIcon
              className="position-absolute end-0 me-2"
              icon={competitionOpen ? faChevronUp : faChevronDown}
            />
          </Col>
          {competitionOpen && (
            <Col className="ms-4 mt-2">
              <Col className="cursorpointer mediumfont">
                {MenuConstants.submenucompetetion2}
              </Col>
              <Col className="cursorpointer mediumfont">
                {MenuConstants.submenucompetetion1}
              </Col>
            </Col>
          )}
          <Col
            className="mt-3 cursorpointer mediumfont ms-2 position-relative"
            onClick={() => setLearningOpen(!learningOpen)}
          >
            <img
              className="me-2"
              src="./learning.png"
              alt="Learning & Development"
              style={{ width: "20px", height: "20px" }}
            />
            {MenuConstants.learningAndDevelopment}
            <FontAwesomeIcon
              className="position-absolute end-0 me-2"
              icon={learningOpen ? faChevronUp : faChevronDown}
            />
          </Col>
          {learningOpen && (
            <>
              <Col
                className={` mt-2 cursorpointer mediumfont ${
                  shouldLDCategoryHighlight ? activeStyle : "ms-1"
                }`}
                onClick={handleLDCategoryClick}
              >
                <FontAwesomeIcon className="ms-2" icon={faArrowRightLong} />{" "}
                {MenuConstants.manageCategory}
              </Col>

              <Col
                className={`mt-2 cursorpointer mediumfont ${
                  shouldLDContentHighlight ? activeStyle : "ms-1"
                }`}
                onClick={handleLDContentClick}
              >
                <FontAwesomeIcon className="ms-2" icon={faArrowRightLong} />{" "}
                {MenuConstants.manageContent}
              </Col>

              <Col
                className={`mt-2 cursorpointer mediumfont ${
                  shouldManageAssesmentHighlight ? activeStyle : "ms-1"
                }`}
                onClick={handleManageAssessmentClick}
              >
                <FontAwesomeIcon className="ms-2" icon={faArrowRightLong} />{" "}
                {MenuConstants.manageAssessment}
              </Col>
            </>
          )}
          {shouldSurveyhighlight ? (
            <Col
              className={`align-items-center d-flex cursorpointer mediumfontbold mt-3 fontcolorwhite app-sidemenu-mainmenu ${
                shouldSurveyhighlight ? "backgroundcolor" : "sidemenuwidth"
              }`}
            >
              <Col className="ms-2">
                <img
                  className="me-2 fontcolorwhite"
                  src="./surveyw.png"
                  alt=""
                  // style={{ width: "20px", height: "20px" }}
                />
                {MenuConstants.survey}
              </Col>
            </Col>
          ) : (
            <Col
              className="mt-3 mediumfont ms-2 cursorpointer"
              onClick={handleSurvey}
            >
              <img
                className="me-2"
                src="./survey.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              {MenuConstants.survey}
            </Col>
          )}
          <Col
            className="mt-3 cursorpointer mediumfont ms-2 position-relative"
            onClick={handleBulletinClick}
          >
            <img
              className="me-2"
              src="./bulletin.png"
              alt="Bulletin"
              style={{ width: "20px", height: "20px" }}
            />
            {MenuConstants.bulletin}
            <FontAwesomeIcon
              className="position-absolute end-0 me-2"
              icon={bulletinOpen ? faChevronUp : faChevronDown}
            />
          </Col>

          {bulletinOpen && (
            <>
              <Col
                className={` mt-2 cursorpointer mediumfont ${
                  shouldManageBulletinHighlight ? activeStyle : "ms-1"
                }`}
                onClick={handleManageBulletinClick}
              >
                <FontAwesomeIcon className="ms-2" icon={faArrowRightLong} />{" "}
                {MenuConstants.manageBulletin}
              </Col>

              <Col
                className={`mt-2 cursorpointer mediumfont ${
                  shouldManageBulletinCategoryHighlight ? activeStyle : "ms-1"
                }`}
                onClick={handleManageBulletinCategoryClick}
              >
                <FontAwesomeIcon className="ms-2" icon={faArrowRightLong} />{" "}
                {MenuConstants.manageBulletin} Category
              </Col>
            </>
          )}
          <Col className="mt-3 mediumfont ms-2">
            <img
              src="./feedback.png"
              className="me-2"
              alt="Feedback"
              style={{ width: "20px", height: "20px" }}
            />
            {MenuConstants.feedback}
          </Col>
          <Col className="mt-3 mediumfont ms-2">
            <img
              src="./report.png"
              className="me-2"
              alt="Reports"
              style={{ width: "20px", height: "20px" }}
            />
            {MenuConstants.reports}
          </Col>
        </>
      )}
      {showMenu && (
        <>
          <Col className="mt-3 mediumfont ms-2">
            <img
              src="./Dashboard.png"
              className="me-2"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 cursorpointer mediumfont ms-2 position-relative">
            <img
              src="./Transaction.png"
              className="me-2"
              alt="Transaction"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 cursorpointer mediumfont ms-2 position-relative">
            <img
              className="me-2"
              src="./Target.png"
              alt="Competetion"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 cursorpointer mediumfont ms-2 position-relative">
            <img
              className="me-2"
              src="./Transaction Return.png"
              alt="Competetion"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 cursorpointer mediumfont ms-2 position-relative">
            <img
              className="me-2"
              src="./learning.png"
              alt="Learning & Development"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>{" "}
          <Col className="mt-3 mediumfont ms-2">
            <img
              className="me-2"
              src="./survey.png"
              alt="Survey"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 cursorpointer mediumfont ms-2 position-relative">
            <img
              className="me-2"
              src="./merchandizing.png"
              alt="merchandizing"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 cursorpointer mediumfont ms-2 position-relative">
            <img
              className="me-2"
              src="./competition.png"
              alt="Competetion"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 cursorpointer mediumfont ms-2 position-relative">
            <img
              className="me-2"
              src="./incentive.png"
              alt="incentive"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 cursorpointer mediumfont ms-2 position-relative">
            <img
              className="me-2"
              src="./bulletin.png"
              alt="Bulletin"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 mediumfont ms-2">
            <img
              src="./feedback.png"
              className="me-2"
              alt="Feedback"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
          <Col className="mt-3 mediumfont ms-2">
            <img
              src="./report.png"
              className="me-2"
              alt="Reports"
              style={{ width: "20px", height: "20px" }}
            />
          </Col>
        </>
      )}
    </Col>
  );
};

export default SideMenu;
