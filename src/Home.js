import React from 'react'
import { useState,useEffect } from 'react';
import { color, motion } from 'framer-motion'
import { BiAlignLeft  } from "react-icons/bi";
import { Row,Col, Button } from 'react-bootstrap';
import  axios  from 'axios';





const Home = () => { 

  const [value,setValue] = useState(1)

   const show = function(value) {
     
       if(value == 'p'){
         setValue((prev)=>{
          return prev+0.1
         })
       }else{
          setValue((prev)=>{
            return prev-0.1
          })
       }

   }

  
    useEffect(()=>{
     
        const getValue = async function(){ 
             
            try{
              const response = axios.get("http://localhost:5000/first_api");
              console.log(response)
            }catch(err){
               if(err){
                 console.log("api receiving failed")
               }
            }
            
    
        }

        getValue();
        
    
    })

  return (
    <div className='home' >
      
      <h1 style={{color:"white",marginTop:"15px"}} >Okaare.in</h1>
      
      <motion.div
      
      
       
      className='myshadow' 
      style={{marginTop:"15%",padding:"20px", borderRadius:"15px",height:"100px",width:"390px",backgroundColor:"red"}} 
      initial = {{scale:0.5}} 
      animate = {{scale:value}} >
      
         
         <Row>
             <Col sm = {6} >
                <BiAlignLeft size={30} color='white'/>
             </Col>
             <Col sm = {6} >
                <h1 style={{color:"white",fontSize:"15px"}}>This is the most memorable story that we have been with</h1>
             </Col>
         </Row>
    
      </motion.div>
      <div style={{height:"100px"}} >

      </div>
      
      <Button onClick={e=>show("p")} style={{width:"33%",marginTop:"50px",height:"50px",borderRadius:"15px"}} variant="primary">increase</Button>
      <br/>
      <Button onClick={e=>show("n")} style={{width:"33%",marginTop:"50px",height:"50px",borderRadius:"15px"}} variant="primary">decrease</Button>

    </div>
  )
}

export default Home