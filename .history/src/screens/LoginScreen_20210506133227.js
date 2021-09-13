import React from "react";

const LoginScreen = () => {
  return (
    <div
      className="loginScreen relative h-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          `url("https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg")`,
      }}
    >
      <div className="loginScreen_background ">
        <img
          className="loginScreen_logo z-20 fixed left-0 w-36 object-contain pl-5 "
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginScreen_button fixed right-5 top-5 py-1 px-3 text-base text-white bg-orange-netflix cursor-pointer border-none z-20">
          Sign In
        </button>
        <div className="loginScreen_gradient w-full h-screen z-10 bg-gradient-to-t from-gray-black via-transparent to-gray-black opacity-80" />
      </div>
      <div className="loginScreen_body absolute top-1/3 z-10 text-white p-20">
          <>
            <h1 className="text-5xl font-bold text-center mr-auto mb-5">Unlimited films, TV programs and more</h1>
            <h2>Watch anywhere. Cancel any time.</h2>
          </>
      </div>
    </div>
  );
};

export default LoginScreen;
