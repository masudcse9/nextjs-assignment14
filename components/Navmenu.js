import React from "react";
import Link from "next/link";

const Navmenu = () => {
  return (
    
    <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">Welcome</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link replace href={"/login"}>Login</Link>
            </li>
            <li>
              <Link replace href={"/register"}>Register</Link>
            </li>
            <li>
              <Link replace href={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navmenu;
