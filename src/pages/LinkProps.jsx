import React, { useContext } from 'react'
import { ContextProvider } from '../Context/ContaxtText'

const LinkProps = ({link, findFriend}) => {
    
    const {contactData, setContactData, setSelectFriend} = useContext(ContextProvider)

    const ContactsData = ()=>{
       const newData = {
        ...link, 
        friend: findFriend
       }
        setContactData([...contactData, newData])
       
    }
  return (
    <div onClick={ContactsData} className='text-center flex flex-col btn h-[70px]'>
        <span>{link.mainIcon}</span>
      <h2 className=' capitalize'>{link.name}</h2>
    </div>
  )
}

export default LinkProps
