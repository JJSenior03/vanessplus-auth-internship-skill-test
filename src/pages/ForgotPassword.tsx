import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await firebase.auth().sendPasswordResetEmail(email);
      window.alert("A password reset link has been sent to your email.");
      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex items-start justify-start">
      <div className="w-1/3 p-10 pt-32">
        <div className="flex items-center mb-4">
          <h2 className="text-5xl font-bold text-white mr-2">
            Forgot Password
          </h2>
          <h2 className="text-5xl font-bold text-orange-600">.</h2>
        </div>
        <p className="mb-4 text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600">
            Login
          </Link>
        </p>
        <form onSubmit={handleForgotPassword} className="shadow rounded-lg">
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="mb-4 p-2 w-full border-2 border-gray-200 rounded"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-500"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
