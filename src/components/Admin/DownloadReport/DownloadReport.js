import React, { useState } from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const DownloadReport = () => {
  const [reportDate, setReportDate] = useState("");
  const [brReport, setBRReport] = useState([]);
  const [territoryReport, setTerritoyReport] = useState([]);
  const [areaReport, setAreaReport] = useState([]);
  const [regionReport, setRegionReport] = useState([]);
  console.log(territoryReport);
  const manageReportDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth() + 1;
    let yy = d.getFullYear();
    setReportDate(
      yy + "-" + (mn <= 9 ? "0" + mn : mn) + "-" + (dt <= 9 ? "0" + dt : dt)
    );
  };
  const handleReport = () => {
    fetch(`http://localhost:6010/getBRReport/${reportDate}`)
      .then((res) => res.json())
      .then((data) => setBRReport(data));
    fetch(`http://localhost:6010/getTerritoryReport/${reportDate}`)
      .then((res) => res.json())
      .then((data) => setTerritoyReport(data));
    fetch(`http://localhost:6010/getAreaReport/${reportDate}`)
      .then((res) => res.json())
      .then((data) => setAreaReport(data));
    fetch(`http://localhost:6010/getRegionReport/${reportDate}`)
      .then((res) => res.json())
      .then((data) => setRegionReport(data));
  };
  return (
    <div>
      <input
        onChange={manageReportDate}
        className="form-control w-25"
        placeholder="yyyy/mm/dd"
        name="date"
        type="date"
        required
      />
      <button className="btn btn-primary mt-3" onClick={handleReport}>
        get Report
      </button>
      <div
        className="mt-3"
        style={{ display: brReport.length > 0 ? "block" : "none" }}
      >
        {/* BR Start */}
        <ExcelFile
          element={<button className="btn btn-info">Download BR Report</button>}
        >
          <ExcelSheet data={brReport} name="BRReports">
            <ExcelColumn
              label="Date"
              value={(col) => new Date(col.date).toLocaleDateString()}
            />
            <ExcelColumn label="Micro site LOG IN ID" value="userId" />
            <ExcelColumn label="region" value="region" />
            <ExcelColumn label="area" value="area" />
            <ExcelColumn label="territory" value="territory" />
            <ExcelColumn label="agencyName" value="agencyName" />
            <ExcelColumn label="Total Allacation" value="allocated_target" />
            <ExcelColumn label="Total Data Achieved" value="total_data_count" />
            <ExcelColumn
              label="Total Data Achieved %"
              value="total_data_achived_percentage"
            />
            <ExcelColumn label="Valid Data" value="valid_Data_count" />
            <ExcelColumn label="Valid Data %" value="valid_data_percentage" />
            <ExcelColumn label="Duplicate Data" value="dublicate_Data_count" />
            <ExcelColumn
              label="Duplicate Data %"
              value="dublicate_data_percentage"
            />
            <ExcelColumn label="Error Data" value="error_Data_count" />
            <ExcelColumn label="Error Data %" value="error_data_percentage" />
            <ExcelColumn label="Total Dial Call" value="total_dial_call" />
            <ExcelColumn
              label="Total Connected Call"
              value="total_connected_call"
            />
            <ExcelColumn
              label="Total Connected Call %"
              value="total_connected_call_percentage"
            />
            <ExcelColumn
              label="EAS Did not Gave permission to continue call"
              value="not_permitted_to_call"
            />
            <ExcelColumn
              label="EAS Gave permission to continue call"
              value="permitted_to_call"
            />
            <ExcelColumn
              label="Call Continue permission (%)"
              value="call_permission_percentage"
            />
            <ExcelColumn label="Below 18" value="bellow_18" />
            <ExcelColumn label="EAS is a Non-Smoker" value="non_smoker" />
            <ExcelColumn
              label="BA Did not pay Visit"
              value="ba_did_not_pay_visit"
            />
            <ExcelColumn label="Total Fake Call" value="total_fake_call" />
            <ExcelColumn label="Fake Call %" value="fake_call_percentage" />
            <ExcelColumn label="BA Did Visit" value="ba_did_visit" />
            <ExcelColumn
              label="Right Franchise/SOB (Current brand: Real,Hollywood & Derby, Royals)"
              value="right_franchise"
            />
            <ExcelColumn
              label="Minimum 1stick purchase"
              value="stick_purchase"
            />
          </ExcelSheet>
        </ExcelFile>
        {/* BR END */}
      </div>
      <div
        className="mt-3"
        style={{ display: areaReport.length > 0 ? "block" : "none" }}
      >
        {/* Area Start */}
        <ExcelFile
          element={
            <button className="btn btn-info">Download Area Report</button>
          }
        >
          <ExcelSheet data={areaReport} name="AreaReports">
            <ExcelColumn
              label="Date"
              value={(col) => new Date(col.date).toLocaleDateString()}
            />
            <ExcelColumn label="Micro site LOG IN ID" value="userId" />
            <ExcelColumn label="region" value="region" />
            <ExcelColumn label="area" value="area" />
            <ExcelColumn label="territory" value="territory" />
            <ExcelColumn label="agencyName" value="agencyName" />
            <ExcelColumn label="Total Allacation" value="allocated_target" />
            <ExcelColumn label="Total Data Achieved" value="total_data_count" />
            <ExcelColumn
              label="Total Data Achieved %"
              value="total_data_achived_percentage"
            />
            <ExcelColumn label="Valid Data" value="total_valid_data" />
            <ExcelColumn
              label="Valid Data %"
              value="total_valid_data_percentage"
            />
            <ExcelColumn label="Duplicate Data" value="total_dublicate_data" />
            <ExcelColumn
              label="Duplicate Data %"
              value="total_dublicate_data_percentage"
            />
            <ExcelColumn label="Error Data" value="total_error_data" />
            <ExcelColumn
              label="Error Data %"
              value="total_error_data_percentage"
            />
            <ExcelColumn label="Total Dial Call" value="total_dial_call" />
            <ExcelColumn
              label="Total Connected Call"
              value="total_connected_call"
            />
            <ExcelColumn
              label="Total Connected Call %"
              value="total_connected_call_percentage"
            />
            <ExcelColumn
              label="EAS Did not Gave permission to continue call"
              value="not_permitted_to_call"
            />
            <ExcelColumn
              label="EAS Gave permission to continue call"
              value="permitted_to_call"
            />
            <ExcelColumn
              label="Call Continue permission (%)"
              value="call_permission_percentage"
            />
            <ExcelColumn label="Below 18" value="bellow_18" />
            <ExcelColumn label="EAS is a Non-Smoker" value="non_smoker" />
            <ExcelColumn
              label="BA Did not pay Visit"
              value="ba_did_not_pay_visit"
            />
            <ExcelColumn label="Total Fake Call" value="total_fake_call" />
            <ExcelColumn label="Fake Call %" value="fake_call_percentage" />
            <ExcelColumn label="BA Did Visit" value="ba_did_visit" />
            <ExcelColumn
              label="Right Franchise/SOB (Current brand: Real,Hollywood & Derby, Royals)"
              value="right_franchise"
            />
            <ExcelColumn
              label="Minimum 1stick purchase"
              value="stick_purchase"
            />
          </ExcelSheet>
        </ExcelFile>
        {/* Area End */}
      </div>
      <div
        className="mt-3"
        style={{ display: territoryReport.length > 0 ? "block" : "none" }}
      >
        {/* Territory Start */}
        <ExcelFile
          element={
            <button className="btn btn-info">Download Territory Report</button>
          }
        >
          <ExcelSheet data={territoryReport} name="TerritoryReports">
            <ExcelColumn
              label="Date"
              value={(col) => new Date(col.date).toLocaleDateString()}
            />
            <ExcelColumn label="Micro site LOG IN ID" value="userId" />
            <ExcelColumn label="region" value="region" />
            <ExcelColumn label="area" value="area" />
            <ExcelColumn label="territory" value="territory" />
            <ExcelColumn label="agencyName" value="agencyName" />
            <ExcelColumn label="Total Allacation" value="allocated_target" />
            <ExcelColumn label="Total Data Achieved" value="total_data_count" />
            <ExcelColumn
              label="Total Data Achieved %"
              value="total_data_achived_percentage"
            />
            <ExcelColumn label="Valid Data" value="total_valid_data" />
            <ExcelColumn
              label="Valid Data %"
              value="total_valid_data_percentage"
            />
            <ExcelColumn label="Duplicate Data" value="total_dublicate_data" />
            <ExcelColumn
              label="Duplicate Data %"
              value="total_dublicate_data_percentage"
            />
            <ExcelColumn label="Error Data" value="total_error_data" />
            <ExcelColumn
              label="Error Data %"
              value="total_error_data_percentage"
            />
            <ExcelColumn label="Total Dial Call" value="total_dial_call" />
            <ExcelColumn
              label="Total Connected Call"
              value="total_connected_call"
            />
            <ExcelColumn
              label="Total Connected Call %"
              value="total_connected_call_percentage"
            />
            <ExcelColumn
              label="EAS Did not Gave permission to continue call"
              value="not_permitted_to_call"
            />
            <ExcelColumn
              label="EAS Gave permission to continue call"
              value="permitted_to_call"
            />
            <ExcelColumn
              label="Call Continue permission (%)"
              value="call_permission_percentage"
            />
            <ExcelColumn label="Below 18" value="bellow_18" />
            <ExcelColumn label="EAS is a Non-Smoker" value="non_smoker" />
            <ExcelColumn
              label="BA Did not pay Visit"
              value="ba_did_not_pay_visit"
            />
            <ExcelColumn label="Total Fake Call" value="total_fake_call" />
            <ExcelColumn label="Fake Call %" value="fake_call_percentage" />
            <ExcelColumn label="BA Did Visit" value="ba_did_visit" />
            <ExcelColumn
              label="Right Franchise/SOB (Current brand: Real,Hollywood & Derby, Royals)"
              value="right_franchise"
            />
            <ExcelColumn
              label="Minimum 1stick purchase"
              value="stick_purchase"
            />
          </ExcelSheet>
        </ExcelFile>
        {/* Territory Start */}
      </div>
      <div
        className="mt-3"
        style={{ display: regionReport.length > 0 ? "block" : "none" }}
      >
        {/* Region Start */}
        <ExcelFile
          element={
            <button className="btn btn-info">Download Region Report</button>
          }
        >
          <ExcelSheet data={regionReport} name="RegonReports">
            <ExcelColumn
              label="Date"
              value={(col) => new Date(col.date).toLocaleDateString()}
            />
            <ExcelColumn label="Micro site LOG IN ID" value="userId" />
            <ExcelColumn label="region" value="region" />
            <ExcelColumn label="area" value="area" />
            <ExcelColumn label="territory" value="territory" />
            <ExcelColumn label="agencyName" value="agencyName" />
            <ExcelColumn label="Total Allacation" value="allocated_target" />
            <ExcelColumn label="Total Data Achieved" value="total_data_count" />
            <ExcelColumn
              label="Total Data Achieved %"
              value="total_data_achived_percentage"
            />
            <ExcelColumn label="Valid Data" value="total_valid_data" />
            <ExcelColumn
              label="Valid Data %"
              value="total_valid_data_percentage"
            />
            <ExcelColumn label="Duplicate Data" value="total_dublicate_data" />
            <ExcelColumn
              label="Duplicate Data %"
              value="total_dublicate_data_percentage"
            />
            <ExcelColumn label="Error Data" value="total_error_data" />
            <ExcelColumn
              label="Error Data %"
              value="total_error_data_percentage"
            />
            <ExcelColumn label="Total Dial Call" value="total_dial_call" />
            <ExcelColumn
              label="Total Connected Call"
              value="total_connected_call"
            />
            <ExcelColumn
              label="Total Connected Call %"
              value="total_connected_call_percentage"
            />
            <ExcelColumn
              label="EAS Did not Gave permission to continue call"
              value="not_permitted_to_call"
            />
            <ExcelColumn
              label="EAS Gave permission to continue call"
              value="permitted_to_call"
            />
            <ExcelColumn
              label="Call Continue permission (%)"
              value="call_permission_percentage"
            />
            <ExcelColumn label="Below 18" value="bellow_18" />
            <ExcelColumn label="EAS is a Non-Smoker" value="non_smoker" />
            <ExcelColumn
              label="BA Did not pay Visit"
              value="ba_did_not_pay_visit"
            />
            <ExcelColumn label="Total Fake Call" value="total_fake_call" />
            <ExcelColumn label="Fake Call %" value="fake_call_percentage" />
            <ExcelColumn label="BA Did Visit" value="ba_did_visit" />
            <ExcelColumn
              label="Right Franchise/SOB (Current brand: Real,Hollywood & Derby, Royals)"
              value="right_franchise"
            />
            <ExcelColumn
              label="Minimum 1stick purchase"
              value="stick_purchase"
            />
          </ExcelSheet>
        </ExcelFile>
        {/* Region End */}
      </div>
    </div>
  );
};

export default DownloadReport;
