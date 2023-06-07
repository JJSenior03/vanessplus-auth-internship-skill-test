import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import UserDataDisplay from "../components/UserDataDisplay";

const Home: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const navigate = useNavigate();

  const fetchUserData = async (userId: string) => {
    const db = firebase.firestore();
    const doc = await db.collection("users").doc(userId).get();

    if (doc.exists) {
      setUserData(doc.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      fetchUserData(user.uid);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate("/");
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return (
    <div>
      <h2>Home</h2>
      {userData ? (
        <div>
          <UserDataDisplay userData={userData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
