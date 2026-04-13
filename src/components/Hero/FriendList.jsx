import React from 'react'
import { useLoaderData } from 'react-router'
import Card from '../Ui/Card'

const FriendList = () => {
    const friends = useLoaderData()
    
  return (
    <div>
        <h3 className='text-2xl font-semibold'>Your Friends</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
            {
                friends.map((friend)=> <Card friend={friend}></Card>)
            }
        </div>
    </div>
  )
}

export default FriendList