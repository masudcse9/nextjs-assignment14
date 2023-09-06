"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navmenu from "@/components/Navmenu";

const page = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const inputChange = (name, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const Register = async (e) => {
    e.preventDefault();
    if (formValue.name.length === 0) {
      alert("Name Required");
    } else if (formValue.email.length === 0) {
      alert("Email Required");
    } else if (formValue.password.length === 0) {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/register", config);
      const json = await response.json();
      if (json["status"] === true) {
        alert(json["message"]);
        router.replace("/login");
      } else {
        alert(json["message"]);
      }
    }
  };

  return (
    <div className="container mx-auto flex">
      <div className="row mx-auto pt-36">

      <div className="w-full bg-white px-16">
          <Navmenu />
        </div>
        
        
        <form onSubmit={Register} class="w-full bg-white px-16 py-5">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Register here
              </label>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                name="name"
                type="text"
                placeholder="Enter name"
                value={formValue.name}
                onChange={(e) => inputChange("name", e.target.value)}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                name="email"
                type="text"
                placeholder="Enter email"
                value={formValue.email}
                onChange={(e) => inputChange("email", e.target.value)}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                name="password"
                type="password"
                placeholder="***********"
                value={formValue.password}
                onChange={(e) => inputChange("password", e.target.value)}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
