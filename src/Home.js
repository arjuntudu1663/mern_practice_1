import React from 'react'
import { useState,useEffect } from 'react';
import { color, motion } from 'framer-motion'
import { CiLocationArrow1 , CiTextAlignJustify ,CiBookmark  } from "react-icons/ci";
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

    
      
      <>
      <p></p>
      <div style={{width:"100%",marginTop:"15px",display:"flex",justifyContent:"center"}} className='myCenterBox'  >
         
          <p></p>
          
          
          <div style={{backgroundColor:"black",marginTop:"15px",borderRadius:"15px",paddingLeft:"15px",paddingRight:"15px",height:"80px",display:"flex",alignItems:"center",justifyContent:"space-between"}} className='mybox'>
            
             <h1 className='header_font' style={{color:"white"}} >
              Okaare.In
             </h1>

             <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"30%",flexDirection:"row",gap:"15px"}} >
             <CiLocationArrow1 color='white' size={30} />
             <CiTextAlignJustify color='white' size = {30} />
             <CiBookmark color = 'white' size = {30} />  
            </div>
          </div>

          
      </div>
       
      </>


               
          

   
  )
}

export default Home