import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import {Form} from 'react'
import { Button , Modal } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'reactjs-popup/dist/index.css';

const Login = () => { 
     
  const navigation = useNavigate();
  const [modalFlag,setModalFlag] = useState(false);

  const [register,setRegister] = useState({
        name : "",
        password: "",
        re_password:""
    });

    const [person,setPerson] = useState({
      name : "",
      password: "",
    });

    const [flag,setFlag] = useState("login")
    
    const person_register = async function(){
           
      try{
         
          if(register.password === register.re_password){

            const response = await axios.post("https://mern-practice-1-backend-ktgldla84-arjun-tudus-projects.vercel.app/person_register",register);
            if(response.status === 200){
               navigation("/home")
            }

          }else{

            console.log("password not matching");

          }

      }catch(e){

         if(e){
           console.log("person_register error")
         }

      }
        
    }

    const checkLogin = async function(){
        
      try{
         
        const response = await axios.post("https://mern-practice-1-backend-ktgldla84-arjun-tudus-projects.vercel.app/login",person);

        if(response.data.status){
            
         
          navigation("/home")
            
        }else{
           
          setModalFlag(true);

        }
        
      }catch(e){
         
        if(e){
           
          console.log("login error");

        }

      }

    }


    let element; 

    switch(flag){

       case "login" :

         element =  <><div style={{width:"100%",display:"flex",justifyContent:"center"}} >
                <h1 style={{fontWeight:"bold"}} >Okaare.<span style={{color:"green"}} >In</span></h1>
                
              </div>
              <p></p>
              <input onChange={e=>setPerson((prev)=>{
                return {...prev,name:e.target.value}
              })} placeholder='name' style={{width:"100%",padding:"15px",borderRadius:"5px",height:"40px",border:"0px",backgroundColor:"#dedede"}}></input>
            
              <p></p>

              <input type='password' onChange={e=>setPerson((prev)=>{
                return {...prev,password:e.target.value}
              })} placeholder='password' style={{width:"100%",padding:"15px",borderRadius:"5px",height:"40px",border:"0px",backgroundColor:"#dedede"}}></input>
              
              <p></p>
              <Button onClick={checkLogin} style={{width:"100%",fontWeight:"bold"}} variant='dark' >Login</Button>
              <p></p>
              <Button onClick={e=>setFlag("register")} style={{width:"100%",fontWeight:"bold"}} variant='link' >Don't Have a account ? Register</Button>

              </>
              break;

       case "register":

        element = <>   
        <div style={{width:"100%",display:"flex",justifyContent:"center"}} >
                <h1 style={{fontWeight:"bold"}} >Okaare.<span style={{color:"green"}} >In</span></h1>        
        </div>
              <p></p>

              <input  onChange={e=>setRegister((prev)=>{
                return {...prev,name:e.target.value}
              })} placeholder='name' style={{width:"100%",padding:"15px",borderRadius:"5px",height:"40px",border:"0px",backgroundColor:"#dedede"}}></input>
            
              <p></p>

              <input type='password' onChange={e=>setRegister((prev)=>{
                return {...prev,password:e.target.value}
              })} placeholder='password' style={{width:"100%",padding:"15px",borderRadius:"5px",height:"40px",border:"0px",backgroundColor:"#dedede"}}></input>
              
              <p></p>
              
               <input type='password' onChange={e=>setRegister((prev)=>{
                return {...prev,re_password:e.target.value}
              })} placeholder='retype-password' style={{width:"100%",padding:"15px",borderRadius:"5px",height:"40px",border:"0px",backgroundColor:"#dedede"}}></input>
              
              <p></p>
              <Button onClick={person_register} style={{width:"100%",fontWeight:"bold"}} variant='dark' >register</Button>
              <p></p>
              <Button onClick={e=>setFlag("login")} style={{width:"100%",fontWeight:"bold"}} variant='link' >Already Have a account ? Login</Button>
            </>

            break;
          
          
          
          
              
      
    }

  return (
    <div style = {{gap:"15px",paddingTop:"30%",paddingLeft:"35px",paddingRight:"35px"}}>
         
          {element}
        <Button variant='link' >Forgot Password</Button>
        <Modal style={{marginTop:"50%"}} show={modalFlag} >
          <Modal.Body style={{display:"flex",justifyContent:"center"}}>
              Loading . . . . .
          </Modal.Body>
       </Modal>
    </div>
  )
}

export default Login