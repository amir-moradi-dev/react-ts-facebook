import classes from "./index.module.css";
import { Button } from "@mui/material";
import React from "react";

function Login() {
  function signIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
  }

  return (
    <>
      <div className={classes.login}>
        <div className={classes.login__logo}>
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/300px-Facebook_f_logo_%282021%29.svg.png"
            }
            alt={"facebook-logo"}
          />
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/300px-Facebook_Logo_%282019%29.svg.png"
            }
            alt={"facebook-logo-text"}
          />
        </div>
        <Button type={"submit"} onClick={signIn}>
          Sign In
        </Button>
      </div>
    </>
  );
}

export default Login;
