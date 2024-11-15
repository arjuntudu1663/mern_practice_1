import React from 'react'
import { useState,useEffect } from 'react';
import { color, motion } from 'framer-motion'
import { BiAlignLeft  } from "react-icons/bi";
import { Row,Col } from 'react-bootstrap';
import  axios  from 'axios';





const Home = () => {

  
    useEffect(()=>{
     
        const getValue = function(){ 
             
            const response = axios.get("http://localhost:5000/first_api");
            console.log(response)
            
    
        }

        getValue();
        
    
    })

  return (
    <div className='home' >
      
      <h1 style={{color:"white",marginTop:"15px"}} >Okaare.in</h1>
      
      <motion.div className='myshadow' style={{marginTop:"15%",padding:"20px", borderRadius:"15px",height:"100px",width:"390px",backgroundColor:"red"}} initial = {{scale:0.5}} animate = {{scale:1}} >
         
         <Row>
             <Col sm = {6} >
                <BiAlignLeft size={30} color='white'/>
             </Col>
             <Col sm = {6} >
                <h1 style={{color:"white",fontSize:"15px"}}>This is the most memorable story that we have been with</h1>
             </Col>
         </Row>
    
      </motion.div>


    </div>
  )
}

export default Home