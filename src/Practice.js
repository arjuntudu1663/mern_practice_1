import React, { useState } from 'react'
import { Button , Modal } from 'react-bootstrap';


const Practice = () => {
   
    const [modalFlag,setModalFlag] = useState(false)

  return (
    <div style={{backgroundColor:"black",height:"300px",color:"white"}} >
      
       
       <Button onClick={e=>setModalFlag(true)} >openModal</Button>
         <Modal style={{marginTop:"50%"}} show={modalFlag} >
           
             <Modal.Body>
                <h1>ModalFlag</h1>
             </Modal.Body>
             <Modal.Footer>
                <Button onClick={e=>setModalFlag(false)} > close </Button>
             </Modal.Footer>
        
         </Modal>

    </div>
  )
}

export default Practice