import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

import { Label } from './ui/label'

const filterData= [
    {
        filterType:"Location",
        array:["Delhi NCR","Bangalore","Hyderabad","Pune","Mumbai"]
    },
    {
        filterType:"Salary",
        array:["0-40k","42-1lakh","1lakh to 5 lakh","Pune","Mumbai"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer","Backend Developer","Fullstack Developer"]
    }
]
function FilterCard() {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
     <h1 className='text-[#7209b7] font-medium'>Filter Jobs</h1>
     <hr className='mt-3'/>
     <RadioGroup>
        {
            filterData.map((data,index)=>(
               <div>
                <h1 className='font-bold text-[#7209b7]' >{data.filterType}</h1>
                {
                    data.array.map((item,index)=>{
                        return(
                            <div className='flex gap-2 m-2 items-center'>
                                <RadioGroupItem value={item}/>
                                <Label className="" >{item}</Label>
                            </div>
                        )
                    })
                }
               </div>
            ))
        }
     </RadioGroup>
    </div>
  )
}

export default FilterCard
