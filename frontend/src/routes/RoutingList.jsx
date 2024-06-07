
import { Route, Routes } from "react-router-dom";
import { Authentication } from "../pages/Authentication/Authentication";
import { Home } from "../pages/Home/Home";
import { SidebarWithHeader } from "../components/HomeNavbar";

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