import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Alert, Col } from "react-bootstrap";

const Reports = () => {
  const [report, setReport] = useState([]);
  const [dates, setDates] = useState([]);
  const [downloaded, setDownloaded] = useState([]);
  useEffect(() => {
    fetch("http://192.168.10.14:6010/reports")
      .then((res) => res.json())
      .then((data) => {
        setReport(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://192.168.10.14:6010/reportDates")
      .then((res) => res.json())
      .then((data) => setDates(data));
  }, []);

  function handlePrepare(pdate) {
    console.log(pdate);
    fetch("http://192.168.10.14:6010/prepareByDate?date=" + pdate)
      .then((res) => res.json())
      .then((data) => setDownloaded(data));
  }

  function setShow() {
    setDownloaded([]);
  }

  let headers = [
    { label: "diid", key: "diid" },
    { label: "Date", key: "Date" },
    { label: "Region", key: "Region" },
    { label: "Area", key: "Area" },
    { label: "Territory", key: "Territory" },
    { label: "outlet_code", key: "outlet_code" },
    { label: "outlet_name", key: "outlet_name" },
    { label: "Retailer_Phone", key: "Retailer_Phone" },
    { label: "Consumer_No", key: "Consumer_No" },
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
    { label: "q7dot1", key: "answer7dot1" },
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
                      filename={`Bandhan_EAS_${date?.date}.csv`}
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
            filename={"Bandhan_EAS.csv"}
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
