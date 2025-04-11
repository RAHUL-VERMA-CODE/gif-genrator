import { useEffect, useState } from "react";
import axios from "axios"
// import Spinner from "../components/spinner";
function UseGif(tag){
   const [gif,setGif]=useState('');
   const [loading , setLoading]=useState("false")
//    const [tag,setTag]=useState('me');

const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=51qN59k5c5rDdhvJN0LxsnDpK89a6L7V`;
// const Url = `https://api.giphy.com/v1/gifs/random?api_key=51qN59k5c5rDdhvJN0LxsnDpK89a6L7V&tag=${tag}`;// here api is change by adding tag on search 
   async function fetchData(){
    setLoading(true)
    // const res=await axios.get(tag ? Url :randomUrl);
    const res=await axios.get(tag ? `${randomUrl}&tag=${tag}` :randomUrl);
       console.log(res);
       const imageUrl=res.data.data.images.downsized_large.url;
       console.log(imageUrl);
        setGif(imageUrl);
     setLoading(false)
   }
   useEffect(()=>{
      fetchData();
   },[])
   return {gif,loading,fetchData}

}
export default UseGif;