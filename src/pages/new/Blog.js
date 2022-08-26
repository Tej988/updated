// import React,{useEffect,useState} from 'react'
// import axios from 'axios'
// import Blog from './Blog'
// const BlogDetails = () => {

//   const [user, setUser] = useState()

// //   const id = localStorage.getItem("userId");

// //   const sendRequest = async()=>{
// //     const res = await axios.get(`https://xenon-blog.herokuapp.com/api/blog/user/${id}`)
// //     .catch((err)=> console.log(err))
// //     const data = await res.data;
// //     return data;
// //   }

//   useEffect(() => {
    
//     const id = localStorage.getItem("userId");
    
//       const sendRequest = async()=>{
//     const res = await axios.get(`https://xenon-blog.herokuapp.com/api/blog/user/${id}`)
//     .catch((err)=> console.log(err))
//     const data = await res.data;
//     return data;
//   }
    
//     sendRequest().then((data)=> setUser(data.user))
  
//   }, [])
  
//   console.log(user)
//   return (
//     <div> {
//       user &&user.blogs &&user.blogs.map((blog, index)=>(
//         <Blog key={index} 
//         // isUser = {localStorage.getItem("userId")===blog.user._id}
//         isUser={true}
//         title={blog.title} 
//         description={blog.description }
//          user={blog.user} 
//          image={blog.image}/>
//       ))
//     }</div>
//   )
// }

// export default BlogDetails





import React from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';     
import axios from 'axios';

const Blog = ({ title, description, image, userName,isUser,id }) => {
    console.log(title,isUser)

    const navigate = useNavigate();
    const handleEdit = (e)=>{
        navigate(`/myBlogs/${id}`)
    }
    const deleteRequest= async()=>{
        const res = await axios.delete(`https://xenon-blog.herokuapp.com/api/blog/${id}`).catch(
            err=>console.log(err)
        )
        const data =await  res.data;
        return data
    }
    const handleDelete = (e)=>{
     deleteRequest().then((data)=>console.log(data))
     alert("Post Deleted")
     window.location.reload();
    }
    return (
        <div><Card sx={{
            width: "40%", margin: 'auto', mt: '4', padding: 2, boxShadow: "10px 10px 20px #ccc", ":hover:": {
                boxShadow: "20px 20px 30px #ccc"
            }
        }}>
            <Box display={'flex'}>
      
            </Box>

            {isUser &&(
                <Box display={'flex'}>
                    <IconButton onClick={handleEdit} sx={{ marginLeft:'auto' }}><EditIcon color='secondary'/> </IconButton>
                    <IconButton onClick={handleDelete}><DeleteIcon color='danger'/> </IconButton>
                </Box>
            )}
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }}>
                            {userName}
                        </Avatar>
                    }
                    title={title}
                // subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="400px"
                    width={'40px'}
                    image={image}
                    alt="image"
                />
                <CardContent>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>

        </Card></div>
    )
}

export default Blog