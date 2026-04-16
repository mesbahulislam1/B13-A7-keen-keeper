import { useContext, useState } from "react";
import { ContextProvider } from "../../Context/ContaxtText";
import { IoIosArrowDown } from "react-icons/io";

const TimelinePage = () => {
  const { contactData } = useContext(ContextProvider);
  const [filter, setFilter] = useState("all");

  const handelFilter = (e) => {
    setFilter(e);
  };
  return (
    <div className="max-w-[1000px] mx-auto mb-9 mt-9">
      <h2 className="text-[#1F2937] text-5xl font-medium">Timeline</h2>
      
      <button
        className="btn my-4"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" }}
      >
        Filter timeline <IoIosArrowDown />
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" }}
      >
        <li>
          <a onClick={() => handelFilter("all")}>All</a>
        </li>
        <li>
          <a onClick={() => handelFilter("call")}>Call</a>
        </li>
        <li>
          <a onClick={() => handelFilter("text")}>Text</a>
        </li>
        <li>
          <a onClick={() => handelFilter("video")}>Video</a>
        </li>
      </ul>
      <div className="flex flex-col-reverse space-y-4 ">
        {contactData
          .filter((item) => {
            return filter == "all" ? true : item.name == filter;
          })
          .map((link) => {
            return (
              <div className="flex items-center border border-black/10 my-2 gap-4 p-7 shadow-md rounded-2xl">
                <img src={link.icon} alt="" />
                <div>
                  <h2 className="flex items-center gap-2">
                    <span className=" text-[#244D3F] text-[20px] font-medium capitalize">
                      {link.name}
                    </span>
                    <span className=" text-[#64748B] text-[17px]">
                      with {link.friend.name}
                    </span>
                  </h2>
                  <h3>{link.friend.next_due_date}</h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TimelinePage;
