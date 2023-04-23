import React from "react";
import "./App.css";
import "./assests/component.css"
import { Route, createBrowserRouter, createRoutesFromElements, defer, Navigate, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HeaderMenu from "./components/HeaderMenu";
import BidsPage from "./pages/BidsPage";
import JobsPage from "./pages/JobsPage";
import Register from "./pages/Register";


export const router = createBrowserRouter(
  createRoutesFromElements(
   <Route element={<HeaderMenu/>} >
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="bids" element={<BidsPage />} />
    <Route path="jobs" element={<JobsPage />} />
  </Route>
 )
);

const App = () => (

  <main className="main">
   <RouterProvider router={router} />
  </main>

);

export default App;
