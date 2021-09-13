import React from "react";

function Nav() {
  return (
    <div className="nav">
      <div className="nav_contents flex justify-between">
        <img className="nav_logo w-20 fixed left-0 cursor-pointer"
          src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
          alt=""
        />
        <img className="nav_avatar fixed right-5 w-9 cursor-pointer "
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt=""
        />
        <h1 className="text-white">test stesetga</h1>
      </div>
    </div>
  );
}

export default Nav;
