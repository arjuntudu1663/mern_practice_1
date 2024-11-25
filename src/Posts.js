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

  })
  return (
    <div>Posts</div>
  )
}

export default Posts