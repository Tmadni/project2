import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  makeStyles,
  Container,
  Box,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const classes = useStyles();
  // ---------check if login---------
  useEffect(() => {
    if (sessionStorage.getItem("login")) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);
  // ------------sanctum------------
  // -------------------backend-------------------------
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function login(e) {
    e.preventDefault();
    let user = { email, password };

    if (formRef.current.reportValidity()) {
      api
        .get("/sanctum/csrf-cookie")
        .then(() => {
          api
            .post("/api/signin", user)
            .then((res) => {
              //console.log(res);
              sessionStorage.setItem("login", true);
              //console.log(sessionStorage.getItem("login"));
              history.push("/");
            })
            .catch((err) => {
              //console.log(err.response.status);
              if (err.response.status === 422) {
                alert(err.response.data.errors.error);
              }
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      formRef.current.reportValidity();
    }
  }
  // -------------------backend ends--------------------
  const formRef = React.useRef();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in to continue
        </Typography>
        <form ref={formRef} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/reset" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// -------------token based----------------
// api()
//   .post("/api/signin", user)
//   .then((res) => {
//     console.log(res);
//     if (res.data.status_code === 200) {
//       sessionStorage.setItem("token", res.data.token);
//       //history.push("/");
//     } else {
//       alert(res.data.message);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
