import React, { use } from "react";
import { Link } from "react-router";
import { AuthContex } from "../contex/AuthContex";

const Registration = () => {

    const {createUser}=use(AuthContex);
   
  const handleRegistrationForm = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;

    const email = target.email.value;
    const password = target.password.value;
    console.log(name, email, password);

    // create user
    createUser(email,password)
    .then(result =>{
        console.log(result)
    })
    .then(error =>{
        console.log(error)
    })
  };

  return (
    <div className="card mx-auto py-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Registration now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegistrationForm} className="fieldset">
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Name"
            required
          />
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4" type="submit">
            Register
          </button>
          <p className="py-3">
            Already have an account? Please{" "}
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
