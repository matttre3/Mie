import React from 'react'
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-center h-screen'>
        <div className='w-full md:w-3/5 flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center'>
                <img className='w-16' src="/MIE-LOGO.png" alt="" />
                <img className='w-12' src="/Mie.svg" alt="" />
            </div>
            <h1 className='font-rosmatika text-center text-4xl md:text-5xl pt-6'>Your Armochromia Partner</h1>
            <div className='flex items-center flex-col sm:flex-row pt-6'>
                <div className='flex flex-col justify-center items-center  pl-8 pr-8'>
                    <p className='font-poppins text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius congue nisl et tincidunt. Vivamus sit amet sapien sit amet sapien.</p>
                    <button onClick={() => {navigate("/test");}}  className='font-poppins bg-blue-800 text-white pl-6 pr-6 p-2 mt-6 rounded-xl'>Take the test</button>
                </div>
                <div className=' bg-gray-300 mt-8 w-[300px] h-[2px] sm:mt-0 sm:h-[100px] sm:w-[2px] '></div>
                <div className='flex flex-col items-center pl-8 pr-8 pt-8 sm:pt-0'>
                    <p className='font-poppins text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius congue nisl et tincidunt. Vivamus sit amet sapien sit amet sapien.</p>
                    <button  onClick={() => {navigate("/photodetection");}}
              className='font-poppins border-2 border-blue-800 text-blue-800 pl-6 pr-6 p-2 mt-6 rounded-xl'>Take the test</button>
                </div>
            </div>
        </div>
        <div className='w-4/5 md:w-2/5'>
            <img src="/phone.png" alt="" />
        </div>
    </div>
  )
}

export default Home