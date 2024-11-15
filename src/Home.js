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

    <div className='home' style={{gap:"5px",display:"flex",flexDirection:"row"}} >
      
      <h1 style={{color:"white",marginTop:"15px"}} >Okaare.in</h1> 

      
               
              <motion.div
              
              
              
              className='myshadow' 
              style={{marginTop:"15%",padding:"20px", borderRadius:"15px",height:"110px",width:"190px",backgroundColor:"red"}} 
              initial = {{scale:0.5}} 
              animate = {{
                rotate:value,
                scale:1
              }} 
              
              
              >
              
                
               
            
              </motion.div>
         
     
               
               <motion.div
               
               
               
               className='myshadow' 
               style={{marginTop:"15%",padding:"20px", borderRadius:"15px",height:"110px",width:"90px",backgroundColor:"blue"}} 
               initial = {{scale:0.5}} 
               animate = {{
                 rotate:-value,
                 scale:1
               }} 
               
               
               >
               
                 
                 
             
               </motion.div>
          
     

      <motion.div
               
               
               
               className='myshadow' 
               style={{marginTop:"15%",padding:"20px", borderRadius:"15px",height:"110px",width:"190px",backgroundColor:"black"}} 
               initial = {{scale:0.5}} 
               animate = {{
                 x:slide
               }} 
               
               
               >
               
                 
                 <Row>
                     
                 </Row>
             
               </motion.div>


  
     
    

   

      



      
      
      <Button onClick={e=>show("p")} style={{width:"23%",marginTop:"50px",height:"50px",borderRadius:"15px"}} variant="primary">increase</Button>
      <br/>
      <Button onClick={e=>show("n")} style={{width:"23%",marginTop:"50px",height:"50px",borderRadius:"15px"}} variant="primary">decrease</Button>

      <br/>
      <Button onClick={e=>makeslide("r")} style={{width:"23%",marginTop:"50px",height:"50px",borderRadius:"15px"}} variant="primary">right</Button>
      <br/>
      <Button onClick={e=>makeslide("l")} style={{width:"23%",marginTop:"50px",height:"50px",borderRadius:"15px"}} variant="primary">left</Button>

    </div>
  )
}

export default Home