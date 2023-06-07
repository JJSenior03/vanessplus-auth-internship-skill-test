import React from "react";

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
    <div className="flex items-center mb-4 pb-6">
      <h2 className="text-5xl font-bold text-white mr-2">
        Welcome {userData.firstName}
      </h2>
      <h2 className="text-5xl font-bold text-orange-600">!</h2>
    </div>
    <div className="flex">
      <div className="w-1/2">
        <p className="text-2xl font-bold text-white mr-2">
          Name
          <br />
          <p className="text-lg font-thin text-white mr-2">
          {userData.firstName} {userData.lastName}
          </p>
        </p>
        <p className="text-2xl font-bold text-white mr-2">
          Gender
          <br />
          <p className="text-lg font-thin text-white mr-2">
          {userData.gender}
          </p>
        </p>
        <p className="text-2xl font-bold text-white mr-2">
          Email
          <br />
          <p className="text-lg font-thin text-white mr-2">
          {userData.email}
          </p>
        </p>
      </div>
      <div className="w-1/2">
        <p className="text-2xl font-bold text-white mr-2">
          Birthday
          <br />
          <p className="text-lg font-thin text-white mr-2">
          {userData.dateOfBirth}
          </p>
        </p>
        <p className="text-2xl font-bold text-white mr-2">
          Mobile Phone
          <br />
          <p className="text-lg font-thin text-white mr-2">
          {userData.mobilePhone}
          </p>
        </p>
      </div>
    </div>
  </div>
);

export default UserDataDisplay;
