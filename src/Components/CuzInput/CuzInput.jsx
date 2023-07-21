import React, { useState, useRef } from 'react';
import './CuzInput.css';

import { useFormik } from "formik";
import {signUpSchema} from '../validation/Validation';
const CuzInput = () => {
  const [content, setContent] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = () => {
    const newContent = inputRef.current.innerText;
    setContent(newContent);

  };
  const initialValues = {
description:""
  };
  const { values, errors, touched, handleBlur, handleChange } =
  useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    }})

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Handle sending the message or performing any action here
      // For example: sendMessage(content);
      setContent('');
    }
  };

  return (
      <div className="chat-input-container">
        <div
          className="chat-input"
          ref={inputRef}
          contentEditable
          onInput={handleInputChange}
          onKeyDown={handleKeyPress}
          name="summary"
          id="summary"
          placeholder="Enter Description"
          value={values.description}
          onChange={(e)=>{handleChange(e);setContent(console.log(e.target.value))}}
          onBlur={handleBlur}
          style={errors.description && touched.description ?{borderColor:"red"}:{}}
        />
    </div>
  );
};

export default CuzInput;
