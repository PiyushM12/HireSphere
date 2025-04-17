import React from 'react';
import { Badge } from './ui/badge';

function LatestJobCards() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-md w-full hover:shadow-lg transition-shadow duration-300">
      {/* Company Info */}
      <div className="mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Company Name</h1>
        <p className="text-gray-500 text-sm">India</p>
      </div>

      {/* Job Info */}
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-700">Job Title</h2>
        <p className="text-gray-600 text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Job Tags */}
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
    </div>
  );
}

export default LatestJobCards;
