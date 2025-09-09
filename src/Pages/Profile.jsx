import { useState } from "react";

export default function Profile() {
  // Mock user data (replace with API data from backend)
  const [user, setUser] = useState({
    name: "Adhithyan",
    email: "adhithyan@example.com",
    goal: "Muscle Gain",
    joined: "2025-01-01",
    profilePic: "https://i.pravatar.cc/150?img=12", // sample avatar
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated User:", user);
    // 🔗 API call -> update user profile in backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-gray-400">{user.email}</p>
            <p className="text-sm text-gray-500">Joined: {user.joined}</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-8">
          {!isEditing ? (
            <>
              <p className="mb-2">
                <span className="font-semibold">Goal:</span> {user.goal}
              </p>
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-primary mt-4"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="goal"
                value={user.goal}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <div className="flex gap-4">
                <button onClick={handleSave} className="btn btn-success w-1/2">
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="btn btn-error w-1/2"
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
