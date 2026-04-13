import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='container mt-[50px] sm:mt-[60px] md:mt-[80px] mb-[50px] sm:mb-[60px] md:mb-[80px] mx-auto px-5'>
      <div className='text-center space-y-5'>
        <h1 className='text-[#1F2937] font-bold text-4xl md:text-5xl'>Friends to keep close in your life</h1>
        <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<button className=' font-semibold bg-[#244D3F] text-white btn'><FaPlus></FaPlus> Add a Friend</button>
      </div>
    </div>
  )
}

export default Home