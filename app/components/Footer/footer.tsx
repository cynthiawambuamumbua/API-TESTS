import React from "react";
const Footer = () => {
    return (
      <>
        <footer className="bg-gray-300 text-grey py-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Download Our App</h3>
              <h1 className="text-2xl font-bold">
                M<b className="text-yellow-400">oo</b>vie
              </h1>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">Navigation</h3>
              <p>Home</p>
              <p>My List</p>
              <p>About Us</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">Legal</h3>
              <p>General info</p>
              <p>Smart Gadget</p>
              <p>Bill Payment Verification</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">Contact Us:</h3>
              <p>support@egymoviees.com</p>
              <p>tel: +25475963322</p>
              <div className="flex justify-center">
              </div>
            </div>
          </div>
          <hr className="my-8" />
          <p className="text-center text-gray-500">
            2023 Moovie. All Rights Reserved.
          </p>
        </footer>
      </>
    );
  };export default Footer;