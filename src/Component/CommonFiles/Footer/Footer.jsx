import { Row } from "react-bootstrap";
import "../../../App.css";
import "../../../Fonts.css";
import "../../../Color.css";
import "./Footer.css";

const Footer = () => {
  return (
    <Row className="fixed-bottom footerbg">
      <img
        className="img-fluid app-footer-logo-custom"
        src="./footericon1.png"
        alt=""
      />
      <img
        className="img-fluid app-footer-logo-custom"
        src="./footericon2.png"
        alt=""
      />
    </Row>
  );
};

export default Footer;
