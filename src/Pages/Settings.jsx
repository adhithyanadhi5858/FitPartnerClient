export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-primary">⚙️ Settings</h1>

      <div className="bg-black/50 border border-gray-700 rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-800 text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-800 text-white"
            />
          </div>

          {/* Goal */}
          <div>
            <label className="block text-gray-300 mb-2">Fitness Goal</label>
            <select className="select select-bordered w-full bg-gray-800 text-white">
              <option>Muscle Gain</option>
              <option>Fat Loss</option>
              <option>Strength</option>
              <option>General Fitness</option>
            </select>
          </div>

          {/* Save Button */}
          <button className="btn btn-primary w-full">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
