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
      <div className="profileScreen_body flex flex-col w-2/4 ml-auto mr-auto pt-20 max-w-3xl">
        <h1 className="text-6xl font-normal border-b border-gray-light mb-5">Edit Profile</h1>
        <div className="profileScreen_ info flex">
          <img
            className="h-24"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen_details text-white ml-6 flex-1">
            <h2 className="bg-gray-light p-4 text-sm pl-5">{user.email}</h2>
            <div className="profileScreen_plans">
              <button 
              onClick={() => auth.signOut()}
              className="profileName_signOut border-none py-2 px-5 mt-2 w-full text-white bg-orange-netflix">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
