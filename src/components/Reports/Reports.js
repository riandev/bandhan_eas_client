import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Alert, Col } from "react-bootstrap";

const Reports = () => {
  const [report, setReport] = useState([]);
  const [dates, setDates] = useState([]);
  const [downloaded, setDownloaded] = useState([]);
  useEffect(() => {
    fetch("http://67.21.32.75:6010/reports")
      .then((res) => res.json())
      .then((data) => {
        setReport(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://67.21.32.75:6010/reportDates")
      .then((res) => res.json())
      .then((data) => setDates(data));
  }, []);

  function handlePrepare(pdate) {
    console.log(pdate);
    fetch("http://67.21.32.75:6010/prepareByDate?date=" + pdate)
      .then((res) => res.json())
      .then((data) => setDownloaded(data));
  }

  function setShow() {
    setDownloaded([]);
  }

  let headers = [
    { label: "id", key: "id" },
    { label: "diid", key: "diid" },
    { label: "Mail", key: "Mail" },
    { label: "Data_Status", key: "Data_Status" },
    { label: "Operator_name", key: "Operator_name" },
    { label: "data_date", key: "data_date" },
    { label: "Months", key: "Months" },
    { label: "SL", key: "SL" },
    { label: "Page_no", key: "Page_no" },
    { label: "Rute_Name", key: "Rute_Name" },
    { label: "ba_id", key: "ba_id" },
    { label: "r_name", key: "r_name" },
    { label: "Consumer_No", key: "Consumer_No" },
    { label: "age", key: "age" },
    { label: "profession", key: "profession" },
    { label: "date_recorded", key: "date_recorded" },
    { label: "outlet_id", key: "outlet_id" },
    { label: "outlet_name", key: "outlet_name" },
    { label: "Presented_Address", key: "Presented_Address" },
    { label: "Which_brand_do_you_smoke", key: "Which_brand_do_you_smoke" },
    { label: "Territory", key: "Territory" },
    { label: "for_d", key: "for_d" },
    { label: "agentID", key: "agentID" },
    { label: "qcBy", key: "qcChecked" },
    { label: "qcDate", key: "qcDate" },
    { label: "qcTime", key: "qcTime" },
    { label: "rating", key: "rating" },
    { label: "callDate", key: "callDate" },
    { label: "callTime", key: "callTime" },
    { label: "q1", key: "answer1" },
    { label: "q2", key: "answer2" },
    { label: "q3", key: "answer3" },
    { label: "q4", key: "answer4" },
    { label: "q5", key: "answer5" },
    { label: "q6", key: "answer6" },
    { label: "q7", key: "answer7" },
    { label: "q8", key: "answer8" },
  ];
  return (
    <div className="mt-5">
      {downloaded.length > 0 && (
        <Alert onClose={() => setShow()} dismissible variant="success">
          Leads Prepared for Download
        </Alert>
      )}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Prepare</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((date, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{date?.date}</td>
                <td>
                  <button
                    onClick={() => handlePrepare(date?.date)}
                    className="btn btn-danger"
                  >
                    Prepare
                  </button>
                </td>
                <td>
                  <button className="btn btn-info">
                    <CSVLink
                      headers={headers}
                      title="Export data to CSV"
                      filename={`JTI_Trade_Program_${date?.date}.csv`}
                      data={downloaded}
                    >
                      `Download_${date?.date}`
                    </CSVLink>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <h4 className="text-secondary">Download Full Report Report</h4>
      </div>
      <div style={{ display: report.length > 0 ? "block" : "none" }}>
        <button className="btn btn-danger mt-3">
          <CSVLink
            headers={headers}
            title="Export data to CSV"
            filename={"JTI_Trade_Program.csv"}
            data={report}
          >
            Download
          </CSVLink>
        </button>
      </div>
    </div>
  );
};

export default Reports;
