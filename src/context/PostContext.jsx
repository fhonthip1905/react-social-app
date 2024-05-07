/* eslint-disable react/prop-types */
import { createContext,useEffect,useState } from "react";
import *as postAPI from '../apis/postApi';

export const PostContext = createContext();


export default function PostContextProvider({children}){
    const [posts, setPost] = useState([]);
    useEffect(() => {
        getAllPost();
    },[])

    //Get - AllPost
   const getAllPost = async () => {
    try {
        const response = await postAPI.getAllPost();
        console.log(response.data);
        setPost(response.data)

    }catch(error){
        console.log(error)
    }
   }
 return <PostContext.Provider value={{ posts: posts }}>{children}</PostContext.Provider>
}