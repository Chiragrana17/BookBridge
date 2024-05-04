import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handlelogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfuly");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error(error);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div>
      <button
        onClick={handlelogout}
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
