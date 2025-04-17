import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const {loading}= useSelector(store=>store.auth)
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
const submitHandler= async(e)=>{
e.preventDefault();
const formData = new FormData();
formData.append("fullname",input.fullname);
formData.append("email",input.email);
formData.append("phoneNumber",input.phoneNumber);
formData.append("password",input.password);
formData.append("role",input.role);
if(input.file){
  formData.append("file",input.file)
}
try {
  dispatch(setLoading(true));
  const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
    headers:{
      "Content-Type":"multipart/form-data"
    },
    withCredentials:true,
  });
  if(res.data.success){
    navigate("/login")
    toast.success(res.data.message)
  }
} catch (error) {
  console.log(error)
  toast.error(error.response.data.message)
} finally{
    dispatch(setLoading(false));
  }
}

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex justify-center items-center py-10 px-4">
        <form onSubmit={submitHandler} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Sign Up
          </h1>

          <div className="mb-4">
            <Label className="block mb-1 text-sm text-gray-700">
              Full Name
            </Label>
            <Input type="text"
            value={input.fullname} 
            name="fullname"
            onChange={changeEventHandler}
           placeholder="Your Name"
            className="w-full" />
          </div>

          <div className="mb-4">
            <Label className="block mb-1 text-sm text-gray-700">Email</Label>
            <Input
              type="email"
              value={input.email }
            name="email"
            onChange={changeEventHandler}
              placeholder="user@gmail.com"
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <Label className="block mb-1 text-sm text-gray-700">
              Phone Number
            </Label>
            <Input type="text" 
            value={input.phoneNumber} 
            name="phoneNumber"
            onChange={changeEventHandler}
            placeholder="1234567890" className="w-full" />
          </div>

          <div className="mb-6">
            <Label className="block mb-1 text-sm text-gray-700">Password</Label>
            <Input type="password" 
            value={input.password} 
            name="password"
            onChange={changeEventHandler}
            placeholder="••••••••" className="w-full" />

            <div className="flex items-center justify-between">
              <RadioGroup
                className="flex items-center space-x-2 my-5"
                defaultValue="option-one"
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role==='student'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role==='recruiter'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" 
               onChange={changeFileHandler}
              className="cursor-pointer" />
            </div>
          </div>

          {
  loading?<Button className="w-full bg-blue-800 text-white py-2 rounded-xl font-semibold hover:bg-blue-900 transition duration-200"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:<Button
  type="submit"
  className="w-full bg-blue-800 text-white py-2 rounded-xl font-semibold hover:bg-blue-900 transition duration-200"
>
  Create Account
</Button>
}

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
