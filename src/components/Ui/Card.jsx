import React from 'react'
import { Link } from 'react-router'

const Card = ({friend}) => {
  return (
    <Link to={`/frienddetails/${friend.id}`} className='shadow-md border border-black/10 rounded-2xl p-5 space-y-1 text-center'>
      <img src={friend.picture} alt="" className='mx-auto rounded-full'/>

      <h2>{friend.name}</h2>
      <h3 className='text-[#64748B]'>{friend.days_since_contact}d ago</h3>

      <div className='flex gap-2 justify-center'>
        {
        friend.tags.map((name)=> <h2 className='bg-[#CBFADB] text-[14px] px-4 text-[#244D3F] uppercase font-bold rounded-full py-1'>{name}</h2>)
      }
      </div>
      <h3 className={`${friend.status == 'overdue' && 'bg-[#EF4444]  rounded-full'} ${friend.status == 'on-track' && 'bg-[#244D3F] rounded-full'} ${friend.status == 'due-soon' && 'bg-[#EFAD44]  rounded-full'} text-[15px] px-4 py-1 text-white w-fit capitalize text-center inline`} >{friend.status}</h3>
    </Link>
  )
}

export default Card