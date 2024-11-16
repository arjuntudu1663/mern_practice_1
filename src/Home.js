import React from 'react'
import { useState,useEffect } from 'react';
import { color, motion } from 'framer-motion'
import { BiAlignLeft  } from "react-icons/bi";
import { Row,Col, Button } from 'react-bootstrap';
import  axios  from 'axios';





const Home = () => { 

  const [value,setValue] = useState(1);
  const [slide,setSlide] = useState(0);

  const makeslide = function(value){ 

       if(value == 'r'){
         
          setSlide((prev)=>{
             
            return prev+50

          })

       }else{
           
          setSlide((prev)=>{
             
            return prev-50

          })
        

       }
     
     
  }

   const show = function(value) {
     
       if(value == 'p'){
         setValue((prev)=>{
          return prev+50
         })
       }else{
          setValue((prev)=>{
            return prev-50
          })
       }

   }

  
    useEffect(()=>{
     
        const getValue  = async () => { 
             
            try{
              
              const response = axios.get("http://localhost:5000/first_api");

              console.log(response.data)


            }catch(err){
               if(err){
                 console.log("api receiving failed")
               }
            }
            
    
        }

        getValue();
        
    
    },[])

  return (

    
      
      

      <div style={{backgroundColor:"red",height:"80px"}} className='mybox'>
          
      </div>
               
          

   
  )
}

export default Home