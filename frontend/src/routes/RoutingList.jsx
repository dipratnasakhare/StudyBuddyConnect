
import { Route, Routes } from "react-router-dom";
import { Authentication } from "../pages/Authentication/Authentication";
import { Home } from "../pages/Home/Home";

export const RoutingList = () => {

    return (
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        </Routes>
      </div>
    );
  };