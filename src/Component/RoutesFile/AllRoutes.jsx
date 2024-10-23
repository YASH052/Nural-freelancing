// src/routes/AllRoutes.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../CommonFiles/Loader';
import ProtectedRoute from './ProtectedRoute';
import Notfound from '../CommonFiles/Notfound';
import Mastersetting from '../Pages/Mastersetting';
import Country from '../Pages/Locations/Country';
import { Row } from 'react-bootstrap';
import Region from '../Pages/Locations/Region';
import State from '../Pages/Locations/State';
import City from '../Pages/Locations/City';
import Area from '../Pages/Locations/Area';
import Brands from '../Pages/Products/Brands';
import Category from '../Pages/Products/Category';
import Model from '../Pages/Products/Model';
import SubCategory from '../Pages/Products/Subcategory';
import ViewPrice from '../Pages/Price/ViewPrice';
import UploadPrice from '../Pages/Price/UploadPrice';
import PriceList from '../Pages/Price/PriceList';
import CreateTarget from '../Pages/Target/CreateTarget';
import ViewTarget from '../Pages/Target/ViewTarget';
import ISPincentive from '../Pages/ISP/ISPincentive';
import Createisp from '../Pages/ISP/Createisp';
import SKU from '../Pages/Products/SKU';
import Access from '../Pages/Authenticate/LoginPage/Access';


// Will Implement this later how we can use Lazy loading for pages
// const Dashboard = lazy(() => import('../Pages/Dashboard/Dashboard'));
// const LoginPage = lazy(() => import('../Pages/Authenticate/LoginPage/Login'))

const AllRoutes = () => {
    return (
      <Row>
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
