import React from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

function HeroSection() {
  return (
    <div className="text-center mt-24 px-4">
      <div className="flex flex-col gap-6 my-10 max-w-4xl mx-auto">
        <span className="inline-block px-6 py-2 mx-auto rounded-full bg-gray-100 text-[#F83002] font-medium text-sm md:text-base shadow-sm hover:shadow-md transition-all duration-200">
          No.1 Job Hunt Website
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Search, Apply & <br />
          Get your <span className="text-[#6a38c2]">Dream Job</span>
        </h1>

        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          Discover thousands of opportunities tailored to your skills and ambitions.
        </p>

        <div className="flex w-full md:w-[70%] lg:w-[60%] shadow-lg border border-gray-200 pl-5 pr-2 py-2 rounded-full items-center gap-3 mx-auto bg-white hover:shadow-xl transition-all duration-300">
          <input
            type="text"
            placeholder="Find your dream job..."
            className="w-full outline-none bg-transparent text-sm md:text-base"
          />
          <Button className="rounded-full bg-[#6a38c2] hover:bg-[#5730a4] transition-all duration-300">
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
