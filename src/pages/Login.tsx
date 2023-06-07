import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import InputField from "../components/InputField";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true); // Start loading
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-start justify-start">
      <div className="w-1/3 p-10 pt-32">
        <div className="flex items-center mb-4">
          <h2 className="text-5xl font-bold text-white mr-2">Login</h2>
          <h2 className="text-5xl font-bold text-orange-600">.</h2>
        </div>
        <p className="mb-4 text-white">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500">
            Register
          </Link>
        </p>
        <form onSubmit={handleLogin} className="shadow rounded-lg">
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
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-500"
            disabled={isLoading} // Disable the button during loading
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          <button className="w-full text-white p-2 rounded">
            <Link to="/forgot-password" className="text-gray-400">
              Forgot Password?
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
