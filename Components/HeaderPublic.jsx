import React from 'react'
import { Dumbbell } from "lucide-react";
import { Link } from 'react-router-dom';

function HeaderPublic() {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-gray-900 via-black to-gray-900 px-8 shadow-lg">
        {/* Logo */}
        <div className="flex-1 flex items-center gap-2">
          <Dumbbell className="text-primary w-7 h-7" />
          <a className="text-2xl font-extrabold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent tracking-wide">
            FitPartner
          </a>
        </div>

        {/* Links */}
        <div className="flex-none gap-3">
          <Link to={'/register'} className="btn btn-outline btn-primary px-6 rounded-full hover:scale-105 transition">
            Sign In
          </Link>
          <Link to={'/login'} className="btn btn-primary px-6 rounded-full shadow-md hover:scale-105 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  )
}

export default HeaderPublic
