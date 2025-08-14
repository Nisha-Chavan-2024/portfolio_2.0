import React from "react";
import Navbar from "./Navbar";

function NotFound() {
  return (
    <>
    <Navbar/>
     <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <p className="p-2">Sorry, the page you are looking for does not exist.
        </p>
       
      </div>
    </div>
    </>
   
  );
}

export default NotFound;
