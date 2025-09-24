import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserProtection() {
  const { isUserAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    
    if (!isUserAuth) {
      navigate("/login", { replace: true });
    }
  }, [isUserAuth, navigate]);

  return isUserAuth ? (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Outlet />
    </div>
  ) : null;
}

export default UserProtection;
