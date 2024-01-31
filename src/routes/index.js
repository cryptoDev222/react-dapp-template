import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "@/layouts/Main";
import Home from "@/Home";

const AppRouter = () => (
  <Routes>
    <Route path="" element={<Main />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);

export default AppRouter;