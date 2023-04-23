import React from "react";
import "./App.css";
import "./assests/component.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HeaderMenu from "./components/HeaderMenu";
import BidsPage from "./pages/BidsPage";
import JobsPage from "./pages/JobsPage";
import Register from "./pages/Register";
import { GetLocalStorageData, decryptData } from "./hooks/useLocalStorage";
import { AuthLayout } from "./components/AuthLayout";
import { StartLayout } from "./components/StartLayout";
const getUserData = () =>
  new Promise((resolve, reject) => {
    const encData = window.localStorage.getItem("sst_exd");
    if (encData) {
      const user = decryptData(encData);
      //check refreshh token
      resolve(user);
    } else {
      resolve(null);
    }
  });
const user = GetLocalStorageData("sst_exd");
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<StartLayout />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<HeaderMenu />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bids" element={<BidsPage />} />
        <Route path="jobs" element={<JobsPage />} />
      </Route>
    </Route>
  )
);

const App = () => (
  <main className="main">
    <RouterProvider router={router} />
  </main>
);

export default App;
