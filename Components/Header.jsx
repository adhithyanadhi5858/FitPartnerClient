import { Dumbbell, Home,Settings, Utensils, Activity, Bell, Bot } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../Config/AxiosInstance";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../src/features/Users/UserSlice";
import toast, { Toaster } from "react-hot-toast";

function Header() {
  const [user, setuser] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchProfile = () => {
    AxiosInstance.get("/user/profile")
      .then(res => {
        setuser(res.data.UserData)
      })
      .catch(err => {
        console.log("header error==", err.message)
      })
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const logout = () => {

    AxiosInstance.get("/user/logout")
      .then(res => {
        dispatch(clearUser())
        toast.success("Logout Successfully!")
        setTimeout(() => navigate("/login"), 2000)
      })
      .catch(err => {
        console.log("logout err===", err.message)
        toast.error("Logout failed")
      })

  }


  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
        <div className="navbar container mx-auto px-4 md:px-6 py-3">
          <Toaster position="top-center" reverseOrder={false} />
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <Dumbbell className="w-7 h-7 text-primary" />
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              FitPartner
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="menu menu-horizontal gap-6 text-white">
              <li>
                <Link to={"/"} className="hover:text-primary flex items-center gap-2">
                  <Home className="w-5 h-5" /> Home
                </Link>
              </li>
              <li>
                <Link to={"/user/workout"} className="hover:text-primary flex items-center gap-2">
                  <Activity className="w-5 h-5" /> Workout
                </Link>
              </li>
              <li>
                <Link to={"/user/diet"} className="hover:text-primary flex items-center gap-2">
                  <Utensils className="w-5 h-5" /> Diet
                </Link>
              </li>
              <li>
                <Link to={"/user/ai"} className="hover:text-primary flex items-center gap-2">
                  <Bot className="w-5 h-5" /> AI Trainer
                </Link>
              </li>
              <li>
                <Link to={"/user/settings"} className="hover:text-primary flex items-center gap-2">
                  <Settings className="w-5 h-5" /> Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side: Notifications + Profile */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <Link to={"user/notification"} className="btn btn-ghost btn-circle text-white">
              <Bell className="w-6 h-6" />
            </Link>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.profilePic}
                    alt="Profile"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/user/profile"}>Profile</Link>
                </li>
                <li>
                  <Link to={"/user/settings"}>Settings</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end md:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/user/workout"}>Workout</Link></li>
                <li><Link to={"/user/diet"}>Diet</Link></li>
                <li><Link to={"/user/ai"}>AI Trainer</Link></li>
                <li><Link to={"/user/settings"}>Settings</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

