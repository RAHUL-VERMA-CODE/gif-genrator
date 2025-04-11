import { useEffect, useState } from "react";
import Spinner from "./spinner";
import UseGif from "../hooks/useGif";
function Tag(){
//    const [gif,setGif]=useState('');
//    const [loading , setLoading]=useState("false")
   const [tag,setTag]=useState('');
//    const API_KEY= process.env.REACT_APP_API_URL 
// const API_KEY = import.meta.env.REACT_APP_API_URL ;


//    async function fetchData(){
//        const url = `https://api.giphy.com/v1/gifs/random?api_key=51qN59k5c5rDdhvJN0LxsnDpK89a6L7V&tag=${tag}`;
       // here api is change by adding tag on search 

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
const {gif,loading,fetchData}=UseGif(tag);
const changeHandler=()=>{
fetchData();
}

    return(
<div className="w-1/2  bg-blue-500 flex  flex-col items-center my-4 rounded-lg border">
    <h1 className="font-medium underline text-2xl"> Random {tag} Gifs</h1>

    {
        loading ? (<Spinner/>):(<img src={gif} width="450" className="h-[200px] border border-red-700 mt-4" />)
    }
    
    <input type="text" 
    className=" w-10/12 bg-white rounded-md my-4 font-medium p-1 pl-4"
    onChange={(event)=>setTag(event.target.value)}
    value={tag}/>
    <button className="w-1/2 bg-white rounded-md my-4 font-medium mb-2"
    onClick={changeHandler}>
        Genrate
    </button>
</div>
    )
}
export default Tag;