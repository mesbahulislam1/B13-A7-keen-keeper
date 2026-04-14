import { useState } from "react"
import { ContextProvider } from "./ContaxtText"


const Context = ({children}) => {
    const [contactData, setContactData] =useState([])
    const [selectFriend, setSelectFriend] = useState([])
     
    const data = {
      contactData,
      setContactData,
      selectFriend,
      setSelectFriend
    }
  return (
    <ContextProvider.Provider value={data}>{children}</ContextProvider.Provider>
  )
}

export default Context