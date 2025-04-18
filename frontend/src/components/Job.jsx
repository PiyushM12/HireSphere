import React from "react";
import { Button } from "./ui/button";
import { Badge } from './ui/badge';
import { Bookmark } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";

function Job() {
  return (
    <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 max-w-md mx-auto">
      {/* Top bar with bookmark and time */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          className="rounded-full cursor-pointer"
          size="icon"
        >
          <Bookmark className="text-gray-500 hover:text-blue-500 transition-colors duration-200" />
        </Button>
        <p className="text-sm text-gray-500">2 days ago</p>
      </div>

      {/* Company info */}
      <div className="flex items-center gap-4 mt-5">
        <Button className="p-0 rounded-full h-auto" variant="outline">
          <Avatar className="h-12 w-12">
            <AvatarImage
              className="h-full w-full rounded-full object-cover"
              src="https://static.vecteezy.com/system/resources/previews/047/709/529/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
              alt="Company logo"
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">CompanyName</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi corporis autem culpa. Reprehenderit voluptatem cumque saepe earum perferendis quibusdam?</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-[#f83002] font-bold" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          24 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">
            Deatils
        </Button>
        <Button className="bg-[#7209b7]" >
           Save for Later
        </Button>
      </div>
    </div>
  );
}

export default Job;
