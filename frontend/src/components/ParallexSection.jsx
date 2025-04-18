import React from "react";

function ParallaxSection() {
  return (
    <div className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white px-4" 
    style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`
      }}>
      <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Find Your Dream Job</h2>
        <p className="text-lg md:text-xl text-gray-200">Explore thousands of opportunities tailored for you</p>
      </div>
    </div>
  );
}

export default ParallaxSection;
