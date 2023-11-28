import React from "react";
import { useFormik } from "formik";


const initialValues = {
  name: "Your Name",
  email: "abc@gmail.come",
  channel: "your channel name",
};
const onSubmit = values =>{
    console.log('Form data', values)
  }
const validate = values =>{
  let errors = {}

  if(!values.name){
    errors.name = 'Required'
  }
  if(!values.email){
    errors.email = 'Required'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Invalid email format'
  }
  if(!values.channel){
    errors.channel = 'Required'
  }

  return errors 
}




function Form() {
 const formik = useFormik({
  initialValues,
  onSubmit,
  validate:
})
 console.log('Form values',formik.values)
  return (
    <>
      <div className="flex justify-center border-2 border-black">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex-col">
            <label className="text-3xl flex mb-1" htmlFor="name">
              Name:
            </label>
            <input
              className="border-2 border-black px-10 py-2"
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div>
            <label className="text-3xl flex mb-1" htmlFor="email">
              Email:
            </label>
            <input
              className="border-2 border-black px-10 py-2"
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div>
            <label className="text-3xl flex mb-1" htmlFor="name">
              Channel:
            </label>
            <input
              className="border-2 border-black px-10 py-2"
              type="text"
              id="channel"
              name="channel"
              onChange={formik.handleChange}
              value={formik.values.channel}
            />
          </div>
          <div>
            <button className="m-5 text-white text-3xl px-6 py-4 bg-blue-800 rounded-3xl"
            type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
