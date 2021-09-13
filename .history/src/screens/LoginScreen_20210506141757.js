import React, { useState } from "react";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="loginScreen relative h-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg")`,
      }}
    >
      <div className="loginScreen_background ">
        <img
          className="loginScreen_logo z-20 fixed left-0 w-36 object-contain pl-5 "
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() => setSignIn(true)}
          className="loginScreen_button fixed right-5 top-5 py-1 px-3 text-base text-white bg-orange-netflix cursor-pointer border-none z-20"
        >
          Sign In
        </button>
        <div className="loginScreen_gradient w-full h-screen z-10 bg-gradient-to-t from-gray-black via-transparent to-gray-black opacity-80" />
      </div>
      <div className="loginScreen_body absolute top-1/3 z-10 text-white px-10 text-center mr-auto ml-auto">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1 className="text-5xl font-bold text-center mr-auto mb-5">
              Unlimited films, TV programs and more
            </h1>
            <h2 className="text-2xl font-normal mb-7 text-center">
              Watch anywhere. Cancel any time.
            </h2>
            <h3 className="text-sm font-normal text-center">
              Ready to start? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input p-3 ">
              <form className="">
                <input
                  className=" p-2 h-10 w-1/3 border-none max-w-screen-sm outline-none"
                  type="email"
                  placeholder="Email Adress"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted text-base text-white bg-orange-netflix border-none font-semibold cursor-pointer px-3 py-2"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
