import {useState } from "react";

import {
  Row,
  Col,
  Button,
  Container,
 
  Form,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
import { Autocomplete, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";


const ManageWebMenu = () => {
  const navigate = useNavigate();
  const [masterChecked, setMasterChecked] = useState(false); // State for "Masters" checkbox
  const [childCheckboxes, setChildCheckboxes] = useState([false, false, false]); // State for child checkboxes
  const [textValues, setTextValues] = useState([
    "xxxxx1",
    "xxxxx2",
    "xxxxx3",
  ]); 
  const [transactionChecked, setTransactionChecked] = useState(false);
  const [transactionChildCheckboxes, setTransactionChildCheckboxes] = useState([
    false,
    false,
    false,
  ]);

  const [ldChecked, setLDChecked] = useState(false);
  const [ldChildCheckboxes, setLDChildCheckboxes] = useState([
    false,
    false,
    false,
  ]);

  const [competitionChecked, setCompetitionChecked] = useState(false);
  const [competitionChildCheckboxes, setCompetitionChildCheckboxes] = useState([
    false,
    false,
    false,
  ]);
 const handleSectionChange = (
   checkedStateSetter,
   childStateSetter,
   childState
 ) => {
   const newState = !childState.every((checked) => checked);
   checkedStateSetter(newState);
   childStateSetter(childState.map(() => newState));
 };
  const [merchandizingChecked, setMerchandizingChecked] = useState(false);
  const [merchandizingChildCheckboxes, setMerchandizingChildCheckboxes] =
    useState([false, false, false]);
  const [isMasterVisible, setIsMasterVisible] = useState(false); // State for toggling visibility of child rows
  const [isTransactionVisible, setIsTransactionVisible] = useState(false);
  const [LDVisible, setLDVisible] = useState(false);
  const [competitionVisible, setCompetitionVisible] = useState(false);
  const [merchandizeVisible, setMerchandizeVisible] = useState(false);
  const handleMasterChange = () => {
    const newMasterState = !masterChecked;
    setMasterChecked(newMasterState);
    setChildCheckboxes(childCheckboxes.map(() => newMasterState));
  };

  const handleChildChange = (index) => {
    const updatedCheckboxes = [...childCheckboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setChildCheckboxes(updatedCheckboxes);

    const allChecked = updatedCheckboxes.every((checked) => checked);
    setMasterChecked(allChecked);
  };

  const toggleVisibility = () => {
    setIsMasterVisible((prevState) => !prevState);
  };
    const transactionVisibility = () => {
      setIsTransactionVisible((prevState) => !prevState);
    };
  const ldVisibility = () => {
    setLDVisible((prevState) => !prevState);
  };
   const competitionVisibility = () => {
     setCompetitionVisible((prevState) => !prevState);
   };
    const merchandizeVisibility = () => {
      setMerchandizeVisible((prevState) => !prevState);
    };

  const handleTextChange = (index, newValue) => {
    const updatedValues = [...textValues];
    updatedValues[index] = newValue;
    setTextValues(updatedValues);
  };

  const handleCreateClient = () => {
    navigate("/createclient"); // Navigate to the settings route
  };

  let data = [];
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
  const handleViewClient = () => {
    navigate("/viewclient");
  };
  const handleShowAll = () => {
    // Add logic for showing all schemes here
    console.log("Show all schemes");
  };
  const handleManageAppMenu = () => {
    navigate("/manageappmenu"); // Navigate to the settings route
  };
  
  return (
    <Container fluid>
      <Row className="mb-4">
        <></>

        <Row className="mb-5">
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            {MenuConstants.manage} {MenuConstants.client}
          </Col>
          <Row className="ms-2 mt-2 position-relative">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange p-1 mediumfont  mediumfontbold  me-4 app-btns-format "
              onClick={handleCreateClient}
            >
              {MenuConstants.create} {MenuConstants.client}
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer p-1 me-3 fontcolorwhite backgroundcolorsecondary  bordercolororange mediumfontbold app-btns-format "
            >
              {MenuConstants.manage} Web Menu
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer  bordercolororange  mediumfontbold app-btns-format "
              onClick={handleManageAppMenu}
            >
              {MenuConstants.manage} App Menu
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              onClick={handleViewClient}
              className="cursorpointer  position-absolute end-0 p-1 me-3  bordercolororange mediumfontbold app-btns-format "
            >
              {MenuConstants.view} {MenuConstants.client}
            </Col>
            <Form>
              <Row className="app-country-box">
                <Row className="mt-3">
                  <Col xxl={3} xl={3} lg={3} md={3}>
                    <Row className="ms-4">Client</Row>
                    <Col className="ms-4 mb-3">
                      <Autocomplete
                        {...defaultProps}
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
                  <Col xxl={2} xl={2} lg={2} md={2}>
                    <Button
                      type="submit"
                      className="cursorpointer bordercolororange mediumfont mt-3 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                    >
                      Update
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      className="bordercolororange cursorpointer mediumfont mt-3 backgroundcolorsecondary fontcolorwhite me-4 app-btns-format"
                      onClick={handleShowAll}
                    >
                      {MenuConstants.cancel}
                    </Button>
                  </Col>
                  {/* Action Buttons */}
                </Row>
              </Row>
            </Form>
            <Row className="mt-2 ms-0 fontcolorwhite backgroundcolor">
              Menu List
            </Row>
            <Row className="d-flex align-items-center ">
              <Col className="d-flex align-items-center">
                <FontAwesomeIcon
                  className="cursorpointer me-2"
                  icon={isMasterVisible ? faChevronDown : faChevronUp} // Toggle icon
                  onClick={toggleVisibility}
                />
                <input
                  type="checkbox"
                  className="me-2 app-custom-checkbox"
                  checked={masterChecked}
                  onChange={handleMasterChange}
                />
                <span className="fw-semibold font20">Masters</span>
              </Col>
            </Row>

            {isMasterVisible &&
              childCheckboxes.map((isChecked, index) => (
                <Row key={index} className="">
                  <Col className="ms-5 mt-1 d-flex align-items-center">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                    <FontAwesomeIcon
                      className="ms-1"
                      icon={faEllipsisVertical}
                    />
                    <input
                      className="ms-2 app-custom-checkbox"
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleChildChange(index)}
                    />
                    <input
                      disabled
                      className="ms-2 app-custom-input"
                      type="text"
                      value={textValues[index]}
                      onChange={(e) => handleTextChange(index, e.target.value)} // Update specific text value
                    />
                  </Col>
                </Row>
              ))}
          </Row>
          <Row className="d-flex ms-2 align-items-center">
            <Col className="d-flex align-items-center">
              <FontAwesomeIcon
                className="cursorpointer me-2"
                icon={isTransactionVisible ? faChevronDown : faChevronUp}
                onClick={transactionVisibility}
              />
              <input
                type="checkbox"
                className="me-2 app-custom-checkbox"
                checked={transactionChecked}
                onChange={() =>
                  handleSectionChange(
                    setTransactionChecked,
                    setTransactionChildCheckboxes,
                    transactionChildCheckboxes
                  )
                }
              />
              <span className="fw-semibold font20">Transaction</span>
            </Col>
          </Row>
          {isTransactionVisible &&
            transactionChildCheckboxes.map((isChecked, index) => (
              <Row key={index} className="">
                <Col className="ms-5 mt-1 d-flex align-items-center">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                  <FontAwesomeIcon className="ms-1" icon={faEllipsisVertical} />
                  <input
                    className="ms-2 app-custom-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      handleChildChange(
                        index,
                        transactionChildCheckboxes,
                        setTransactionChildCheckboxes,
                        setTransactionChecked
                      )
                    }
                  />
                  <input
                    disabled
                    className="ms-2 app-custom-input"
                    type="text"
                    value={`Transaction ${index + 1}`}
                  />
                </Col>
              </Row>
            ))}

          {/* Repeat similar structure for L&D, Competition, and Merchandizing */}
          {/* L&D Section */}
          <Row className="d-flex ms-2 align-items-center">
            <Col className="d-flex align-items-center">
              <FontAwesomeIcon
                className="cursorpointer me-2"
                icon={LDVisible ? faChevronDown : faChevronUp}
                onClick={ldVisibility}
              />
              <input
                type="checkbox"
                className="me-2 app-custom-checkbox"
                checked={ldChecked}
                onChange={() =>
                  handleSectionChange(
                    setLDChecked,
                    setLDChildCheckboxes,
                    ldChildCheckboxes
                  )
                }
              />
              <span className="fw-semibold font20">L&D</span>
            </Col>
          </Row>
          {LDVisible &&
            ldChildCheckboxes.map((isChecked, index) => (
              <Row key={index} className="">
                <Col className="ms-5 mt-1 d-flex align-items-center">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                  <FontAwesomeIcon className="ms-1" icon={faEllipsisVertical} />
                  <input
                    className="ms-2 app-custom-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      handleChildChange(
                        index,
                        ldChildCheckboxes,
                        setLDChildCheckboxes,
                        setLDChecked
                      )
                    }
                  />
                  <input
                    disabled
                    className="ms-2 app-custom-input"
                    type="text"
                    value={`L&D ${index + 1}`}
                  />
                </Col>
              </Row>
            ))}

          {/* Competition Section */}
          <Row className="d-flex ms-2 align-items-center">
            <Col className="d-flex align-items-center">
              <FontAwesomeIcon
                className="cursorpointer me-2"
                icon={competitionVisible ? faChevronDown : faChevronUp}
                onClick={competitionVisibility}
              />
              <input
                type="checkbox"
                className="me-2 app-custom-checkbox"
                checked={competitionChecked}
                onChange={() =>
                  handleSectionChange(
                    setCompetitionChecked,
                    setCompetitionChildCheckboxes,
                    competitionChildCheckboxes
                  )
                }
              />
              <span className="fw-semibold font20">Competition</span>
            </Col>
          </Row>
          {competitionVisible &&
            competitionChildCheckboxes.map((isChecked, index) => (
              <Row key={index} className="">
                <Col className="ms-5 mt-1 d-flex align-items-center">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                  <FontAwesomeIcon className="ms-1" icon={faEllipsisVertical} />
                  <input
                    className="ms-2 app-custom-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      handleChildChange(
                        index,
                        competitionChildCheckboxes,
                        setCompetitionChildCheckboxes,
                        setCompetitionChecked
                      )
                    }
                  />
                  <input
                    disabled
                    className="ms-2 app-custom-input"
                    type="text"
                    value={`Competition ${index + 1}`}
                  />
                </Col>
              </Row>
            ))}

          {/* Merchandizing Section */}
          <Row className="d-flex ms-2 align-items-center">
            <Col className="d-flex align-items-center">
              <FontAwesomeIcon
                className="cursorpointer me-2"
                icon={merchandizeVisible ? faChevronDown : faChevronUp}
                onClick={merchandizeVisibility}
              />
              <input
                type="checkbox"
                className="me-2 app-custom-checkbox"
                checked={merchandizingChecked}
                onChange={() =>
                  handleSectionChange(
                    setMerchandizingChecked,
                    setMerchandizingChildCheckboxes,
                    merchandizingChildCheckboxes
                  )
                }
              />
              <span className="fw-semibold font20">Merchandizing</span>
            </Col>
          </Row>
          {merchandizeVisible &&
            merchandizingChildCheckboxes.map((isChecked, index) => (
              <Row key={index} className="">
                <Col className="ms-5 mt-1 d-flex align-items-center">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                  <FontAwesomeIcon className="ms-1" icon={faEllipsisVertical} />
                  <input
                    className="ms-2 app-custom-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      handleChildChange(
                        index,
                        merchandizingChildCheckboxes,
                        setMerchandizingChildCheckboxes,
                        setMerchandizingChecked
                      )
                    }
                  />
                  <input
                    disabled
                    className="ms-2 app-custom-input"
                    type="text"
                    value={`Merchandizing ${index + 1}`}
                  />
                </Col>
              </Row>
            ))}
        </Row>
      </Row>
    </Container>
  );
};

export default ManageWebMenu;
