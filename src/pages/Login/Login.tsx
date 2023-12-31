import { useState, ChangeEvent, FormEvent, useRef } from "react";
import {
  Container,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import PasswordInput from "../../components/PasswordInput/PasswordInput";
import Link from "../../navigation/Link/Link";
import { useNavigate } from "../../navigation/navigation";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import Navigate from "../../navigation/Navigate/Navigate";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loggedIn } = useAuthStatus();

  const navigate = useNavigate()?.navigate;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate && navigate("/");
    } catch (error: any) {
      const { code, message } = error;
      console.error(code, message);
    }
  };

  if (loggedIn) return <Navigate to="/" />;

  return (
    <Container maxWidth="sm" className="registration-container">
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h3"
          gutterBottom
          mb={3}
          color="primary.main"
          fontWeight={"600"}
        >
          Login
        </Typography>

        <FormControl fullWidth sx={{ display: "flex", gap: "12px" }}>
          <TextField
            type="email"
            label="Email"
            required
            size="small"
            name="email"
            color="secondary"
            variant="filled"
            inputRef={emailRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <PasswordInput
            label="Password"
            required
            size="small"
            name="password"
            variant="filled"
            color="secondary"
            inputRef={passwordRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </FormControl>

        <Typography variant="body2" color="primary.main" fontWeight={"600"}>
          Don't have an account? <Link to="/register">Sign up</Link>
        </Typography>

        <Typography variant="body2" color="primary.main" fontWeight={"600"}>
          <Link to="/forgot-password">Forgot password</Link>
        </Typography>

        <Button
          type="submit"
          sx={{ alignSelf: "flex-end" }}
          color="secondary"
          variant="contained"
          size="large"
        >
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default Login;
