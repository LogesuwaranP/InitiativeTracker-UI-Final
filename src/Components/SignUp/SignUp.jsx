import React,{useContext} from 'react'
import "./SignUp.css"
import DataContext from '../../Data/DataContext';
import { signUpSchema } from "../validation/Validation";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
  const {setEmail, setUserName, setPassword, setConfirmPassword, setToggle, checkValues, email, password,confirmPassword,userName} = useContext(DataContext);
  const initialValues = {
    email: "",
    password: "",
    confirmPassword:"",
    name:""
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        values.email = email;
        values.password = password;
        values.confirmPassword=confirmPassword;
        values.name=userName;
        action.resetForm();
      },
    });


    function finalCheck(e) {
      //  handleBlur(e);
      //  handleSubmit(e);
       if(errors.email||errors.password||errors.confirmPassword||errors.email)   
       {

       }
       else
       {
        console.log(email);
          if(email)
          {
            axios.post("https://localhost:7265/api/User",
            {
              userName:userName,
              email:email,
              password:password
            } ).then((response)=>{
                console.log(response.data);
                navigate("/");

            })
            
          }
          
       }
       
    }
  return (
    <div className='signup-container'>
        <div>
            <h2>Join Our team</h2>
        </div>
        <div className='signup-input'>
            <form action="">
                <label htmlFor="Name">Email </label>
                <input
                required
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
          ) : null} </form>
          <form>
                <label htmlFor="Name">User Name</label>
                <input placeholder='User Name' type='name'  name="name"
            id="name"
            value={values.name}
            onChange={(e) => {
              handleChange(e);
              setUserName(e.target.value);
            }}
            onBlur={handleBlur}
            style={errors.name && touched.name ? { borderColor: "red" } : {}}/>
         {errors.name && touched.name ? (
            <p className="ERROR">{errors.name}</p>
          ) : null}</form>
        <form>   <label htmlFor="Name">Password</label>
          <input
            required
            placeholder="Password"
            type="password" name="password"
            id="password"
            value={values.password}
            onChange={(e) => {
              handleChange(e);
              setPassword(e.target.value);
            }}
            onBlur={handleBlur}
            style={errors.password && touched.password ? { borderColor: "red" } : {}}
          />  {errors.password && touched.password ? (

            <p className="ERROR">{errors.password}</p>

        ) : null}</form>
        <form>
                <label htmlFor="Name">Confirm Password</label>
                <input placeholder='confirm Password' type='password' name="confirmPassword"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={(e) => {
              handleChange(e);
              setConfirmPassword(e.target.value);
            }}
            onBlur={handleBlur}
            style={errors.confirmPassword && touched.confirmPassword ? { borderColor: "red" } : {}}
          />  {errors.confirmPassword && touched.confirmPassword ? (

            <p className="ERROR">{errors.confirmPassword}</p>

        ) : null}
            </form>
            
        </div>
        <div className='register-container'>
            <div className='terms'>
                <input type='checkbox'/>
                <p>Accept Terms & Conditions</p>
            </div>
            <div className='SUBMIT register' onClick={finalCheck}>Register</div>
        </div>
        <div>
            <p>Already Registered? <span className='LINK' onClick={()=>setToggle(true)}>Login here</span></p>
        </div>
      
    </div>
  )
}

export default SignUp
