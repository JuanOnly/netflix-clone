import React, { useEffect, useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    }else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
    
  }, []);

  return (
    <div className={`nav_black ${show && "bg-gradient-to-b from-black to-gray-light via-gray-dark"} fixed top-0 p-5 w-full h-16 z-10 transition ease-in duration-500`}>
      <div className="nav_contents flex justify-between">
        <img className="nav_logo top-0 w-28 ml-10 fixed left-0 cursor-pointer object-contain"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img className="nav_avatar fixed right-5 w-9 top-4 cursor-pointer "
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
