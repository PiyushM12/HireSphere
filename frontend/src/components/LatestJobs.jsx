import React from 'react'
import LatestJobCards from './LatestJobCards';

function LatestJobs() {
    const randomJobs = [1,2,3,4,5,6,7,8];

  return (
    <div className='max-w-7xl mx-10 my-20'>
      <h1 className='text-4xl font-bold'>
       <span className='text-[#6a38c2]'>
        Latest & Top 
       </span>
        Job Openings
      </h1>
      {/* //cards ayenge// */}
      <div className='grid grid-cols-3 gap-4'>
      {
        randomJobs.slice(0,6).map((item,index)=><LatestJobCards key={index}/>)
      }
      </div>
      
    </div>
  )
}

export default LatestJobs
