import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage/Main';
import Login from './pages/LoginPage/Login';
import PlanDetail from './pages/PlanDetailPage/PlanDetail';
import PlanList from './pages/PlanListPage/PlanList';
import PlanSets from './pages/PlanSetsPage/PlanSets';
import SignUp from './pages/SignUpPage/SignUp';
import UploadPlan from './pages/UploadPlanPage/UploadPlan';
import UserInfo from './pages/UserInfoPage/UserInfo';
import ViewPlan from './pages/ViewPlanPage/ViewPlan';
import WishList from './pages/WishListPage/WishList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plandetail" element={<PlanDetail />} />
        <Route path="/planlist" element={<PlanList />} />
        <Route path="/plansets" element={<PlanSets />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/community" element={<UploadPlan />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/viewplan" element={<ViewPlan />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
