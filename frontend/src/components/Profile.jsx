import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
const skills = ["HTML","CSS","javascript", "reactjs"];

function Profile() {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border-gray-200 my-5 p-8 rounded-2xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://static.vecteezy.com/system/resources/previews/047/709/529/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
                alt="Profile"
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ipsa illum deserunt repellendus distinctio mollitia, expedita
                dicta laboriosam accusantium illo.
              </p>
            </div>
            <Button variant="outline" className="tetx-right">
              <Pen />
            </Button>
          </div>
        </div>{" "}
        <div>
          <div className="flex items-center gap-3">
          <Mail></Mail>
          <span>patel@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
          <Contact/>
          <span>897655555</span>
          </div>
          
        </div>
        <div>
          <h1>Skills</h1>
          {
          skills.length!=0?skills.map((item,index)=> <Badge key={index}>
            {item}</Badge>):NA
          }
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label className="text-md font-bold">
            Resume
          </Label>
{
  isResume? <a target='blank' href='/' className="text-blue-500 w-full hover:underline cursor-pointer">MY resume</a>: NA
}
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1>
            Applied Job
          </h1>
          <AppliedJobTable/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
