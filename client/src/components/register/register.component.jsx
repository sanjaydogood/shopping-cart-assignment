import React from "react";
import { useForm } from "react-hook-form";

const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (details) => {
    if (details.loginPassword !== details.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match! Please check!",
      });
    }
  };

  return (
    <div className="container d-flex m-5">
      <div className="container px-5">
        <h2 style={{ fontWeight: "600" }}>Signup</h2>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <form
        className="container px-5 d-flex flex-column"
        style={{ margin: "0 5rem" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-wrapper d-flex flex-column">
          <div className="input-email-container d-flex justify-content-between my-3">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "First name is required!",
                pattern: {
                  value: /^[A-Za-z]*$/i,
                  message: "Invalid first name",
                },
              })}
              style={{ width: "15rem" }}
            />
          </div>
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}
        </div>
        <div className="input-wrapper d-flex flex-column">
          <div className="input-email-container d-flex justify-content-between my-3">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", {
                required: "Last name is required!",
                pattern: {
                  value: /^[A-Za-z]*$/i,
                  message: "Invalid last name",
                },
              })}
              style={{ width: "15rem" }}
            />
          </div>
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </div>
        <div className="input-wrapper d-flex flex-column">
          <div className="input-email-container d-flex justify-content-between my-3">
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
                  message:
                    "1. Minimum length 6 characters \n2. Must have a number and alphabet \n3. Cannot have spaces",
                },
              })}
              id="loginPassword"
              style={{ width: "15rem" }}
            />
          </div>
          {errors.loginPassword && (
            <pre style={{ color: "red" }}>{errors.loginPassword.message}</pre>
          )}
        </div>
        <div className="input-wrapper d-flex flex-column">
          <div className="input-password-container d-flex justify-content-between my-3">
            <label htmlFor="confirmPassword">Confirm password: </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm password!",
              })}
              id="confirmPassword"
              style={{ width: "15rem" }}
            />
          </div>
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
          )}
        </div>
        <button className="btn btn-primary mt-2">Login</button>
      </form>
    </div>
  );
};

export default RegisterComponent;
