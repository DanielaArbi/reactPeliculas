/* import axios from 'axios';
import { useState, useEffect } from 'react';
import { link } from 'react-router-dom';

const URI = "http://localhost:8000/blogs";

const MostrarBlogs = () => {
   
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
       getBlogs();   
    },[])

    const getBlogs = async ()=>{
       await axios.get(URI)
        .then((res)=>{
          console.log(res.data);
          const blogsitos = res.data;
          setBlogs(blogsitos);
        })
    }

    return (
        <>
        <table>
            <tr>
            <th>id</th>
            <th>titulo</th>
            <th>contenido</th>
            </tr>
            {blogs.map(blog => (
            <tr key={blog.id}>
                
                  <td>{blog.id}</td>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
            </tr>
             ))}

        </table>
        </>
    );

}
export default MostrarBlogs; */