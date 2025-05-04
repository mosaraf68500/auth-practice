import React, { use } from "react";
import { Link } from "react-router";
import { AuthContex } from "../contex/AuthContex";

const Login = () => {
    const {signInUser}=use(AuthContex);
  const handleLoginForm = (e) => {

    e.preventDefault();
    const target = e.target;

    const email = target.email.value;
    const password = target.password.value;
    console.log(email, password);
    signInUser(email,password)
    .then(result =>{
        console.log(result)
    })
    .then(error =>{
        console.log(error)
    })

  };
  return (
    <div className="card mx-auto py-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLoginForm} className="fieldset">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="py-3">
            Don't Have an account please{" "}
            <Link className="text-blue-600 " to="/registetion">
              Registetion
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
