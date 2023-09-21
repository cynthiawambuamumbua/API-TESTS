import React, { useState } from "react";
import Head from "next/head";
const Navbar = () => {
  return (
    <>
      <Head>
        <title>Mooovie</title>
      </Head>
      <div className="bg--800 p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-black">
            m<span className="text-yellow-400">oo</span>vie
            </h1>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-l-lg bg-white-700 text-black outline-none"
              />
              <button
                className="px-4 py-2 bg-yellow-400 text-white rounded-r-lg mr-64"
              >
                Search
              </button>
            </div>
            <ul className="flex items-center space-x-8 text-black">
              <li className="cursor-pointer"><u className="yellow">Home</u></li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer px-4 py-2 bg-yellow-400 rounded-md text-white">Login</li>
              <button className="px-4 py-2 bg-yellow-400 text-white rounded-md cursor-pointer">
               Sign in
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;