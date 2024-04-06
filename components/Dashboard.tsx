import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import {Plus,Sticker} from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="w-[14rem] p-[2rem]">
        <div>
          <div className="flex items-center justify-between">
            <Sticker size={25}/>
            <h3 className="font-semibold text-[1.3rem]">HI,AltWorld</h3>
          </div>
          <div className="w-[10rem] mt-3 h-1 bg-gray-200"></div>
        </div>
        <div className="mt-5 mb-5 flex w-[8rem] justify-between items-center">
          <div className="h-[2rem] w-[2rem] rounded-[50%] bg-white flex items-center justify-center">
            <HomeIcon className="text-[rgb(97,213,203)]"/>
            {/* <Home color='rgb(127, 255, 212)'/> */}
          </div>
          <h4 className="font-bold">Dashboard</h4>
        </div>
        <div className="w-[12rem] p-[1rem] rounded-xl h-auto text-white bg-[rgb(97,213,203)]">
          <div className="h-[2rem] w-[2rem] bg-white rounded-[0.3rem] flex items-center justify-center">
            <Plus color="black" />
          </div>
          <h4 className="mt-5 font-bold text-[0.8rem]">New Assignment?</h4>
          <p className="mt-3 text-[0.6rem] ">
            Select from pre defined Questions to have a Quick turnaround.
          </p>
          <button className="w-full h-[2rem] font-bold  bg-white rounded-lg  mt-3 text-[0.6rem] text-black">
            Create New Assignment
          </button>
        </div>
      </div>
  )
}

export default Dashboard
