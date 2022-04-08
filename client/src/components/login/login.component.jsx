import React from "react";
import { useForm } from "react-hook-form";

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (details) => console.log(details);
  return (
    <div className="container d-flex m-5">
      <div className="container px-5">
        <h2 style={{ fontWeight: "600" }}>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <form
        className="container px-5 d-flex flex-column"
        style={{ margin: "0 5rem" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-wrapper d-flex flex-column">
          <div className="input-email-container d-flex justify-content-between">
            <label htmlFor="loginEmail">Email:</label>
            <input
              type="text"
              id="loginEmail"
              {...register("loginEmail", {
                required: "Email is required!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              style={{ width: "15rem" }}
            />
          </div>
          {errors.loginEmail && (
            <p style={{ color: "red" }}>{errors.loginEmail.message}</p>
          )}
        </div>
        <div className="input-wrapper d-flex flex-column">
          <div className="input-password-container d-flex justify-content-between my-3">
            <label htmlFor="loginPassword">Password: </label>
            <input
              type="password"
              {...register("loginPassword", {
                required: "Password is required!",
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,}$/i,
                  message: `1. Minimum length 6 characters \n
                  2. Must have a number and alphabet \n
                  3. Cannot have spaces`,
                },
              })}
              id="loginPassword"
              style={{ width: "15rem" }}
            />
          </div>
          {errors.loginPassword && (
            <p style={{ color: "red" }}>{errors.loginPassword.message}</p>
          )}
        </div>
        <button className="btn btn-primary mt-2">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
