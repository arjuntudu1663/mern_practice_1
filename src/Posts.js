import React, { useEffect , useState } from 'react'
import axios from 'axios';

const Posts = () => { 

    const [posts,setPosts] = useState([]);
    const getData = async  function (){ 
        try{

            const response = await axios.get("https://mern-practice-1-backend.vercel.app");
            
            console.log(response," <========= getData response");
            setPosts(response.data);
            
       
            
       
       
       
           }catch(e){
              if(e){
                 console.log("first_api getting failed")
              }
           }
    }

  useEffect(()=>{
     
    getData();

  },[posts])
  return (
    <div>
        {posts.map((x)=>{
            <h1>{x.value}</h1>
        })}
    </div>
  )
}

export default Posts