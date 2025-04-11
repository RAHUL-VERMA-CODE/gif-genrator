import { useState } from 'react'
// import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full h-full flex flex-col items-center  bg-[#242424] relative'>
    <h1 className='w-11/12 absolute rounded-md text-black bg-white mt-8 text-3xl py-1  text-center font-medium '>Random Gifs</h1>
    <div className="flex flex-col items-center justify-center w-full">
      <Random/>
      <Tag/>
    </div>
   </div>
  )
}

export default App
