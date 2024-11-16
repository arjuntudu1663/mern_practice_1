import React from 'react'
import { useState,useEffect } from 'react';
import { color, motion } from 'framer-motion'
import { CiLocationArrow1 , CiTextAlignJustify ,CiBookmark  } from "react-icons/ci";
import { Row,Col, Button ,Image,Form  } from 'react-bootstrap';
import  axios  from 'axios';





const Home = () => { 

  const [value,setValue] = useState(1);
  const [slide,setSlide] = useState(0);

  const [posts,setPosts] = useState([]);

  const [post,setPost] = useState({
     name:"",
     value:"",
    
  })


  const addPost = () => {
     
    setPosts((prev)=>{
       return [...prev,post]
    })
    setPost((prev)=>{
      return {...prev,name:"",value:""}
    })

  }

  

   
  
    useEffect(()=>{
     
       
        
    
    },[])

  return (

    
      
      <div style={{padding:"15px"}}>
      <p></p>
      <div style={{marginTop:"15px",display:"flex",justifyContent:"center"}} className='myCenterBox'  >
         
          <p></p>
          
          
          <div style={{backgroundColor:"black",marginTop:"1px",borderRadius:"15px",height:"80px",display:"flex",padding:"15px",alignItems:"center",justifyContent:"space-between"}} className='mybox'>
            
             <h1 className='header_font' style={{color:"white"}} >
              Okaare.In
             </h1>

             <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"30%",flexDirection:"row",gap:"15px"}} >
             <CiLocationArrow1 color='white' size={30} />
             <CiTextAlignJustify color='white' size = {30} />
             <CiBookmark color = 'white' size = {30} />  
            </div>
          </div>

          
      </div>
       <p></p>

       <div style={{height:"50px",marginTop:"15px"}} className='myCenterBox'>
         
                <Row>
                  <Col style={{backgroundColor:"",marginBottom:"15px",height:"auto",display:"flex",flexDirection:"column",justifyContent:"space-between"}} lg = {6} sm = {12} >
                     <img style={{width:"100%",borderRadius:"15px"}} src={require("./pic.jpg")} />
                    
                  </Col>
                  <Col style={{height:"auto"}} lg = {6} sm = {12} >
                      
                      
                      <h1 className='desc_font' >This is how we did</h1>
                      <Form>
                     
                        
                        <Form.Control value={post.name} onChange={e=>setPost((prev)=>{
                          return {...prev,name:e.target.value}
                        })}  placeholder='name' rows={3} />
                    
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <br></br>
                        <Form.Control placeholder='type your post ....' value = {post.value} onChange={e=>setPost((prev)=>{
                          return {...prev,value:e.target.value}
                        })} as="textarea" rows={3} />
                      </Form.Group>
                    </Form>
                      <Button onClick={addPost} variant='dark' style={{borderRadius:"15px"}} >make a post</Button>

                  </Col>


                </Row>
                <hr></hr>
                {
                  posts.map((x)=>{
                    return <div style={{width:"100%",marginBottom:"15px",backgroundColor:"black",padding:"15px",borderRadius:"15px"}} className='myShadow' >
                      <h4 style={{color:"white"}}>{x.name}</h4>
                      <h1 style={{color:"white"}} >
                        
                        {x.value}</h1>
                        <p>{x.date}</p>
                    </div>
                  })
                }
         
       </div>


      </div>

               
          

   
  )
}

export default Home