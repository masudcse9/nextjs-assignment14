'use client'
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const Logout = async () => {
    const res = await fetch("/api/login");
    const json = await res.json();

    if(json['status']===true)
    {
      router.replace('/')
    }
  };

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="#" onClick={Logout}> Logout </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
