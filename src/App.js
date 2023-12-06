import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth(app);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Login successful", userCredential.user);
      setLoggedIn(true);
      navigate("/post");
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  const handleReg = () => {
    navigate("/register");
  };

  return (
    <div className="App">
      <h1>LOGIN</h1>
      <TextField
        id="outlined-basic"
        label="Enter Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Enter Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        LOGIN
      </Button>
      <Button variant="outlined" onClick={handleReg}>
        REGISTER
      </Button>
      <h1>{loggedIn ? "CURRENTLY LOGGED IN" : "CURRENTLY LOGGED OUT"}</h1>
    </div>
  );
}

export default App;
