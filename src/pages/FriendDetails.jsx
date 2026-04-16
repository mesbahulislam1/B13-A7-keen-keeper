import { Link, useLoaderData, useParams } from "react-router";
import TextCard from "../components/Ui/TextCard";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import LinkProps from "./LinkProps";
import { LuVideo } from "react-icons/lu";
import { ContextProvider } from "../Context/ContaxtText";
import { useContext } from "react";
import { FaHistory } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";

const FriendDetails = () => {
  const ContactList = [
    {
      name: "call",
      mainIcon: <LuPhoneCall />,
      icon: "https://i.ibb.co.com/BVcCZGJ4/call.png",
    },
    {
      name: "text",
      mainIcon: <MdOutlineTextsms />,
      icon: "https://i.ibb.co.com/FkhbsXdr/text.png",
    },
    {
      name: "video",
      mainIcon: <LuVideo />,
      icon: "https://i.ibb.co.com/N6tPYwgz/video.png",
    },
  ];
  const data = useLoaderData();
  const { id } = useParams();

  const findFriend = data.find((friendId) => friendId.id == id);

  const { contactData } = useContext(ContextProvider);

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 h-fit   text-center space-y-2">
          <div className="bg-white shadow-lg rounded-2xl p-6 space-y-2">
            <img
              src={findFriend.picture}
              alt=""
              className="w-28 h-28 mx-auto rounded-full border-4 border-gray-100"
            />

            <h2 className="text-xl font-semibold">{findFriend.name}</h2>

            <p className="text-gray-500 text-sm">
              {findFriend.days_since_contact} days ago
            </p>

            <span
              className={`px-4 py-1 text-sm text-white rounded-full capitalize inline-block
              ${findFriend.status === "overdue" && "bg-red-500"}
              ${findFriend.status === "on-track" && "bg-green-600"}
              ${findFriend.status === "due-soon" && "bg-yellow-500"}
            `}
            >
              {findFriend.status}
            </span>

            <div className="flex flex-wrap justify-center gap-2 ">
              {findFriend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 capitalize text-green-700 text-xs font-semibold px-3 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[17px] text-[#64748B] italic">
              "{findFriend.bio}"
            </p>
            <p className="text-[14px]">Preferred: {findFriend.email}</p>
          </div>
          <div>
            <button className="w-full font-medium btn bg-white shadow-lg">
              <RiNotificationSnoozeLine />
              Snooze 2 weeks
            </button>
            <button className="w-full font-medium my-1 btn bg-white shadow-lg">
              <FiArchive />
              Archive
            </button>
            <button className="w-full font-medium btn bg-white shadow-lg text-red-500">
              <RiDeleteBin5Line /> Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-xl p-5 text-center hover:shadow-md transition">
              <h3 className="text-2xl font-bold">
                {findFriend.days_since_contact}
              </h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-center hover:shadow-md transition">
              <h3 className="text-2xl font-bold">{findFriend.goal}</h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-center hover:shadow-md transition">
              <h3 className="text-lg font-semibold">
                {findFriend.next_due_date}
              </h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white shadow rounded-2xl p-6 flex justify-between ">
            <div>
              <h2 className="text-lg font-semibold">Relationship Goal</h2>
              <p className="text-gray-600">
                Connect every{" "}
                <span className="font-bold">{findFriend.goal} days</span>
              </p>
            </div>

            <button className="btn px-4 py-2 rounded-lg transition">
              Edit
            </button>
          </div>
          <div className="p-6 shadow rounded-2xl">
            <h2 className="text-[20px] text-[#244D3F]">Quick Check-In</h2>
            <div>
              <div className="grid grid-cols-3 gap-3">
                {ContactList.map((link, index) => (
                  <LinkProps
                    key={index}
                    findFriend={findFriend}
                    link={link}
                  ></LinkProps>
                ))}
              </div>
            </div>
          </div>
          <div className=" shadow p-6 mt-1 border border-black/10 rounded-2xl">
            <div className="flex justify-between items-center ">
              <h2 className="text-[20px] text-[#244D3F]">
                Recent Interactions
              </h2>
              <Link to={"/timeline"} className="btn">
                <FaHistory></FaHistory> Full History
              </Link>
            </div>
            <div className=" flex flex-col-reverse">
              {contactData.length == 0 ? (
                <div>
                  <h1 className="text-center text-2xl mt-9 text-black/40">
                    Contact History Not Found
                  </h1>
                </div>
              ) : (
                contactData.slice(0, 5).map((list) => {
                  return (
                    <div className="flex items-center gap-3 border-b last:border-t-0 py-3 border-black/18 ">
                      <span className="text-2xl">{list.mainIcon}</span>
                      <div>
                        <h2 className=" capitalize">{list.name}</h2>
                        <p>Asked for career advice</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
