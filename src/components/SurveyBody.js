import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  const [notFound, setNotFound] = useState(false);
  console.log(consumer);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q7dot1, setQ7dot1] = useState(null);
  const [q8, setQ8] = useState(null);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://192.168.10.14:6010/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (e) => {
    setQ7(e.target.value);
  };
  const q7dot1value = (e) => {
    setQ7dot1(e.target.value);
  };
  const q8value = (e) => {
    setQ8(e.target.value);
  };

  const agent = sessionStorage.getItem("agent");
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans5: q5,
      ans6: q6,
      ans7: q7,
      ans7dot1: q7dot1,
      ans8: q8,
      agentID: agent,
      callDate: new Date().toLocaleDateString(),
      callTime: new Date().toLocaleTimeString(),
    };
    fetch(`http://192.168.10.14:6010/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(answer);
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      {/* <div
        style={{
          display: consumer === null ? "none" : "block",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div> */}
      <div
        style={{
          display: consumer === null ? "none" : "block",
        }}
        className="mt-2"
      >
        <h6>
          ১.আসসালামুআলাইকুম, আমি একটি রিসার্চ কোম্পানি থেকে ফোন করেছি । আমি কি
          আপনার সাথে একটু কথা বলতে পারি?
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুনবা কথা শেষ করে
          সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
            <option value="busy">ব্যাস্ত</option>
          </Form.Control>
        </Form.Group>
      </div>
      <p
        className="font-weight-bold"
        style={{ display: q2 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জানানো যাচ্ছে যে কলটি রেকর্ড করা হচ্ছে এবং আপনার
        ব্যাক্তিগত তথ্য ভবিষ্যতে পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৩. স্যার, আমি <b>{consumer?.outlet_name}</b> , এর থেকে আপনার মোবাইল
          নম্বরটি পেয়েছি , ( তার দোকানের নাম : <b>{consumer?.outlet_name}</b> ,
          ঠিকানা : <b>{consumer?.Territory}</b>)
        </h6>
        <p className="text-secondary">
          যদি পরিচয় শুনে সে চিনতে পারে, তাহলে কথা চালিয়ে যাবেন
        </p>
        <Form.Group onChange={q3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="remembered">চিনতে পেরেছে</option>
            <option value="notRemembered">চিনতে পারেননি</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q3 === "remembered" || q3 === "notRemembered" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>৪. স্যার, আপনার বয়স কতো, সেটি কি জানতে পারি?</h6>
        <p className="text-secondary">
          (যদি উত্তর আসে ‘১৮ বছরের বেশি’ তবে কথা বলা চালিয়ে যাবেন, নতুবা
          ধন্যবাদ দিয়ে কথা শেষ করে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="-18">১৮ এর নিচে</option>
            <option value="18-24">১৮-২৪</option>
            <option value="25-33">২৫-৩৩</option>
            <option value="34-50">৩৪-৫০</option>
            <option value="50+">৫০+</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q4 === "18-24" || q4 === "25-33" || q4 === "34-50" || q4 === "50+"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৫. স্যার, আপনি কি ধূমপান করেন?</h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ হয় তবে জিজ্ঞসা করবে ৬নং প্রশ্ন। যদি উত্তর না আসে তবে
          ধন্যবাদ দিয়ে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q5 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৬. স্যার, আমি কি জানতে পারি, আপনি কোন ব্র্যান্ড এর সিগারেট ধুমপান
          করেন?
        </h6>
        <Form.Group onChange={q6value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="sheikh">শেখ</option>
            <option value="navy">নেভি</option>
            <option value="real">রিয়েল</option>
            <option value="derby">ডার্বি</option>
            <option value="pilot">পাইলট</option>
            <option value="hollywood">হলিউড</option>
            <option value="royols">রয়েলস</option>
            <option value="marise">মেরিস</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            (q6 === "sheikh" ||
              q6 === "derby" ||
              q6 === "pilot" ||
              q6 === "hollywood" ||
              q6 === "royols" ||
              q6 === "marise" ||
              q6 === "others" ||
              q6 === "navy" ||
              q6 === "real") &&
            consumer?.smoking_brand === "NavyOption"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৭. সম্প্রতি <b>{consumer?.outlet_name}</b> দোকানদার ভাই কি আপনাকে
          জানিয়েছেন, যে নেভি অপশন সিগারেট নিশ্চিত করছে " ৭ টাকায় বেরি ক্যাপসুলে
          স্মার্ট অপশন?
        </h6>
        <Form.Group onChange={q7value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            (q6 === "sheikh" ||
              q6 === "derby" ||
              q6 === "pilot" ||
              q6 === "hollywood" ||
              q6 === "royols" ||
              q6 === "marise" ||
              q6 === "others" ||
              q6 === "navy" ||
              q6 === "real") &&
            consumer?.smoking_brand === "SheikhLEP"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৭.১ সম্প্রতি <b>{consumer?.outlet_name}</b> দোকানদার ভাই কি আপনাকে
          জানিয়েছেন, যে “প্রথমবার স্টিক ডিজাইনে স্বপ্নের তিন শহর নিয়ে এলো শেখ ?
        </h6>
        <Form.Group onChange={q7dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q7 === "yes" || q7 === "no" || q7dot1 === "yes" || q7dot1 === "no"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৮. আপনি কি ভবিষ্যতে <b> {consumer?.smoking_brand} </b> সিগারেট পান
          করবেন?
        </h6>
        <Form.Group onChange={q8value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q2 === "no" ||
            q2 === "busy" ||
            q3 === "notRemembered" ||
            q4 === "-18" ||
            q5 === "no" ||
            q8 === "yes" ||
            q8 === "no"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>
          ধন্যবাদ স্যার, আপনার মূল্যবান সময় দেয়ার জন্য। (বন্ধন দোকানদার এর
          নাম) এর সাথেই থাকুন।
        </h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
