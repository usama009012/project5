import React, { useState } from "react";
import {Formik,Form,Field,ErrorMessage } from "formik";

const initialValues = {
  fname: "",
  lname: "",
  age: "",
};
const onSubmit = (values) => {
  alert(JSON.stringify(values,null,2));
};

const validation = (values) => {
  let errors = {};
  if (!values.fname) {
    errors.fname = "required";
  }
  if (!values.lname) {
    errors.lname = "required";
  }
  if (!values.age) {
    errors.age = "required";
  }
  return errors;
};

function App() {

  

  return (
    <div>
      <Formik  
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validation}>
      <Form >
        <Field
          type="text"
          name="fname"
          id="fname"
          placeholder="Fname"
    
        />
       <ErrorMessage name="fname"></ErrorMessage>
        <Field
          type="text"
          name="lname"
          id="lname"
          placeholder="Lname"
        
        />
       <ErrorMessage name="lname"></ErrorMessage>
        <Field
          type="text"
          name="age"
          id="age"
          placeholder="Age"
         
        />
        <ErrorMessage name="age"></ErrorMessage>
        <button>submit</button>
      </Form>
      </Formik>
    </div>
  );
}

export default App;
