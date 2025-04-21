import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';


const randomJobs=[1,2,3,5,4,6,7,8];

function Browse() {
  return (
    <div>
      <Navbar/>
      <div>
        <h1 className='font-bold mx-10 m-3 text-xl'> Search Results {randomJobs.length}</h1>
        
        <div className='grid grid-cols-3 gap-4 '>
  {
    randomJobs.map((item, index) => (
      <Job key={index} />
    ))
  }
</div>

      </div>
    </div>
  )
}

export default Browse
