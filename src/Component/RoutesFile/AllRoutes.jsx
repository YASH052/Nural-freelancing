// src/routes/AllRoutes.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../CommonFiles/Loader';
import ProtectedRoute from './ProtectedRoute';
import { Row } from "react-bootstrap";
import Notfound from '../CommonFiles/Notfound';
import Mastersetting from '../Pages/Master/MasterSetting/Mastersetting'
import Country from '../Pages/Master/Locations/Country.jsx/Country';
import Region from '../Pages/Master/Locations/Region/Region';
import State from '../Pages/Master/Locations/State/State'
import City from '../Pages/Master/Locations/City/City';
import Area from '../Pages/Master/Locations/Area/Area';
import Brands from '../Pages/Master/Products/Brand/Brands';
import Category from '../Pages/Master/Products/Category/Category';
import SubCategory from '../Pages/Master/Products/Subcategory/Subcategory';
import Model from '../Pages/Master/Products/Model/Model';
import ViewPrice from '../Pages/Master/Price/ViewPrice/ViewPrice';
import UploadPrice from '../Pages/Master/Price/UploadPrice/UploadPrice';
import SKU from '../Pages/Master/Products/SKU/SKU';
import ISPincentive from '../Pages/SideMenuPages/ISPincentive/UploadISP/ISPincentive';
import Createisp from '../Pages/SideMenuPages/ISPincentive/CreateISP/Createisp';
import ViewTarget from '../Pages/SideMenuPages/Target/ViewTarget/ViewTarget';
import CreateTarget from '../Pages/SideMenuPages/Target/CreateTarget/CreateTarget';
import PriceList from '../Pages/Master/Price/PriceList/PriceList';
import AddRetailerExcel from '../Pages/Master/Retailers/AddRetailerexc/AddRetailerExcel';
import AddRetailerUi from '../Pages/Master/Retailers/AddRetailerUi/AddRetailerUi';
import ViewRetailer from '../Pages/Master/Retailers/ViewRtailer/ViewRetailer';
import AddSalesExcel from '../Pages/Master/Sales Channel/AddsalesExcel/AddSalesExcel';
import AddSalesUi from '../Pages/Master/Sales Channel/AddSalesUi/AddSalesUi';
import ViewSales from '../Pages/Master/Sales Channel/ViewSales/ViewSales';
import ManageIspExcel from '../Pages/Master/ISP Master/ManageISP/ManagIspExcel';
import ManageIspUi from '../Pages/Master/ISP Master/ManageIspUI/ManageIspUi';
import BulkuploadMapping from '../Pages/Master/User Master/Bulk Upload Mapping/BulkuploadMapping';
import ManageUser from '../Pages/Master/User Master/Manage User/ManageUser';
import LeaveTypes from '../Pages/Master/Attendance Master/Leave Types/LeaveTypes';
// import LeaveAllocation from '../Pages/Master/Leave Master/Leave allocation/LeaveAllocation';
import ManageBulletinCategory from '../Pages/SideMenuPages/Bulletin/ManageBulletinCategory/ManageBulletinCategory';
import CreateBulletin from '../Pages/SideMenuPages/Bulletin/CreateBulletin/CreateBulletin';
import ViewBulletin from '../Pages/SideMenuPages/Bulletin/ViewBulletin/ViewBulletin';
import ManageAssesment from '../Pages/SideMenuPages/Learning and Developemnt/Manage Assesment/ManageAssesment';
import ViewAssesment from '../Pages/SideMenuPages/Learning and Developemnt/ManageAssesmentView/ManageAssesmentView';
import ManageLDCategory from '../Pages/SideMenuPages/Learning and Developemnt/Manage L&D Category/ManageL&DCategory';
import ManageLDContent from '../Pages/SideMenuPages/Learning and Developemnt/Manage L&D Content/ManageLDContent';
import ManageLDContentView from '../Pages/SideMenuPages/Learning and Developemnt/Manage L&D Content View/ManageL&DContentView';
import CreateSurveyLink from '../Pages/SideMenuPages/Survey/Create Survey Link/CreateSurveyLink';
import CreateSurveyCustomer from '../Pages/SideMenuPages/Survey/Create Survey Customer/CreateSurveyCustomer';
import ViewSurvey from '../Pages/SideMenuPages/Survey/View Survey/ViewSurvey';
import AttendanceRegularization from '../Pages/Master/Attendance Master/Attendance Regularization/AttendanceRegularization';
import BalanceLeaveExcel from '../Pages/Master/Attendance Master/Balance Leave excel/BalanceLeaveExcel';
import BalanceLeaveUi from '../Pages/Master/Attendance Master/Balance Leave UI/BalanceLeaveUi';

// Will Implement this later how we can use Lazy loading for pages
// const Dashboard = lazy(() => import('../Pages/Dashboard/Dashboard'));
// const LoginPage = lazy(() => import('../Pages/Authenticate/LoginPage/Login'))

const AllRoutes = () => {
    return (
      <Row className="">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/setting" element={<Mastersetting />} />
            <Route path="/country" element={<Country />} />
            <Route path="/region" element={<Region />} />
            <Route path="/state" element={<State />} />
            <Route path="/city" element={<City />} />
            <Route path="/area" element={<Area />} />
            <Route path="/brand" element={<Brands />} />
            <Route path="/category" element={<Category />} />
            <Route path="/subcategory" element={<SubCategory />} />
            <Route path="/model" element={<Model />} />
            <Route path="/viewprice" element={<ViewPrice />} />
            <Route path="/uploadprice" element={<UploadPrice />} />
            <Route path="/pricelist" element={<PriceList />} />
            <Route path="/createtarget" element={<CreateTarget />} />
            <Route path="/viewtarget" element={<ViewTarget />} />
            <Route path="/createisp" element={<Createisp />} />
            <Route path="/ispincentive" element={<ISPincentive />} />
            <Route path="/sku" element={<SKU />} />
            <Route path="/addretailerexcel" element={<AddRetailerExcel />} />
            <Route path="/addretailerui" element={<AddRetailerUi />} />
            <Route path="/viewretailer" element={<ViewRetailer />} />
            <Route path="/addsalesexcel" element={<AddSalesExcel />} />
            <Route path="/addsalesui" element={<AddSalesUi />} />
            <Route path="/viewsales" element={<ViewSales />} />
            <Route path="/manageispexcel" element={<ManageIspExcel />} />
            <Route path="/manageispui" element={<ManageIspUi />} />
            <Route path="/manageuser" element={<ManageUser />} />
            <Route path="/bulkuploadmapping" element={<BulkuploadMapping />} />
            <Route path="/leavetypes" element={<LeaveTypes />} />
            {/* <Route path="/leaveallocation" element={<LeaveAllocation />} /> */}
            <Route
              path="/managebulletincategory"
              element={<ManageBulletinCategory />}
            />
            <Route path="/createbulletin" element={<CreateBulletin />} />
            <Route path="/viewbulletin" element={<ViewBulletin />} />
            <Route path="/manageassesment" element={<ManageAssesment />} />
            <Route path="/viewassesment" element={<ViewAssesment />} />
            <Route path="/managel&dcategory" element={<ManageLDCategory />} />
            <Route path="/managel&dcontent" element={<ManageLDContent />} />
            <Route path="/viewl&dcontent" element={<ManageLDContentView />} />
            <Route path="/createsurveylink" element={<CreateSurveyLink />} />
            <Route
              path="/createsurveycustomer"
              element={<CreateSurveyCustomer />}
            />
            <Route path="/viewsurvey" element={<ViewSurvey />} />
            <Route
              path="/attendanceregularization"
              element={<AttendanceRegularization />}
            />
            <Route path="/balanceleaveexcel" element={<BalanceLeaveExcel />} />
            <Route path="/balanceleaveui" element={<BalanceLeaveUi />} />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </Row>
    );
};

export default AllRoutes;
