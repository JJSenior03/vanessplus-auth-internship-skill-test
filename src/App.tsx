import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebaseConfig";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";
import NavBar from "./components/NavBar";


firebase.initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
