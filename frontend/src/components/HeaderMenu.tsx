import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { AuthContextType } from "../models/itypes";
import { useAuth } from "../hooks/useAuth";
import { CircularProgress, IconButton } from "@mui/material";
const HeaderMenu = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { user, logout } = useAuth() as AuthContextType;
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: false });
    }
  }, [user]);
  return (
    <div>
       {loading &&  <CircularProgress size={120} sx={spinSx} />}
      <header className="headerNav">
        <Link to="/dashboard">
          <DashboardIcon sx={{ width: 50, height: 50 }} />
        </Link>
        <div className="sub-header">
          <Link to="/jobs">
            My Jobs <WorkIcon />
          </Link>
          <Link to="/bids">
            My Bids <WorkspacesIcon />
          </Link>
          <IconButton
            sx={iconBtn}
            onClick={() => {
              setLoading(true)
              setTimeout(() => {
                logout();
              }, 1000);
              setLoading(true)
            }
        }
          >
            <ExitToAppIcon sx={{ p: 0.8 }} />
          </IconButton>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default HeaderMenu;
const iconBtn={
  color: "#fff",
  backgroundColor:'#023047',
  borderRadius:2,
  padding:0,
  margin:0,
  "&:hover": {
    backgroundColor: " #02304f",
  },
}
const spinSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-60px",
  marginLeft: "-60px",
  zIndex:222,
  color:'#023047'
};
