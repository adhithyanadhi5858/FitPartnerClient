// 
import { useEffect, useState } from "react";
import { AxiosInstance } from "../../Config/AxiosInstance";
import DietPlanCard from "../../Components/DietPlanCard";

export default function Profile() {
  const [user, setUser] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [diet, setDiet] = useState()

  const fetchProfile = () => {
    AxiosInstance.get("/user/profile")
      .then((res) => {
        setUser(res.data.UserData);
      })
      .catch((err) => {
        console.log("profile err==", err.message);
      });
  };

  
  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated User:", user);
    AxiosInstance.post("/user")
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-3xl shadow-2xl border border-gray-700">
        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <img
            src={
              user?.profilePic ||
              "https://ui-avatars.com/api/?name=" + (user?.name || "User")
            }
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-wide">{user?.name}</h2>
            <p className="text-gray-400">{user?.email}</p>
            <p className="text-sm text-gray-500">
              Joined:{" "}
              {user?.registeredDate
                ? new Date(user.registeredDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                : ""}
            </p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-8">
          {!isEditing ? (
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Phone:</span> {user?.phone}
              </p>
              <p>
                <span className="font-semibold">Age:</span> {user?.age}
              </p>
              <p>
                <span className="font-semibold">Gender:</span> {user?.gender}
              </p>
              <p>
                <span className="font-semibold">Membership:</span> {user?.membership}
              </p>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white hover:opacity-90 transition"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={user?.name || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="text"
                name="phone"
                value={user?.phone || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="text"
                name="phone"
                value={user?.phone || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex-1 py-3 rounded-xl bg-green-500 font-semibold text-white hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-3 rounded-xl bg-red-500 font-semibold text-white hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
