import "./App.css";
import AllRoutes from "./Component/RoutesFile/AllRoutes";
import { useLocation } from "react-router-dom";
import AuthRoutes from "./Component/RoutesFile/AuthRoutes";
import SideMenu from "./Component/CommonFiles/Sidebar/SideMenu";
import { Col, Row } from "react-bootstrap";
import Header from "./Component/CommonFiles/Header/Header";
import Footer from "./Component/CommonFiles/Footer/Footer";
import { useState } from "react";

function App() {
  const location = useLocation();

  // auth component routes without sidebar
  const isAuthRoute = [
    "/login",
    "/changePassword",
    "/forgotPassword",
    "/",
  ].includes(location.pathname);

  const [showMenu, setShowMenu] = useState(false); // State for sidebar visibility

  return (
    <Row className="ms-0 marginnone">
      {isAuthRoute ? (
        <AuthRoutes />
      ) : (
        <>
          <span className="fixed-top p-0">
            <Header />
          </span>

          {/* Pass showMenu and setShowMenu as props */}
          <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />

          <Col
            className={`margintop ${showMenu ? "marginleft2" : "marginleft"}`} // Dynamically applied class
          >
            <AllRoutes />
            <Footer />
          </Col>
        </>
      )}
    </Row>
  );
}

export default App;
