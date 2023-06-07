import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import InputField from "../components/InputField";
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await firebase.auth().sendPasswordResetEmail(email);
      window.alert("A password reset link has been sent to your email.");
      navigate('/login');
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
