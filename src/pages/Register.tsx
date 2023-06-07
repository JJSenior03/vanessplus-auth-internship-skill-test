import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import InputField from "../components/InputField";
import InputBirthday from "../components/InputBirthday";
import InputGender from "../components/InputGender";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [birthDay, setBirthDay] = useState("1");
  const [birthMonth, setBirthMonth] = useState("January");
  const [birthYear, setBirthYear] = useState("2023");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const { user } = userCredential;

      if (user) {
        const db = firebase.firestore();
        const dateOfBirth = `${birthDay} ${birthMonth} ${birthYear}`;
        await db.collection("users").doc(user.uid).set({
          firstName,
          lastName,
          mobilePhone,
          dateOfBirth,
          gender,
          email,
        });
      }
      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <p>
        Already have a account? <Link to="/login">Login</Link>
      </p>
      <form onSubmit={handleRegister}>
        <InputField
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputField
          type="tel"
          placeholder="Mobile Phone"
          value={mobilePhone}
          onChange={(e) => setMobilePhone(e.target.value)}
        />
        <InputBirthday
          birthDay={birthDay}
          birthMonth={birthMonth}
          birthYear={birthYear}
          setBirthDay={setBirthDay}
          setBirthMonth={setBirthMonth}
          setBirthYear={setBirthYear}
        />
        <InputGender gender={gender} setGender={setGender} />
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
