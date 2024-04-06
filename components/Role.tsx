import React from 'react'
import {Box,Files} from 'lucide-react'
import EditIcon from "@mui/icons-material/Edit";
import Card from "@/components/Card";

interface User{
    email: string,
    full_name: string,
    id: number,
    score: number,
}
interface props3{
    details:{
        duration_in_seconds: number,
        ends_at: number,
        id: string,
        link: string,
        status: string,
        title: string,
    },
    users:User[],
    date:string
}
const Role:React.FC<props3> = ({details,users,date}) => {
  return (
    <div className="ml-[1.5rem] w-[24rem] h-min ">
        <h4 className="font-bold text-sm mt-[2rem]">{details.title}</h4>
        <div className="p-[1rem] rounded-md mt-[1rem] w-full h-full bg-white text-black">
          <div className="flex w-full justify-between">
            <h4 className="font-bold text-md">{details.title}</h4>
            <div className="flex">
              <span className="font-bold mr-[0.7rem] text-[rgb(0,169,98)]">
                {details.status}
              </span>
              <div className="h-[1.4rem] text-[0.9rem] w-[1.4rem] bg-white shadow-lg flex items-center justify-center p-2">
                <EditIcon fontSize="inherit" />
              </div>
            </div>
          </div>
          <div className="w-full mt-[1.4rem]">
            <span className="w-full flex justify-between text-sm font-semibold">
              <h5 className=" text-gray-500">Assignment Link</h5>
              <a className="underline text-[rgb(174,209,255)]" href={details.link}>
                {details.link}
              </a>
            </span>
            <span className="mt-2 w-full flex justify-between text-sm font-semibold text-gray-500">
              <h5>Assignment Hour</h5>
              <span>{details.duration_in_seconds / 3600} hours</span>
            </span>
            <span className="mt-2 w-full flex justify-between text-sm font-semibold text-gray-500">
              <h5>Assignment Ends at</h5>
              <span>{date}</span>
            </span>
          </div>
          <div className="w-full flex justify-start mt-[3rem]">
            <button className="h-[2.5rem] w-[8rem] mr-[0.5rem] rounded-xl flex items-center justify-evenly text-sm font-semibold hover:shadow-lg">
              <Box size={18}/>
              To Review
            </button>
            <button className="h-[2.5rem] w-[8rem]  rounded-xl flex items-center justify-evenly text-sm font-semibold hover:shadow-lg">
              <Files size={18}/>
              Shortlisted
            </button>
          </div>
          <div className="w-full mt-[0.5rem]">
            <div className="w-full text-sm font-semibold text-gray-500 flex justify-between ">
              <span>CANDIDATE</span>
              <span className="mr-[1.5rem]">SCORE</span>
            </div>
            <div className="h-[35vh] overflow-y-scroll">
              {users.map((user) => (
                <Card
                  // name:String={user.full_name}
                  key={user.id}
                  name={user.full_name}
                  email={user.email}
                  score={user.score}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Role
