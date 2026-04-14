import { ContextProvider } from "./ContaxtText"


const Context = ({children}) => {

    const data = [
      {
        name: 'Nure Alom'
      }
    ]
  return (
    <ContextProvider.Provider value={data}>{children}</ContextProvider.Provider>
  )
}

export default Context