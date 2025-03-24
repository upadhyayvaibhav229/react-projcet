import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema,
    onSubmit: (values) => {
      alert(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />
      {formik.errors.name && <div>{formik.errors.name}</div>}
      
      <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
      {formik.errors.email && <div>{formik.errors.email}</div>}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
