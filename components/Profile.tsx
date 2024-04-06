import React from 'react'
import { ChevronsLeft ,ChevronsRight } from "lucide-react";
import Card2 from "@/components/Card2";
interface Mpp{
    max_score:string,
    user_score:number,
    score_type:string
}
interface props4{
    info:{
        introduction:string,
        experience:string,
        hobbies:string,
        about_me:string,
    },
    mpp:Mpp[]
}
const Profile:React.FC<props4> = ({info,mpp}) => {
  return (
    <div>
      <div className="h-min w-[55vw] flex justify-between mt-[4rem] rounded-md ml-[1rem] bg-white">
        {/* <Card/> */}
        <div className="w-1/2 p-[1.5rem]">
          <div className=" h-[3rem] mt-[1rem]  flex justify-between">
            <div className="flex">
              <img
                className="h-[4rem] w-[4rem] mt-0.5 mr-[1rem] rounded-md"
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt=""
              />
              <div className="mt-3">
                <h4 className="font-bold text-black">Saurav Singh</h4>
                <span className="text-sm  text-gray-500">saurav@gmail.com</span>
              </div>
            </div>
            <span className="mr-[0.5rem] flex items-center text-3xl font-bold text-[rgb(46,189,89)] ">
              78%
            </span>
          </div>
          <div className="mt-[3rem]">
          {mpp.map((item)=>(
            <Card2
            type={item.score_type}
            value={item.user_score}
            />

          ))}

          </div>
          <div className="mt-[1rem]">
          <div>
            <h4 className="font-bold text-lg text-black">About</h4>
            <p className="mt-[0.2rem] text-sm text-gray-400">{info.about_me}</p>
        </div>
          <div>
            <h4 className="mt-[1rem] font-bold text-lg text-black">Experience</h4>
            <p className="mt-[0.2rem] text-sm text-gray-400">{info.experience}</p>
        </div>
          <div>
            <h4 className="mt-[1rem] font-bold text-lg text-black">Hobbies</h4>
            <p className="mt-[0.2rem] text-sm text-gray-400">{info.hobbies}</p>
        </div>
          <div>
            <h4 className="mt-[1rem] font-bold text-lg text-black">Introduction</h4>
            <p className="mt-[0.2rem] text-sm text-gray-400">{info.introduction}</p>
        </div>
          
          </div>
          <button className="text-white font-semibold text-md mt-[2rem] ml-[2rem] xl:ml-[5rem] h-[3rem] rounded-xl w-[16rem] bg-[rgb(30,195,179)]">SHORTLIST</button>
        </div>
        <div className="p-[1rem] w-1/2">
          <div className="bg-blue-100 relative rounded-lg h-full w-full border-2 border-red">
                <iframe width="100%" height="615" src="https://www.youtube.com/embed/668nUCeBHyY?si=vJ0zuB_PzL_dq8Dg"  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div className="absolute bottom-0 h-[5rem] shadow-inner flex items-center justify-between w-full bg-black">
                  <button className="ml-[0.5rem] h-[3rem] w-[3rem] rounded-xl flex items-center justify-center bg-[rgb(113,128,150)]">
                    <ChevronsLeft size={20} color="white"/>
                  </button>
                  <div className="flex flex-col text-white font-bold text-l">
                    <span>Tell me about Yourself</span>
                    <span className="ml-[2rem]">Question 1/11</span>
                  </div>
                  <button className="mr-[0.5rem] h-[3rem] w-[3rem] rounded-xl flex items-center justify-center bg-[rgb(113,128,150)]">
                    <ChevronsRight size={20} color="white"/>
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
