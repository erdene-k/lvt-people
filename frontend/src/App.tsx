import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, createBrowserRouter, createRoutesFromElements, defer, Navigate, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";

import axios from "axios";
import Dashboard from "./pages/Dashboard";
import HeaderMenu from "./components/HeaderMenu";


// const getUserData = () =>
//  new Promise((resolve, reject) => {
//   const encData = window.localStorage.getItem("sst_exd");
//   if (encData) {
//    const user = decryptData(encData);
//    resolve(user);
//   } else {
//    resolve(null);
//   }
//  });

export const router = createBrowserRouter(
 createRoutesFromElements(
  <Route element={<HeaderMenu/>} >
  <Route path="/" element={<Navigate to="/login" replace />} />
  <Route path="/login" element={<Login />} />
  <Route path="dashboard" element={<Dashboard />} />
 </Route>
 )
);

const App = () => (

  <main className="main">
   <RouterProvider router={router} />
  </main>

);

export default App;
