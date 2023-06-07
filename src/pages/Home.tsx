import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import UserDataDisplay from "../components/UserDataDisplay";

const Home: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

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

  return (
    <div className="flex flex-col items-center justify-center pt-12">
      {userData ? (
        <div className="shadow p-4 rounded-lg mb-4">
          <UserDataDisplay userData={userData} />
        </div>
      ) : (
        <p className="text-gray-500 p-4">Loading...</p>
      )}
    </div>
  );
};

export default Home;
