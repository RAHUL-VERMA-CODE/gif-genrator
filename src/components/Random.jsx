import { useEffect, useState } from "react";
// import axios from "axios"
import Spinner from "./spinner";
import UseGif from "../hooks/useGif";
function Random(){
//    const [gif,setGif]=useState('');
//    const [loading , setLoading]=useState("false")

//    const API_KEY= process.env.REACT_APP_API_URL 
// const API_KEY = import.meta.env.REACT_APP_API_URL ;


//    async function fetchData(){
//        const url = `https://api.giphy.com/v1/gifs/random?api_key=51qN59k5c5rDdhvJN0LxsnDpK89a6L7V`;


    //    const res=await fetch(url);
    //    const data= await res.json();


//     setLoading(true)
//     const res=await axios.get(url);
//        console.log(res);
//        const imageUrl=res.data.data.images.downsized_large.url;
//        console.log(imageUrl);
//         setGif(imageUrl);
//      setLoading(false)
//    }
//    useEffect(()=>{
//       fetchData();
//    },[])

// using custom hook 
const {gif,loading,fetchData}=UseGif();

const changeHandler=()=>{
fetchData();
}

    return(
<div className="w-1/2  bg-green-500 flex  flex-col items-center mt-28 rounded-lg border">
    <h1 className="font-medium underline text-2xl"> A Random Gifs</h1>

    {
        loading ? (<Spinner/>):(<img src={gif} width="450" className="h-[200px] border border-red-700 mt-4" />)
    }
    
    <button className="w-1/2 bg-white rounded-md my-4 font-medium "
    onClick={changeHandler}>
        Genrate
    </button>
</div>
    )
}
export default Random;