import React from "react";

const LoginScreen = () => {
  return (
    <div className="loginScreen relative h-full ">
      <div className="loginScreen_background ">
        <img
          className="loginScreen_logo fixed left-0 w-36 object-contain pl-5 "
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginScreen_button fixed right-5 top-5 py-3 px-5 text-base text-white bg-orange">Sign In</button>
      </div>
    </div>
  );
};

export default LoginScreen;
