import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

function Login() {
  const navigate= useNavigate();
  const [input, setInput] = useState({
    email: "",

    password: "",
    role: "",
  });
  const {loading}=useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler= async(e)=>{
  e.preventDefault();
 
  try {
   dispatch(setLoading(true));
    const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true,
    });
    if(res.data.success){
      navigate("/")
      toast.success(res.data.message)
    }
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  } finally{
    dispatch(setLoading(false));
  }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex justify-center items-center py-10 px-4">
        <form
          onSubmit={submitHandler}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h1>

          <div className="mb-4">
            <Label className="block mb-1 text-sm text-gray-700">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="user@gmail.com"
              className="w-full"
            />
          </div>

          <div className="mb-6">
            <Label className="block mb-1 text-sm text-gray-700">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="••••••••"
              className="w-full"
            />

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
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    value="recruiter"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
{
  loading?<Button className="w-full bg-blue-800 text-white py-2 rounded-xl font-semibold hover:bg-blue-900 transition duration-200"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:<Button
  type="submit"
  className="w-full bg-blue-800 text-white py-2 rounded-xl font-semibold hover:bg-blue-900 transition duration-200"
>
  Login
</Button>
}
          

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
