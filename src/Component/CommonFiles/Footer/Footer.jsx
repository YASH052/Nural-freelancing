import React from "react";
import { Row } from "react-bootstrap";
import '../../../App.css'
import "../../../Fonts.css";
import "../../../Color.css";
const Footer = () => {
  return (
    <Row className="fixed-bottom footerbg justify-content-center text-center">
      <img
        className="img-fluid"
        src="./footericon1.png"
        alt=""
        style={{ width: "200px", height: "30px" }}
      />
      <img
        className="img-fluid"
        src="./footericon2.png"
        alt=""
        style={{ width: "200px", height: "30px" }}
      />
    </Row>
  );
};

export default Footer;
