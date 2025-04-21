import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector(store=>store.auth);
 
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold cursor-pointer transition-all duration-300 hover:scale-105 group">
            <span className="text-gray-800 group-hover:text-violet-700 transition-colors duration-300">
              Hire
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500 ml-1">
              Sphere
            </span>
            <span className="ml-1 text-gray-500 group-hover:text-indigo-500 transition-colors duration-300">
              {"/>"}
            </span>
          </h1>
        </Link>

        {/* Nav Links & Avatar */}
        <div className="flex items-center gap-6">
          {/* <ul className="flex font-medium items-center gap-6 text-gray-700 text-base">
            {["Home", "Jobs", "Browse"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer transition duration-200 hover:text-violet-700 after:block after:content-[''] after:absolute after:h-0.5 after:bg-violet-600 after:w-0 after:hover:w-full after:transition-all after:duration-300 after:mt-1 after:rounded-full"
              >
                {item}
              </li>
            ))}
          </ul> */}
          <li className="relative cursor-pointer transition duration-200 hover:text-violet-700 after:block after:content-[''] after:absolute after:h-0.5 after:bg-violet-600 after:w-0 after:hover:w-full after:transition-all after:duration-300 after:mt-1 after:rounded-full">
            <Link to='/'>Home
            </Link>
          </li>
          <li className="relative cursor-pointer transition duration-200 hover:text-violet-700 after:block after:content-[''] after:absolute after:h-0.5 after:bg-violet-600 after:w-0 after:hover:w-full after:transition-all after:duration-300 after:mt-1 after:rounded-full">
            <Link to='/jobs'>Jobs
            </Link>
          </li >
          <li className="relative cursor-pointer transition duration-200 hover:text-violet-700 after:block after:content-[''] after:absolute after:h-0.5 after:bg-violet-600 after:w-0 after:hover:w-full after:transition-all after:duration-300 after:mt-1 after:rounded-full">
            <Link to='/browse'>Browse
            </Link>
          </li>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button className="cursor-pointer" variant="outline">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="cursor-pointer bg-[#5a44b8] hover:bg-[#5B30A6]">
                  SignUp
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer hover:ring-2 hover:ring-violet-300 transition">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="rounded-full w-8 h-8"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Piyush Mishra
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Frontend Developer @ MNNIT
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-t pt-3">
                  <Button variant="ghost" className="justify-start gap-2">
                    <User2 size={18} />
                    <Link to="/profile">View Profile</Link> 
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-2 text-red-500 hover:text-red-600"
                  >
                    <LogOut size={18} />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
