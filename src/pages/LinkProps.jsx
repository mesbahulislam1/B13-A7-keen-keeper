import React, { useContext } from 'react'
import { ContextProvider } from '../Context/ContaxtText'
import { toast } from 'react-toastify'

const LinkProps = ({link, findFriend}) => {
    
    const {contactData, setContactData} = useContext(ContextProvider)

    const ContactsData = ()=>{
      
       const newData = {
        ...link, 
        friend: findFriend
       }
        setContactData([...contactData, newData])

        toast.success(`${link.name == 'call' ? 'Calling':''} ${link.name == 'text' ? 'Messages sent':''} ${link.name == 'video' ? 'Video Calling':''}`)
       
    }
  return (
    <div onClick={ContactsData} className='text-center flex flex-col btn h-[80px]'>
        <span className='text-2xl'>{link.mainIcon}</span>
      <h2 className=' capitalize'>{link.name}</h2>
    </div>
  )
}

export default LinkProps
