import React from "react"

function SignUpScreen() {
    return (
        <div className="signupScreen max-w-xs p-16 mr-auto ml-auto bg-black opacity-80">
            <form >
                <h1 className="text-left pb-2">Sign In</h1>
                <input className="rounded-md p-10 outline-none h-10 mb-3 px-1 py-4" placeholder="Email" type="email" />
                <input className="rounded-md p-10 outline-none h-10 mb-3 px-1 py-4" placeholder="Password" type="password" />
                <button className="flex-row rounded-md cursor-pointer mt-2 font-medium p-20 py-2 text-sm text-white outline-none bg-orange-netflix" type="submit">Sign In</button>
                <h4 className="text-xs pt-4 text-left ">New to Netflix? Sign Up now</h4>
            </form>
        </div>
    )
}

export default SignUpScreen
