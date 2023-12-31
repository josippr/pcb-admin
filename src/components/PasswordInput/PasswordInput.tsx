import { TextField, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

import "./PasswordInput.css";

const PasswordInput = (props: any) => {
  const [pwdVisible, setPwdVisible] = useState<boolean>(false);

  const togglePwdVisibility = () => setPwdVisible((prevState) => !prevState);

  return (
    <div className="password">
      <TextField {...props} type={pwdVisible ? "text" : "password"} fullWidth />
      <Button
        sx={{ position: "absolute", top: "0", bottom: 0 }}
        color="secondary"
        size="large"
        onClick={togglePwdVisibility}
      >
        {pwdVisible ? <VisibilityOff /> : <Visibility />}
      </Button>
    </div>
  );
};

export default PasswordInput;
