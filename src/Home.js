import React, { useReducer } from 'react'
import { useState,useEffect } from 'react';
import { color, motion } from 'framer-motion'
import { CiLocationArrow1 , CiTextAlignJustify ,CiBookmark ,CiLogout ,CiImageOn ,BiLoaderCircle ,CiUser  } from "react-icons/ci";
import { Row,Col, Button ,Image,Form, Modal, Card  } from 'react-bootstrap';
import Loader from "react-js-loader";

import  axios  from 'axios';
import {Tab,Tabs} from 'react-bootstrap'
import { useNavigate ,useParams ,useLocation } from 'react-router';

const imgBBApi = "e34b686ea01e7391d28fa5bb390e65bb";

const Home = () => { 


  const {id} = useParams()

   const navigation = useNavigate();
   const location = useLocation();
   console.log(location.state.id,"<= profile _id");




  const [value,setValue] = useState(1);
  const [slide,setSlide] = useState(0);
  const [image,setImage] = useState();
  const [posts,setPosts] = useState([]);
  const [imgUrl,setImageUrl] = useState();
  const [imgModal,setImgModal] = useState(false);
  const [refresh,setRefresh] = useState(false);
  const [name,setName] = useState("");
  const [loader,setLoader] = useState(false);
  const [profile,setProfile] = useState({});
  
  const [post,setPost] = useState({
     name:"",
     value:"",
     imgUrl:""
    
  })

  const logout = function(){
      
    navigation("/")

  }


  const addPost = async() => {
    
    console.log(name)
       
    try{

      console.log("sending data",post);
      console.log(name)
      
      const response2 = await axios.post("https://mern-practice-1-backend.vercel.app/create_post",post);
      console.log(response2 , " <========= add post response");
      window.location.reload();
      
    }catch(e){

       console.log("image upload error");

    }
     
    
  }

  const getData = async() => {
           
    try{

     const response = await axios.get("https://mern-practice-1-backend.vercel.app");
     
     console.log(response," <========= getData response");
     setPosts(response.data);
     
    }catch(e){

       if(e){
          console.log("first_api getting failed")
       }
    }


 }
 
 const likePost = async(id) => {
       
    try{ 
        
      const response = await axios.post("https://mern-practice-1-backend.vercel.app/likePost",{
        id:id
      });
      console.log(response)
      window.location.reload();

    }catch(e){
       
      if(e){
        console.log(e);
      }

    }
     
   
 }
 



 const getProfile = async() => {
  
  
           
  try{ 

   const response = await axios.post("https://mern-practice-1-backend.vercel.app/person_find",{
      "id":location.state.id
   });
    
   console.log(response," <======== person find response");
   const name = response.data.name

   setPost((prev)=>{
    return {...prev,name:name}
   })
   
  }catch(e){
    
    if(e){

      console.log("get profile error")

    }
  }
}

 

  

   
  
    useEffect(()=>{ 

      
     

        getData();
        getProfile();
        console.log(name , " <======== profile name")
        
       
    
    },[])

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
              <motion.div  whileHover={{scale:2}} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
               <p style={{color:"white",marginTop:"15px"}} >{name}</p>
              <CiLogout onClick={logout} style={{marginLeft:"5px"}}  size = {30} color='white'/>
              </motion.div>
            </div>
          </div>
   
      
          
      </div>
       <p></p>

       <div style={{height:"50px",marginTop:"15px"}} className='myCenterBox'>
         
                <Row>
                  <Col style={{backgroundColor:"",marginBottom:"15px",height:"auto",display:"flex",flexDirection:"column",justifyContent:"space-between"}} lg = {6} sm = {12} >
                     
                    
                    
                  </Col>
                  <Col style={{height:"auto"}} lg = {6} sm = {12} >
                      
                      
                      


                          <div style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",paddingLeft:"35px",paddingRight:"35px",paddingTop:"35px",paddingBottom:"35px",backgroundColor:"#97e98e",borderRadius:"15px"}} >
                                <h5 className='desc_font' style={{fontWeight:"bold",marginBottom:"30px"}}  >Make a post</h5>
                                <p></p>
                              <div style={{display:"flex"}} >
                              <input style ={{borderRadius:"5px",padding:"15px",height:"50px",border:"0px solid",backgroundColor:"white",width:"100%",fontWeight:"bold"}} placeholder='type your post ....' onChange={e=>setPost((prev)=>{
                                return {...prev,value:e.target.value}
                              })} />  <CiImageOn onClick={e=>setImgModal(true)} color='#0c2b09'  size = {50} />
                         </div>

                        
                        <img style={{width:"100%",borderRadius:"15px"}}  src = {post.imgUrl}/>
                        <p></p>

                        <Button onClick={e=>{
                           addPost();
                           
                        }} variant='dark' style={{borderRadius:"15px",backgroundColor:"green",border:"0px solid",padding:"15px",width:"100%",fontWeight:"bold"}} > Make a post</Button>
                          </div>

                      </Col>
                


                </Row> 
                   <p></p>
                            <Tabs style={{marginBottom:"55px",marginTop:"55px"}}>
                  <Tab eventKey="posts" title="Posts">
                  <div style={{height:"800px",overflowY:"scroll",width:"100%"
                }} >
                
                <p></p>

                {

                  posts.map((x)=>{
                     if(x.imgUrl.length>0){
                      return <Card style={{marginBottom:"15px"}}>
                         <Card.Header style={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}><CiUser size={30} /><h3 style={{opacity:"0.8"}}>{x.name}</h3>
                         
                         </Card.Header>
                         <Card.Img src = {x.imgUrl}  style={{width:"100%",height:"300px"}}/>
                         <Card.Footer>
                          <h5 style={{opacity:"0.5"}} >   
                         {x.value}</h5>
                         <hr></hr>
                         <Button variant='success' onClick={e=>likePost(x._id)} ><h4>Like</h4>{x.like}</Button>
                         </Card.Footer>
                      </Card>
                      
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
      <Modal  style={{marginTop:"50%"}} show = {imgModal}>
        
         <Modal.Body>

             <p>Upload Your Image</p>
           
             <input style={{backgroundColor:"#dedede",width:"100%",padding:"5px",borderRadius:"5px"}} type='file' onChange={async (e)=> {
                  
                  const form = new FormData();
                  form.append('image',e.target.files[0]);
                  form.append('key','e34b686ea01e7391d28fa5bb390e65bb')

                  const response = await axios.post("https://api.imgbb.com/1/upload",form);
                  setLoader(true)
                  setPost((prev)=>{
                    return {...prev,imgUrl:response.data.data.url}
                  })
                  setLoader(false)


             }} />
             
              {loader? "Loading":  <img style={{width:"100%",marginTop:"30px",height:"150px",borderRadius:"15px"}}  src = {post.imgUrl}/>}
              
             <p></p>
             
             <Button onClick={e=>{
                setImgModal(false)
             }} variant='dark' style={{width:"100%",marginTop:"30px"}}>Done</Button>

         </Modal.Body>
         
      </Modal>
      
      
      </div>

               
          

   
  )
}

export default Home