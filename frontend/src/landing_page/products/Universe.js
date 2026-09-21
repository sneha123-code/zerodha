import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row"> 
          <div className="col-12 col-md-4 p-3 mt-5 text center">
          <img src="/media/smallcaseLogo.png" alt="SmallCase logo" style={{maxWidth:"150px"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5 text center">
          <img src="/media/goldenpiLogo.png" alt="GoldenPi logo" style={{maxWidth:"150px"} }/>
          <p className="text-small text-muted">Bond trading platform</p>
        </div>
        <div className="col - 12 col-md-4 p-3 mt-5">
          <img src="/media/streakLogo.png" alt="Streek logo" style={{maxWidth:"150px"}} />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className=" col-12 col-md-4 p-3 mt-5">
          <img src="/media/sensibullLogo.svg" alt="Sensibull logo" style={{maxWidth:"150px"}} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className=" col-12 col-md-4 p-3 mt-5">
          <img src="/media/dittoLogo.png" alt="ditto logo" style={{maxWidth:"150px"}}/>
          <p className="text-small text-muted">Isurance</p>
        </div>
        <div className="col -12 col-md-4 p-3 mt-5">
          <img src="/media/zerodhaFundhouse.png" alt="zerodhaFund logo" style={{maxWidth:"150px"}}/>
          <p className="text-small text-muted">Asset Management</p>
        </div>

        </div>
    

        <Link to="/signup">
      <Link to="/signup">
  <button
    className="p-2 btn btn-primary fs-5 mb-5"
    style={{ width: "20%", margin: "0 auto" }}
  >
    Signup Now
  </button>
</Link>
</Link>
      </div>
    </div>
  );
}

export default Universe;