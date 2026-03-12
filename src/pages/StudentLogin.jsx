import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function StudentLogin() {
  const navigate = useNavigate();

  const [FormData, SetFormData] = useState({
    username: "",
    password: "",
  });

  //to handle data in fields
  function handleChange(e) {
    //alert("handle change called");
    //console.log(e.target.value)
    const { name, value } = e.target; //e is an event object
    SetFormData({ ...FormData, [name]: value }); //....spread property
  }

  const handleSubmit = async (e) => {
    // e is error object
    e.preventDefault(); //to prevent default behaviour of form submit donot go to next page whrn submit button is clicked
    try {
      const response = await axios.post(
        "http://localhost:1235/studentapi/login",
        FormData,
      );
      if (response.status == 200) {
        //alert("Login Successful");
        sessionStorage.setItem("isStudent", true);
        navigate("/student/home");
        window.location.reload();
      } else {
        alert("Login Failed");
        //alert(response.data);
      }
    } catch (err) {
      // alert(e.response.data);
      alert(err.response?.data || err.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Student Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>UserName</label>
          <input type="text" name="username" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
