import React from 'react'
interface props{
    name:string,
    email:string,
    score:number
  }
  
  const Card:React.FC<props> = ({name,email,score}) => {
    return (
      <div className=" h-[3rem] mt-[1rem]  flex justify-between">
        <div className="flex">
          <img
            className="h-[2.5rem] w-[2.5rem] mt-0.5 mr-[1rem] rounded-md"
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <div>
            <h4 className="font-bold text-black">{name}</h4>
            <span className="text-sm  text-gray-500">{email}</span>
          </div>
        </div>
        {score>50?<span className="mr-[1.5rem] flex items-center text-xl font-bold text-[rgb(46,189,89)] ">
          {score}%
        </span>:<span className="mr-[1.5rem] flex items-center text-xl font-bold text-[rgb(236,178,46)] ">
          {score}%
        </span>}
        
      </div>
    );
  };

export default Card
