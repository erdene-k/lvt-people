import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";


const Register = () => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoading(true)
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  
  };
  return (
    <div className="login">
     {loading &&  <CircularProgress size={80} sx={spinSx} />}
      <Box sx={boxSx}>
        <h2> Register your account </h2>
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
          <div className="reminder">
            <p>at least 8 characters</p>
          </div>

          <button className="primary-button" type="submit">
            Register
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
const boxSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 600,
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
  marginTop: "-40px",
  marginLeft: "-40px",
};
