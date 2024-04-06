"use client";
import React, { useEffect, useState } from "react";

import { getDetails, getInfo } from "@/actions/details";
import { getUsers } from "@/actions/details";

import Dashboard from "@/components/Dashboard";
import Role from "@/components/Role";
import Profile from "@/components/Profile";

const det = {
  duration_in_seconds: 3600,
  ends_at: 121313,
  id: "",
  link: "",
  status: "",
  title: "",
};

const arr = [
  {
    email: "",
    full_name: "",
    id: 2,
    score: 86,
  },
];

const inform = {
    introduction:"",
    experience:"",
    hobbies:"",
    about_me:"",
}

const scores=[
  {
    max_score:"",
    user_score:1,
    score_type:""
  },
];

const page = () => {
  const [date, setDate] = useState("11 March 2024");
  const [details, setDetails] = useState(det);
  const [users, SetUsers] = useState(arr);
  const [info,setInfo] = useState(inform);

  const [mpp,setMpp]=useState(scores);

  useEffect(() => {
    const getAssDetails = async () => {
      const res = await getDetails();
      if (res) {
        console.log(res.documents);
        setDetails(res.documents);
      }
    };
    const getUserDetails = async () => {
      const res = await getUsers();
      if (res) {
        console.log(res.documents);
        SetUsers(res.documents);
      }
    };
    const getUserInfo = async()=>{
        const res = await getInfo();
        if(res){
            console.log(res.documents)
            setInfo(res.documents)
            setMpp(res.documents.scores)
            console.log(res.documents.scores);
        }
    }
      getAssDetails();
      getUserDetails();
    getUserInfo();
    
    
  }, []);

  // console.log(mpp);

  return (
    <div className="bg-[rgb(248,249,250)] text-black h-[100vh] flex ">
      <Dashboard/>
      <Role
      details = {details}
      users = {users}
      date={date}
      />
      <Profile
      info = {info}
      mpp={mpp}
      />
      
    </div>
  );
};

export default page;
