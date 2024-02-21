import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import Login from "./pages/LoginPage/Login";
import PlanDetail from "./pages/PlanDetailPage/PlanDetail";
import PlanList from "./pages/PlanListPage/PlanList";
import PlanSets from "./pages/PlanSetsPage/PlanSets";
import SignUp from "./pages/SignUpPage/SignUp";
import UploadPlan3 from "./pages/UploadPlanPage/UploadPlan3";
import UploadPlan4 from "./pages/UploadPlanPage/UploadPlan4";
import UserInfo from "./pages/UserInfoPage/UserInfo";
import ViewPlan from "./pages/ViewPlanPage/ViewPlan";
import WishList from "./pages/WishListPage/WishList";

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
        <Route path="/uploadplan3" element={<UploadPlan3 />} />
        <Route path="/uploadplan4" element={<UploadPlan4 />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/viewplan" element={<ViewPlan />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
