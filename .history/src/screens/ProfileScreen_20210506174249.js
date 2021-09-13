import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen h-screen text-white">
      <Nav />
      <div className="profileScreen_body flex flex-col w-2/4 ml-auto mr-auto pt-8 max-w-3xl">
        <h1 className="text-6xl font-normal border-b border-gray-light">edit Profile</h1>
        <div className="profileScreen_ info flex">
          <img
            className="h-24"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <button 
              onClick={() => auth.signOut()}
              className="profileName_signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
