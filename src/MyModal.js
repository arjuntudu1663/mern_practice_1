import { useScroll } from 'framer-motion'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const MyModal = ({text}) => {
  
    const [modalFlag,setModalFlag] = useState(false)

  return (

    <div>
       <Modal show = {modalFlag} >
          <Modal.Body>
              <h4>{text}</h4>
          </Modal.Body>

       </Modal>
    </div>
  )
}

export default MyModal