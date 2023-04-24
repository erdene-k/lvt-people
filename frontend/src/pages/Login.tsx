import React, { FormEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { API } from "../services/service";
import { useAuth } from "../hooks/useAuth";
import { AuthContextType } from "../models/itypes";
import { CircularProgress } from "@mui/material";


const Login = () => {
  const { login } = useAuth() as AuthContextType;
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if(loading){return;}
    setLoading(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let loginData = {
      email: data.get("email"),
      password: data.get("password")
    };
    await API("POST", "/login",loginData,true).then((res:any)=>{
      console.log({accessToken:res.data.token.token, email:res.data.user.email, id:res.data.user.id});
      
      if(res.status===200){
       login({accessToken:res.data.token.token, email:res.data.user.email, id:res.data.user.id})
      }
      }).catch(error=>{
        console.log(error);
      }).finally(()=>setLoading(false))
  };
  return (
    <div className="login">
    
  {loading &&  <CircularProgress size={120} sx={spinSx} />}
      <Box sx={boxSx}>
        <h1> Welcome </h1>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <button className="primary-button" type="submit">
            Login
          </button>
          <div className="sign-up">
            <Link href="../register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
const boxSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 400,
  border: "0.1px rgba(50,155,155,0.5) solid",
  borderRadius: 5,
  p: 5,
  background: "#fff",
  boxShadow: 4,
};
const spinSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-60px",
  marginLeft: "-60px",
  zIndex:222,
  color:'#023047'
};
