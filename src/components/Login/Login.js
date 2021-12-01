import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import loginBg from "../../images/loginBg.gif";
import { useContext } from "react";
import { dateContext, timeContext, userContext } from "../../App";
import { useState } from "react";
import { useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [loginInfo, setLoginInfo] = useContext(userContext);
  const [loginDate, setLoginDate] = useContext(dateContext);
  const [loginTime, setLoginTime] = useContext(timeContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [matchedAgent, setMatchedAgent] = useState({});
  const email = loginInfo.email;

  useEffect(() => {
    fetch("http://localhost:6010/agent?email=" + email)
      .then((res) => res.json())
      .then((data) => setMatchedAgent(data))
      .catch((err) => console.log(err));
  }, [email]);
  const handleSignIn = (e) => {
    const newInfo = { ...loginInfo };
    newInfo[e.target.name] = e.target.value;
    setLoginInfo(newInfo);
  };
  const confirmSignIn = () => {
    if (
      loginInfo.email === matchedAgent.email &&
      loginInfo.password === matchedAgent.password
    ) {
      alert("Matched");
      sessionStorage.setItem("agent", email);
      history.replace(from);
    } else {
      alert("not Matched");
    }
  };
  const loginTIME = new Date();
  const date = loginTIME.getDay();
  const month = loginTIME.getMonth() + 1;
  const year = loginTIME.getFullYear();
  const hour = loginTIME.getHours();
  const minute = loginTIME.getMinutes();
  const second = loginTIME.getSeconds();
  console.log("Date:", date, month, year, "Time:", hour, minute, second);
  setLoginDate(
    year +
      "-" +
      (month <= 9 ? "0" + month : month) +
      "-" +
      (date <= 9 ? "0" + date : date)
  );
  setLoginTime(
    (hour <= 9 ? "0" + hour : hour) +
      ":" +
      (minute <= 9 ? "0" + minute : minute) +
      ":" +
      (second <= 9 ? "0" + second : second)
  );
  return (
    <div className="">
      <div className="login-page ml-3">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input
                onChange={handleSignIn}
                name="email"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                onChange={handleSignIn}
                name="password"
                type="password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">
                Forgot your password?
              </label>
            </div>
            <div className="from-group mt-5">
              <button onClick={confirmSignIn} className="btn btn-danger">
                <FontAwesomeIcon icon={faSignInAlt} /> Sign In
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={loginBg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
