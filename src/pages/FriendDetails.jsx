import React from 'react'
import { useParams } from 'react-router'

const FriendDetails = () => {
    const {id} =useParams()
    console.log(id)
  return (
    <div>FriendDetails</div>
  )
}

export default FriendDetails