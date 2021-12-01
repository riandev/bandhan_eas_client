import React from "react";
import notice from "../../images/notice.gif";
import JTI from "../../images/jti.png";

const HomeBody = () => {
  return (
    <div>
      <div className="login-page container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <h4 style={{ color: "red" }}>JTI Trade Program</h4>
            <p className="font-weight-bold">FOR</p>
            <img className="img-fluid" src={JTI} alt="" />
          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={notice} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
