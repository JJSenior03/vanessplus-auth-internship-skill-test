import React from 'react';

type UserData = {
  firstName: string;
  lastName: string;
  mobilePhone: string;
  dateOfBirth: string;
  gender: string;
  email: string;
};

type Props = {
  userData: UserData;
};

const UserDataDisplay: React.FC<Props> = ({ userData }) => (
  <div>
    <h1>Welcome {userData.firstName}</h1>
    <p>Name: {userData.firstName} {userData.lastName}</p>
    <p>Mobile Phone: {userData.mobilePhone}</p>
    <p>Birthday: {userData.dateOfBirth}</p>
    <p>Gender: {userData.gender}</p>
    <p>Email: {userData.email}</p>
  </div>
);

export default UserDataDisplay;
