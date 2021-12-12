import React from "react";
import { useState } from "react";

const BrReport = () => {
  const [status, setStatus] = useState(false);
  const [territoryStatus, setTerritoryStatus] = useState(false);
  const [areaStatus, setAreaStatus] = useState(false);
  const [regionStatus, setRegionStatus] = useState(false);
  const [brDate, setBrDate] = useState("");
  const [territoryDate, setTerritoryDate] = useState("");
  const [areaDate, setAreaDate] = useState("");
  const [regionDate, setRegionDate] = useState("");
  const handleBrReport = () => {
    fetch(`http://192.168.10.14:6010/baReport/${brDate}`)
      .then((res) => res.json())
      .then((data) => setStatus(data));
  };
  const handleTerritoryReport = () => {
    fetch(`http://192.168.10.14:6010/territoryReport/${territoryDate}`)
      .then((res) => res.json())
      .then((data) => setTerritoryStatus(data));
  };
  const handleAreaReport = () => {
    fetch(`http://192.168.10.14:6010/areaReport/${areaDate}`)
      .then((res) => res.json())
      .then((data) => setAreaStatus(data));
  };
  const handleRegionReport = () => {
    fetch(`http://192.168.10.14:6010/regionReport/${regionDate}`)
      .then((res) => res.json())
      .then((data) => setRegionStatus(data));
  };
  const manageBrDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth() + 1;
    let yy = d.getFullYear();
    setBrDate(
      yy + "-" + (mn <= 9 ? "0" + mn : mn) + "-" + (dt <= 9 ? "0" + dt : dt)
    );
  };
  const manageTerritoryDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth() + 1;
    let yy = d.getFullYear();
    setTerritoryDate(
      yy + "-" + (mn <= 9 ? "0" + mn : mn) + "-" + (dt <= 9 ? "0" + dt : dt)
    );
  };
  const manageAreaDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth() + 1;
    let yy = d.getFullYear();
    setAreaDate(
      yy + "-" + (mn <= 9 ? "0" + mn : mn) + "-" + (dt <= 9 ? "0" + dt : dt)
    );
  };
  const manageRegionDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth() + 1;
    let yy = d.getFullYear();
    setRegionDate(
      yy + "-" + (mn <= 9 ? "0" + mn : mn) + "-" + (dt <= 9 ? "0" + dt : dt)
    );
  };
  return (
    <div>
      <div>
        <h5 className="mt-3">Generate BR Report</h5>
        <input
          onChange={manageBrDate}
          className="form-control w-25"
          placeholder="yyyy/mm/dd"
          name="date"
          type="date"
          required
        />
        <button onClick={handleBrReport} className="btn btn-danger">
          Generate BR Wise Report
        </button>
        <div
          style={{ display: status === true ? "block" : "none" }}
          className="mt-4"
        >
          <h3 style={{ color: "green", fontWeight: "bold" }}>
            Congratulations!
          </h3>
          <h5>Successfully BR Report generated</h5>
          <p className="text-secondary">
            For View Report Go Report View Section
          </p>
        </div>
      </div>
      <div>
        <h5 className="mt-3">Generate Territory Report</h5>
        <input
          onChange={manageTerritoryDate}
          className="form-control w-25"
          placeholder="yyyy/mm/dd"
          name="date"
          type="date"
          required
        />
        <button onClick={handleTerritoryReport} className="btn btn-danger">
          Generate Territory Wise Report
        </button>
        <div
          style={{ display: territoryStatus === true ? "block" : "none" }}
          className="mt-4"
        >
          <h3 style={{ color: "green", fontWeight: "bold" }}>
            Congratulations!
          </h3>
          <h5>Successfully Territory Report generated</h5>
          <p className="text-secondary">
            For View Report Go Report View Section
          </p>
        </div>
      </div>
      <div>
        <h5 className="mt-3">Generate Area Report</h5>
        <input
          onChange={manageAreaDate}
          className="form-control w-25"
          placeholder="yyyy/mm/dd"
          name="date"
          type="date"
          required
        />
        <button onClick={handleAreaReport} className="btn btn-danger">
          Generate Area Wise Report
        </button>
        <div
          style={{ display: areaStatus === true ? "block" : "none" }}
          className="mt-4"
        >
          <h3 style={{ color: "green", fontWeight: "bold" }}>
            Congratulations!
          </h3>
          <h5>Successfully Area Report generated</h5>
          <p className="text-secondary">
            For View Report Go Report View Section
          </p>
        </div>
      </div>
      <div>
        <h5 className="mt-3">Generate Region Report</h5>
        <input
          onChange={manageRegionDate}
          className="form-control w-25"
          placeholder="yyyy/mm/dd"
          name="date"
          type="date"
          required
        />
        <button onClick={handleRegionReport} className="btn btn-danger">
          Generate Region Wise Report
        </button>
        <div
          style={{ display: regionStatus === true ? "block" : "none" }}
          className="mt-4"
        >
          <h3 style={{ color: "green", fontWeight: "bold" }}>
            Congratulations!
          </h3>
          <h5>Successfully Region Report generated</h5>
          <p className="text-secondary">
            For View Report Go Report View Section
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrReport;
