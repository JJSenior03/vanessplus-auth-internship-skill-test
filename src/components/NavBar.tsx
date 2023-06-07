import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

const NavBar: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/login");
      });
  };

  return (
    <nav className="flex justify-between items-center py-2 px-4 text-white">
      <div className="flex items-center">
        <h1 className="text-2xl font-sans font-normal text-white p-6">VannessPlus</h1>
        <div className="align-middle">
          <Link to={user ? "/home" : "/login"} className="text-2xl font-sans font-thin text-white pl-8 pt-2 mt-4">Home</Link>
        </div>
      </div>
      <div className="pr-6">
        {user && (
          <button onClick={logOut} className="text-2xl font-sans font-thin text-white px-3 py-1">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
