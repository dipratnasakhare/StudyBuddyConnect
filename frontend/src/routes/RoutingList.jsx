
import { Route, Routes } from "react-router-dom";
import { Authentication } from "../pages/Authentication/Authentication";
import { SidebarWithHeader } from "../pages/Home/HomeNavbar";

export const RoutingList = () => {

    return (
      <div>
        <Routes>
        <Route path="/" element={<SidebarWithHeader />} />
        <Route path="/login" element={<Authentication />} />
        </Routes>
      </div>
    );
  };