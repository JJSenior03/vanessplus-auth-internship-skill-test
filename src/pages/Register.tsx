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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true); // Start loading

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

    setIsLoading(false); // Stop loading
  };

  return (
    <div className="flex items-start justify-start">
      <div className="w-1/3 p-10 pt-7">
        <div className="flex items-center mb-4">
          <h2 className="text-5xl font-bold text-white mr-2">
            Create new account
          </h2>
          <h2 className="text-5xl font-bold text-orange-600">.</h2>
        </div>
        <p className="mb-4 text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600">
            Login
          </Link>
        </p>
        <form onSubmit={handleRegister} className="shadow rounded-lg">
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <InputField
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-2 w-full border-2 border-gray-200 rounded"
                label="First Name"
              />
            </div>
            <div className="w-1/2 ml-2">
              <InputField
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-2 w-full border-2 border-gray-200 rounded"
                label="Last Name"
              />
            </div>
          </div>
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 w-full border-2 border-gray-200 rounded"
            label="Email"
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 w-full border-2 border-gray-200 rounded"
            label="Password"
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-4 p-2 w-full border-2 border-gray-200 rounded"
            label="Confirm Password"
          />
          <InputBirthday
            birthDay={birthDay}
            birthMonth={birthMonth}
            birthYear={birthYear}
            setBirthDay={setBirthDay}
            setBirthMonth={setBirthMonth}
            setBirthYear={setBirthYear}
            className="mb-4 p-2 w-full border-2 border-gray-200 rounded"
          />
          <InputGender
            gender={gender}
            setGender={setGender}
            className="mb-4 p-2 w-full border-2 border-gray-200 rounded"
          />
          <InputField
            type="tel"
            placeholder="Mobile Phone"
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
            className="mb-4 p-2 w-full border-2 border-gray-200 rounded"
            label="Mobile Phone"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-500"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
