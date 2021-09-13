import React from "react"

function SignUpScreen() {
    return (
        <div className="signupScreen max-w-xs p-16 mr-auto ml-auto bg-black opacity-80">
            <form >
                <h1>Sign In</h1>
                <input className="p-10 outline-none h-10 mb-3 px-1 py-4" placeholder="Email" type="email" />
                <input className="p-11 outline-none h-10 mb-3 px-1 py-4" placeholder="Password" type="password" />
                <button className="px-20 py-4 text-sm text-white outline-none bg-orange-netflix" type="submit">Sign In</button>
                <h4></h4>
            </form>
        </div>
    )
}

export default SignUpScreen
