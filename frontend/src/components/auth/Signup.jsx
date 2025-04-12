import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function Signup() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center max-w-7xl mx-auto">
        <form action="" className="w-1/2 border-gray-500 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Your Name" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="user@gmail.com" />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="patel" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="patel" />
          </div>
          <div className="flex items-center">

          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
