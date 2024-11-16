import React, { useState } from 'react'
import {Form} from 'react'
import { Button } from 'react-bootstrap'

const Login = () => { 
   
    const [person,setPerson] = useState({
        name : "",
        password: ""
    })

  return (
    <div style = {{padding:"35px",paddingTop:"30%",gap:"15px"}}>

        <h1 className='desc_font' style={{marginBottom:"15px"}} >Login and join with us</h1>  
        
        <Form.Control placeholder = "name" ></Form.Control>
         
        <Button variant='primary' style={{width:"100%"}} > Login </Button>

    </div>
  )
}

export default Login