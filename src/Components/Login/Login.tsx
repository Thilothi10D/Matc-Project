import React, { useReducer, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { admin, hr, employee, logedin } from "../../Store/LoginReducers";
import { AppState } from "../../Store/Index";
import { Formik, Form, Field } from "formik";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: 400,
      height: 500,
      marginLeft: 987,
      marginTop: 30,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: "center",
      background: "#212121",
      color: "#fff",
    },
    card: {
      marginTop: theme.spacing(10),
    },
  })
);


type State = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};

const initialState: State = {
  username: "",
  password: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
};

type Action =
  | { type: "setUsername"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "loginSuccess"; payload: string }
  | { type: "loginFailed"; payload: string }
  | { type: "setIsError"; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUsername":
      return {
        ...state,
        username: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setIsButtonDisabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case "loginSuccess":
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
    case "loginFailed":
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case "setIsError":
      return {
        ...state,
        isError: action.payload,
      };
  }
};

const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const login = useSelector((state: AppState) => state.loggin); // see store.ts
  const dispatche = useDispatch();
  console.log('login', login);
  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === "admin@email.com" && state.password === "10decoders") {
      navigate("/dashboard");
      dispatch({
        type: "loginSuccess",
        payload: "Admin Logged in Successfully",
      });
      dispatche(admin('admin'));
      dispatche(logedin(true));
      sessionStorage.setItem('adminlogin', 'true')
    } else if (state.username === "hrmain@email.com" && state.password === "10dhr") {
      navigate("/dashboard");
      dispatch({
        type: "loginSuccess",
        payload: "HR Logged in Successfully",
      });
      dispatche(hr('hr'));
      dispatche(logedin(true));
      sessionStorage.setItem('hrlogin', 'true')
    } else if (state.username === "employee@email.com" && state.password === "10demp") {
      navigate("/dashboard");
      dispatch({
        type: "loginSuccess",
        payload: "Logged in Successfully",
      });
      dispatche(employee('employee'));
      dispatche(logedin(true))
      sessionStorage.setItem('employeelogin', 'true')
    }
    else {
      if (state.username === "employee@email.com") {
        dispatch({
          type: "loginFailed",
          payload: "Incorrect username ",
        });
      }
      else if (state.password === "10demp") {
        dispatch({
          type: "loginFailed",
          payload: "Incorrect password ",
        });
      }
      navigate("/");
    }

  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  return (
    <>
      <div>
        <div style={{
          backgroundImage: `url("	https://www.securitymagazine.com/ext/resources/images/employee-insider-freepik1170.jpg?1652972594")`,
          position: 'relative', height: 650, width: 900, marginLeft: 10, backgroundColor: "gray"
        }}>

          <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
              <CardHeader className={classes.header} title="Login" />
              
              <CardContent>
              <div>
                  <TextField
                    error={state.isError}
                    fullWidth
                    id="username"
                    type="email"
                    label="Username"
                    placeholder="Username"
                    margin="normal"
                    onChange={handleUsernameChange}
                    onKeyPress={handleKeyPress}
                  />
                  <TextField
                    error={state.isError}
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    margin="normal"
                    helperText={state.helperText}
                    onChange={handlePasswordChange}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  className={classes.loginBtn}
                  onClick={handleLogin}
                  disabled={state.isButtonDisabled}
                >
                  Login
                </Button>
              </CardActions>
               
            </Card>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
