import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "antd/dist/antd.css";
import Select from "react-select";

const options = [
  { value: "", label: "---" },
  { value: "Absent Minded", label: "Absent Minded" },
  { value: "AHT High", label: "AHT High" },
  { value: "Awareness Msg Missing", label: "Awareness Msg Missing" },
  { value: "Brand Msg Missing", label: "Brand Msg Missing" },
  { value: "Close Ending Missing", label: "Close Ending Missing" },
  { value: "Confused When Talking", label: "Confused When Talking" },
  { value: "CRM Not Followed", label: "CRM Not Followed" },
  { value: "Greeting Problem", label: "Greeting Problem" },
  { value: "Listening Problem", label: "Listening Problem" },
  { value: "Mumbling Problem", label: "Mumbling Problem" },
  { value: "Outstanding", label: "Outstanding" },
  { value: "Overlapping", label: "Overlapping" },
  { value: "Pronounciation Problem", label: "Pronounciation Problem" },
  { value: "Speaking Slowly", label: "Speaking Slowly" },
  { value: "Speaking Too Fast", label: "Speaking Too Fast" },
  { value: "Stop Middle Of Talking", label: "Stop Middle Of Talking" },
  { value: "Talking Roughly", label: "Talking Roughly" },
  { value: "Voice Low", label: "Voice Low" },
  { value: "Voice Not Clear", label: "Voice Not Clear" },
  { value: "Wrong CRM Input", label: "Wrong CRM Input" },
];

const FinalUpdateQc = ({ ansData, qcBy }) => {
  console.log(qcBy);
  const [status, setStatus] = useState(false);
  const [remarks, setRemarks] = useState([]);
  const id = ansData._id;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(remarks);
  const onSubmit = (data) => {
    data.qcChecked = qcBy;
    data.remarks = remarks;
    data.qcDate = new Date().toLocaleDateString();
    data.qcTime = new Date().toLocaleTimeString();
    console.log(data);
    fetch(`http://localhost:6010/finalUpdate/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((output) => {
        setStatus(output);
      });
    window.location.reload(true);
  };

  const handleMultiSelect = (value) => {
    setRemarks(value);
  };

  return (
    <div>
      <h3>Update Survey:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity1">
            <Form.Label>
              <b>Question 1</b>
            </Form.Label>
            <Form.Control
              {...register("answer1")}
              as="select"
              defaultValue={ansData.answer1}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity2">
            <Form.Label>
              <b>Question 2</b>
            </Form.Label>
            <Form.Control
              {...register("answer2")}
              as="select"
              defaultValue={ansData.answer2}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
              <option value="busy">ব্যাস্ত</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity3">
            <Form.Label>
              <b>Question 3</b>
            </Form.Label>
            <Form.Control
              {...register("answer3")}
              as="select"
              defaultValue={ansData.answer3}
            >
              <option>...</option>
              <option value="-18">১৮ এর নিচে</option>
              <option value="18-24">১৮-২৪</option>
              <option value="25-33">২৫-৩৩</option>
              <option value="34-50">৩৪-৫০</option>
              <option value="50+">৫০+</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity4">
            <Form.Label>
              <b>Question 4</b>
            </Form.Label>
            <Form.Control
              {...register("answer4")}
              as="select"
              defaultValue={ansData.answer4}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity5">
            <Form.Label>
              <b>Question 5</b>
            </Form.Label>
            <Form.Control
              {...register("answer5")}
              as="select"
              defaultValue={ansData.answer5}
            >
              <option>...</option>
              <option value="sheikh">শেখ</option>
              <option value="derby">ডার্বি</option>
              <option value="pilot">পাইলট</option>
              <option value="hollywood">হলিউড</option>
              <option value="royals">রয়েলস</option>
              <option value="marise">মেরিস</option>
              <option value="others">অন্যান্য</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity6">
            <Form.Label>
              <b>Question 6</b>
            </Form.Label>
            <Form.Control
              {...register("answer6")}
              as="select"
              defaultValue={ansData.answer6}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity7">
            <Form.Label>
              <b>Question 7</b>
            </Form.Label>
            <Form.Control
              {...register("answer7")}
              as="select"
              defaultValue={ansData.answer7}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity8">
            <Form.Label>
              <b>Question 8</b>
            </Form.Label>
            <Form.Control
              {...register("answer8")}
              as="select"
              defaultValue={ansData.answer8}
            >
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formGridCity13">
          <Form.Label>
            <b>Remarks</b>
          </Form.Label>
          <Select
            isMulti
            classNamePrefix="select"
            className="basic-multi-select w-75"
            name="colors"
            options={options}
            onChange={handleMultiSelect}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity14">
          <Form.Label>
            <b>Rating</b>
          </Form.Label>
          <Form.Control
            {...register("rating")}
            as="select"
            defaultValue={ansData.rating}
            className="w-50"
          >
            <option>...</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="fail">Fail</option>
          </Form.Control>
        </Form.Group>
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default FinalUpdateQc;
