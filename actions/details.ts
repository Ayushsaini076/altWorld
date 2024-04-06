import axios from "axios";

export async function getDetails(){
    try{
        const {data}= await axios.get('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details');
        return{
            documents:data,
            message:"Document added"

        }
    }
    catch(err){
        console.log(err);
    }
}

export async function getUsers(){
    try{
        const {data} = await axios.get('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0');
        return{
            documents:data,
        }
    }
    catch(err){
        console.log(err);
    }
}

export async function getInfo() {
    try{
        const {data} = await axios.get('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=30&assignment_id=assignment123');
        return{
            documents:data
        }
    }
    catch(err){
        console.log(err);
    }
    
}