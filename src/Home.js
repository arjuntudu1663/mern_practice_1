import React from 'react'
import { useState,useEffect } from 'react';
import { color, motion } from 'framer-motion'
import { CiLocationArrow1 , CiTextAlignJustify ,CiBookmark ,CiLogout  } from "react-icons/ci";
import { Row,Col, Button ,Image,Form, Modal  } from 'react-bootstrap';
import  axios  from 'axios';
import {Tab,Tabs} from 'react-bootstrap'
import { useNavigate } from 'react-router';

const imgBBApi = "e34b686ea01e7391d28fa5bb390e65bb";

const Home = () => { 

   const navigation = useNavigate()

  const [value,setValue] = useState(1);
  const [slide,setSlide] = useState(0);
  const [image,setImage] = useState();
  const [posts,setPosts] = useState([]);
  const [imgUrl,setImageUrl] = useState();
  



  const [post,setPost] = useState({
     name:"",
     value:"",
     imgUrl:""
    
  })

  const logout = function(){
      
    navigation("/")

  }


  const addPost = async() => {
    
    const form = new FormData();
    form.append('image',image);
    form.append('key','e34b686ea01e7391d28fa5bb390e65bb')
       
    try{
       const response = await axios.post("https://api.imgbb.com/1/upload",form);
       console.log(response.data.data.url);
       
       setPost((prev)=>{
        return {...prev,imgUrl:response.data.data.url}
       }) 

       console.log(post)

       const response2 = await axios.post("https://mern-practice-1-backend-ktgldla84-arjun-tudus-projects.vercel.app/create_post",post);
       console.log(response2)

       

    }catch(e){
       console.log("image upload error")
    }
     
    
  }

 

  

   
  
    useEffect(()=>{
     
       
        const getData = async() => {
           
           try{
            const response = await axios.get("https://mern-practice-1-backend-ktgldla84-arjun-tudus-projects.vercel.app/first_api");
            setPosts(response.data)
           }catch(e){
              if(e){
                 console.log("first_api getting failed")
              }
           }

          

        }

        getData();
    
    },[post.name])

  return (

      <div style={{padding:"20px"}}>

      <p></p>

      <div style={{marginTop:"5px",display:"flex",justifyContent:"center"}} className='myCenterBox'  >
         
          <p></p>
          
          
          <div style={{backgroundColor:"black",width:"100%",
            marginTop:"1px",borderRadius:"15px",height:"80px",
            display:"flex",padding:"35px",alignItems:"center",
            justifyContent:"space-between"}} className='mybox'>
            
             <h1 className='desc_font' style={{color:"white"}} >
              Okaare
             </h1>

             <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"30%",flexDirection:"row",gap:"15px"}} >
             <CiLogout onClick={logout} style={{marginLeft:"55px"}} size = {30} color='white'/>
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
                      
                      
                      


                          <div style={{boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",paddingLeft:"15px",paddingRight:"15px",paddingTop:"35px",paddingBottom:"35px",borderRadius:"15px"}} >
                          <h1 className='desc_font' >Make a post</h1>
                          <p></p>
                          <input style ={{borderRadius:"5px",padding:"15px",border:"0px solid",backgroundColor:"#dedede",width:"100%"}} placeholder='name' onChange={e=>setPost((prev)=>{
                          return {...prev,name:e.target.value}
                        })} />
                        <p></p>
                          <input style ={{borderRadius:"5px",padding:"15px",height:"80px",border:"0px solid",backgroundColor:"#dedede",width:"100%"}} placeholder='type your post ....' onChange={e=>setPost((prev)=>{
                          return {...prev,value:e.target.value}
                        })} />
                        <p></p>
                        <input  onChange={e=>setImage(e.target.files[0])} style ={{borderRadius:"5px",marginBottom:"15px",padding:"15px",width:"100%"}} type='file' placeholder='choose a photo' />
                        <p></p>
                        <Button onClick={addPost} variant='dark' style={{borderRadius:"15px",padding:"15px",width:"100%"}} >Make a post</Button>
                          </div>

                      </Col>
                


                </Row> 
                   <p></p>
                            <Tabs>
                  <Tab eventKey="posts" title="Posts">
                  <div style={{height:"800px",overflowY:"scroll",width:"100%"
                }} >
                
                <p></p>

                {

                  posts.map((x)=>{
                     if(x.imgUrl.length>0){
                      return <div  style={{width:"100%",marginBottom:"15px",backgroundColor:"black",padding:"15px",borderRadius:"15px"}} className='myShadow' >
                      <h4 style={{color:"white"}}>{x.name}</h4>
                      <h1 style={{color:"white"}} >   
                        {x.value}</h1>
                        <p>{x.date}</p>
                          <img src = {x.imgUrl}  style={{width:"100%",borderRadius:"15px",height:"300px"}} />
                    </div>
                     }
                  })

                }



                </div>
                  </Tab>

                  <Tab eventKey="events" title="Events">
                  <div style={{height:"800px",overflowY:"scroll",width:"100%"
                }} >
                
                <p></p>

                


                </div>
                  </Tab>

                 
                  
                </Tabs>
                
                <hr></hr>
              
         
       </div>
      
      
      
      </div>

               
          

   
  )
}

export default Home