"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navmenu from "@/components/Navmenu";

const page = () => {
  const [formValue, setFormValue] = useState({
    otp: "",
  });
  const router = useRouter();

  const inputChange = (name, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const OtpSubmit = async (e) => {
    e.preventDefault();
    if (formValue.otp.length === 0) {
      alert("OTP Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/otp", config);

      const json = await response.json();
      if (json["status"] === true) {
        router.replace("/dashboard");
      } else {
        alert(json["message"]);
      }
    }
  };

  return (
    <div className="container mx-auto flex">
      <div className="row mx-auto pt-40">
        <div className="w-full bg-white px-16">
          <Navmenu />
        </div>

        <form onSubmit={OtpSubmit} class="w-full bg-white px-16 py-5">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Verification
              </label>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            {/* <h1 className="">Login</h1> */}
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                OTP Code <br />
                Please check your email address
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={formValue.otp}
                onChange={(e) => inputChange("otp", e.target.value)}
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Verification
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
