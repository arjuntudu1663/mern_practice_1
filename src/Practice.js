import React, { useState } from 'react'
import { Button , Modal } from 'react-bootstrap';
import { AnimateSharedLayout , AnimatePresence , motion } from 'framer-motion';
import { CiLocationArrow1 , CiTextAlignJustify ,CiBookmark ,CiLogout  } from "react-icons/ci";


const Practice = () => {
   
    const [modalFlag,setModalFlag] = useState(false);
    const [flag,setFlag] = useState(false);
    const [size,setSize] = useState(0.5)

    const change = () => {
       
      if(flag){
         setSize(1)
         setFlag(false)
      }else{
         setSize(2)
         setFlag(true)
      }

    }

  return (
    <div style={{height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}} >
      
        <motion.div
         initial = {{scale:0.5}}
          whileHover={{scale:2}}
         style={{marginTop:"50%",width:"30%",height:"50px",backgroundColor:"",display:"flex",alignItems:"center",justifyContent:"center"}}>
               
              
                <CiLogout  size ={30} color='black' />
                <h5>Logout</h5>

        </motion.div>

    </div>
  )
}

export default Practice