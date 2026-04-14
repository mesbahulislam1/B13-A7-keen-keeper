import React, { useContext } from 'react'
import { ContextProvider } from '../../Context/ContaxtText'

const TimelinePage = () => {
  const data = useContext(ContextProvider)
  console.log(data)
  
  return (
    <div>
      
    </div>
  )
}

export default TimelinePage
