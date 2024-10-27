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
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </Row>
    );
};

export default AllRoutes;
