import { useLoaderData, useParams } from "react-router";
import TextCard from "../components/Ui/TextCard";
import { LuPhoneCall } from "react-icons/lu";

const FriendDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const findFriend = data.find((friendId) => friendId.id == id);

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 bg-white shadow-lg rounded-2xl p-6 text-center space-y-4">
          <img
            src={findFriend.picture}
            alt=""
            className="w-28 h-28 mx-auto rounded-full border-4 border-gray-100"
          />

          <h2 className="text-xl font-semibold">{findFriend.name}</h2>

          <p className="text-gray-500 text-sm">
            {findFriend.days_since_contact} days ago
          </p>

          {/* STATUS BADGE */}
          <span
            className={`px-4 py-1 text-sm text-white rounded-full capitalize inline-block
              ${findFriend.status === "overdue" && "bg-red-500"}
              ${findFriend.status === "on-track" && "bg-green-600"}
              ${findFriend.status === "due-soon" && "bg-yellow-500"}
            `}
          >
            {findFriend.status}
          </span>

          {/* TAGS */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {findFriend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-xl p-5 text-center hover:shadow-md transition">
              <h3 className="text-2xl font-bold">62</h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-center hover:shadow-md transition">
              <h3 className="text-2xl font-bold">30</h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-center hover:shadow-md transition">
              <h3 className="text-lg font-semibold">Feb 27, 2026</h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white shadow rounded-2xl p-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Relationship Goal</h2>
              <p className="text-gray-600">
                Connect every <span className="font-bold">30 days</span>
              </p>
            </div>

            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Edit
            </button>
          </div>
          <div className="p-6 shadow rounded-2xl">
            <h2>Quick Check-In</h2>
            <div>
              <div className="grid grid-cols-3 gap-3">
                <div className="btn">
                  <h2>Call</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
