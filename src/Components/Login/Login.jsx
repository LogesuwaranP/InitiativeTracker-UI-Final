import React, { useState } from "react";
import "./Login.css";
import { useContext } from "react";
import { signUpSchema } from "../validation/Validation";
import DataContext from "../../Data/DataContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const {
    setEmail,
    setPassword,
    setToggle,
    checkValues,
    email,
    password,
    authUser,
  } = useContext(DataContext);

  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        values.email = email;
        values.password = password;
        action.resetForm();
      },
    });

  function finalCheck(e) {
    handleBlur(e);
    handleSubmit(e);
    if (errors.email || errors.password) {
    } else {
      // console.log("hello");
      authUser();
    }
  }

  const [description, setDescription] = useState("");
  return (
    <div className="login-container">
      <div>
        <h1>Welcome Back!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          dolor.
        </p>
      </div>
      <div className="login-form">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="Name">Email </label>
          <input
            placeholder="E-mail"
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={(e) => {
              handleChange(e);
              setEmail(e.target.value);
            }}
            onBlur={handleBlur}
            style={errors.email && touched.email ? { borderColor: "red" } : {}}
          />
          {errors.email && touched.email ? (
            <p className="ERROR">{errors.email}</p>
          ) : null}
        </form>
        <form>
          <label htmlFor="Name">Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={(e) => {
              handleChange(e);
              setPassword(e.target.value);
            }}
            onBlur={handleBlur}
            style={
              errors.password && touched.password ? { borderColor: "red" } : {}
            }
          />
          {errors.password && touched.password ? (
            <p className="ERROR">{errors.password}</p>
          ) : null}
        </form>

        <div className="SUBMIT login" onClick={finalCheck}>
          Login
        </div>
      </div>
      <p>
        Don't have an account?{" "}
        <span className="LINK" onClick={() => setToggle(false)}>
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
