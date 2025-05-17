import { Link } from "react-router-dom";
import "./Register.css";
import React from "react";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <h2>Create a new account</h2>
        <p>It's quick and easy.</p>
        <hr />
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <span>Date of birth</span>
        <div className="date">
          <select name="day" id="day">
            <option value="first">First</option>
            <option value="second">2</option>
          </select>
          <select name="month" id="month">
            <option value="october">October</option>
            <option value="november">November</option>
          </select>
          <select name="year" id="year">
            <option value="2002">2002</option>
            <option value="2003">2003</option>
          </select>
        </div>
        <span>Gender</span>
        <div className="gender">
          <div className="rad">
            <label htmlFor="male">Male</label>
            <input type="radio" name="male" id="male" value="male" />
          </div>
          <div className="rad">
            <label htmlFor="female">Female</label>
            <input type="radio" name="female" id="female" value="female" />
          </div>
          <div className="rad">
            <label htmlFor="custome">Custome</label>
            <input type="radio" name="custome" id="custome" value="custome" />
          </div>
        </div>
        <span>
          Users of our services may have uploaded your contact information to
          Facebook. <a href="home">Find out more</a> .
        </span>
        <span>
          By clicking Sign Up, you agree to our Terms , Privacy Policy and
          Cookie Policy . You can receive our notifications via SMS and
          unsubscribe at any time.
        </span>
        <button>Sign Up</button>
        <Link to="/login">Already have an account?</Link>
      </div>
    </div>
  );
};

export default Register;
