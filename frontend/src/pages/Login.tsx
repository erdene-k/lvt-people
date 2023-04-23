import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div className="login">
      <Box
        sx={boxSx}
      >
        <h1> Welcome </h1>
        <Box component="form" onSubmit={handleSubmit}   sx={{ mt: 1 }}>
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
          <FormControlLabel
          className="reminder"
            control={<Checkbox value="remember" color="primary"/>}
            label="Remember me"
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
const boxSx={
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 600,
  border: "0.1px rgba(50,155,155,0.5) solid",
  borderRadius: 5,
  p: 5,
  background: "#fff",
  boxShadow: 4,
}