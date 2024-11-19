import './App.css';
import AllRoutes from './Component/RoutesFile/AllRoutes';
import { useLocation } from 'react-router-dom';
import AuthRoutes from './Component/RoutesFile/AuthRoutes';
import SideMenu from './Component/CommonFiles/Sidebar/SideMenu';
import { Col,Row } from 'react-bootstrap';
import Header from './Component/CommonFiles/Header/Header';
import Footer from './Component/CommonFiles/Footer/Footer';

function App() {
  const location = useLocation();

  // auth component routes without sidebar
  const isAuthRoute = ['/login', '/changePassword', '/forgotPassword','/'].includes(location.pathname);

  return (
    <Row className="ms-0 marginnone">
      {isAuthRoute ? (
        <AuthRoutes />
      ) : (
        <>
          <Header />
          <SideMenu />
          <Col className="">
            <AllRoutes />
            <Footer />
          </Col>
        </>
      )}
    </Row>
  );
}

export default App;
