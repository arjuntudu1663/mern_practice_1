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

    <div className='home' >
      
      <h1 style={{color:"white",marginTop:"15px"}} >Okaare.in</h1> 

      <Row>

         <Col lg = {12} sm = {6}>
               
              <motion.div
              
              
              
              className='myshadow' 
              style={{marginTop:"15%",padding:"20px", borderRadius:"15px",height:"10px",width:"390px",backgroundColor:"green"}} 
              initial = {{scale:0.5}} 
              animate = {{
                rotate:value,
                scale:1
              }} 
              
              
              >
              
                
                <Row>
                    
                </Row>
            
              </motion.div>
          
          </Col>
          <Col lg = {12} sm = {6}>
               
               <motion.div
               
               
               
               className='myshadow' 
               style={{marginTop:"15%",padding:"20px", borderRadius:"15px",height:"10px",width:"390px",backgroundColor:"green"}} 
               initial = {{scale:0.5}} 
               animate = {{
                 rotate:-value,
                 scale:1
               }} 
               
               
               >
               
                 
                 <Row>
                     
                 </Row>
             
               </motion.div>
           
           </Col>
      </Row>
  
     
    

   

      



      
      
      <Button onClick={e=>show("p")} style={{width:"33%",marginTop:"50px",height:"50px",borderRadius:"15px"}} variant="primary">increase</Button>
      <br/>
      <Button onClick={e=>show("n")} style={{width:"33%",marginTop:"50px",height:"50px",borderRadius:"15px"}} variant="primary">decrease</Button>

    </div>
  )
}

export default Home