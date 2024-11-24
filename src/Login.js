import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import {Form} from 'react'
import { Button , Modal } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'reactjs-popup/dist/index.css';

const Login = () => { 
     
  const navigation = useNavigate();
  const [errorModalFlag,setErrorModalFlag] = useState(false);

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

            const response = await axios.post("https://mern-practice-1.vercel.app/person_register",{
              name:register.name,password:register.password
            });

            console.log(response,"<= register response");

            if(response.status === 200){

               navigation("/home",{state:{id:response.data.id}});
               
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
         
        const response = await axios.post("https://mern-practice-1.vercel.app/login",person);
        console.log(response.data,"<= login response")
        
        if(response.data.status){
           
          navigation("/home",{state:{id:response.data.value}})

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
                 
                 <img src={require("./main_pic.jpg")} style={{height:"150px",width:"310px",borderRadius:"100%",objectFit:"cover"}} />
                
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
        <img src={require("./main_pic.jpg")} style={{height:"150px",width:"310px",borderRadius:"100%",objectFit:"cover"}} />
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
            <Modal style={{marginTop:"50%"}} show={errorModalFlag} >
              <Modal.Body style={{display:"flex",justifyContent:"center"}}>
                  Wrong Credentials
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={e=>setErrorModalFlag(false)} > </Button>
              </Modal.Footer>
          </Modal>
    </div>
  )
}

export default Login