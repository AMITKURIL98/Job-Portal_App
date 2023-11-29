import React from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.number) {
    errors.number = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.cpassword) {
    errors.cpassword = "Required";
  }
  if (!values.otp) {
    errors.otp = "Required";
  }

  return errors;
};

function SignUp() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("Visited", formik.touched);
  return (
    <>
      <Navbar />
      <div className=" flex mx-11 my-20 justify-between">
        <div className="bg-[#D9D9D9] text-black px-24 py-52 text-4xl font-normal font-[Inter] rounded-[30px]">
          student plan
        </div>

        <div className="bg-[#D9D9D9] text-black px-32 py-52 text-4xl font-normal font-[Inter] rounded-[30px]">
          TPO plan
        </div>
        <div className="bg-[#D9D9D9] text-black px-24 py-52 text-4xl font-normal font-[Inter] rounded-[30px]">
          Corporate plan
        </div>
      </div>
      <div className="bg-[#D9D9D9] m-9 p-16">
        <div className="text-[#080101] text-4xl font-[Inter] font-semibold flex justify-center py-10">
          Sign Up
        </div>
        <div className="m-16">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-between mb-10">
              <label className="pr-32 text-3xl flex mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-black px-44 py-2 text-black rounded-xl bg-[#DCE1F6]"
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-800">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="flex justify-between mb-10">
              <label className="text-3xl flex mb-1" htmlFor="number">
                Mobile Number
              </label>
              <input
                className="border-2 border-black px-44 py-2 text-black rounded-xl bg-[#DCE1F6]"
                type="number"
                id="number"
                name="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
              />
              {formik.touched.number && formik.errors.number ? (
                <div className="text-red-800">{formik.errors.number}</div>
              ) : null}
            </div>
            <div className="flex justify-between mb-10">
              <label className="pr-36 text-3xl flex mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-black px-44 py-2 text-black rounded-xl bg-[#DCE1F6]"
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-800">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="flex justify-between mb-10">
              <label className="pr-24 text-3xl flex mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 border-black px-44 py-2 text-black rounded-xl bg-[#DCE1F6]"
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-800">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="flex justify-between mb-10">
              <label className="text-3xl flex mb-1" htmlFor="cpassword">
                Confirm Password
              </label>
              <input
                className="border-2 border-black px-44 py-2 text-black rounded-xl bg-[#DCE1F6]"
                type="text"
                id="cpassword"
                name="cpassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cpassword}
              />
              {formik.touched.cpassword && formik.errors.cpassword ? (
                <div className="text-red-800">{formik.errors.cpassword}</div>
              ) : null}
            </div>
            <div className="flex justify-between mb-10">
              <label className="pr-44 text-3xl flex mb-1" htmlFor="otp">
                OTP
              </label>
              <input
                className="border-2 border-black px-44 py-2 text-black rounded-xl bg-[#DCE1F6]"
                type="text"
                id="otp"
                name="otp"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otp}
              />
              {formik.touched.otp && formik.errors.otp ? (
                <div className="text-red-800">{formik.errors.otp}</div>
              ) : null}
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <button className="inline-flex justify-center text-[#F2F2F2] text-4xl font-normal font-[Inter] bg-[#3626A7] px-24 py-5 rounded-[30px]">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
