import React from 'react'

interface props2{
    type:string,
    value :number
  }
  const Card2:React.FC<props2> = ({type,value})=>{
    return(
      <div className="mt-[1rem] flex justify-between">
              <span className="text-sm text-gray-500 font-semibold" >{type}</span>
              <div className="flex items-center justify-between">
                <div className="h-[0.7rem] mr-[1rem] w-[12rem] rounded-2xl bg-gray-200">
                  {value>6?<div className={`h-full w-[${value}rem] rounded-2xl bg-[rgb(46,189,89)]`}></div>:<div className={`h-full w-[${value}rem] rounded-2xl bg-[rgb(236,178,46)]`}></div>}
                </div>
                {value>6?<span className="text-[rgb(46,189,89)] text-md font-bold">{value}/10</span>:<span className="text-[rgb(236,178,46)] text-md font-bold">{value}/10</span>}
                
              </div>
            </div>
  
    )
  }

export default Card2
