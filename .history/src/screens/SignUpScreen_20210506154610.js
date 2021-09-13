import React, { useRef } from "react";
import { auth } from "../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
          console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser) => {
        console.log(authUser);
    }).catch(error => alert(error.message));
  };

  return (
    <div className="signupScreen max-w-xs p-16 mr-auto ml-auto bg-black opacity-80">
      <form>
        <h1 className="text-left pb-2">Sign In</h1>
        <input
          ref={emailRef}
          className="text-black rounded-md p-10 outline-none h-10 mb-3 px-1 py-4"
          placeholder="Email"
          type="email"
        />
        <input
          ref={passwordRef}
          className="text-black rounded-md p-10 outline-none h-10 mb-3 px-1 py-4"
          placeholder="Password"
          type="password"
        />
        <button
          className="rounded-md cursor-pointer mt-2 font-medium p-16 py-2 text-sm text-white outline-none bg-orange-netflix"
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4 className="text-xs pt-4 text-left pl-1">
          <span className="text-gray-600 font-bold">New to Netflix?</span>
          <span
            className="cursor-pointer hover:underline pl-2"
            onClick={register}
          >
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
