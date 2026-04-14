import { useContext } from "react"
import { ContextProvider } from "../../Context/ContaxtText"
import { IoIosArrowDown } from "react-icons/io";



const TimelinePage = () => {
  const {contactData, } = useContext(ContextProvider)
  
  
  return (

    <div className="max-w-[1000px] mx-auto mb-9 mt-9">
      <h2 className="text-[#1F2937] text-5xl font-medium">Timeline</h2>
      <div className="btn w-[200px] justify-between my-4">
        <h2 className="text-[#64748B]">Filter timeline</h2>
        <IoIosArrowDown />
      </div>
      <div className="flex flex-col-reverse space-y-4 ">
      
      {
        contactData.map((link)=>{
          return <div className="flex items-center border border-black/10 my-2 gap-4 p-7 shadow-md rounded-2xl">
           <img src={link.icon} alt="" />
           <div>
            <h2 className="flex items-center gap-2"><span className=" text-[#244D3F] text-[20px] font-medium capitalize">{link.name}</span><span className=" text-[#64748B] text-[17px]">with {link.friend.name}</span></h2>
            <h3>{link.friend.next_due_date}</h3>
           </div>
          </div>
        })
      }
    </div>
    </div>
    
  )
}

export default TimelinePage
