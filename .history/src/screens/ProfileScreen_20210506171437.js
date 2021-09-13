import React from "react"
import Nav from "../Nav"


const ProfileScreen = () => {
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1>edit Profile</h1>
                <div className="profileScreen_ info">
                    <img 
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
