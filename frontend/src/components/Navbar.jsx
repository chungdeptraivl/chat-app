import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className=" flex items-center justify-between h-full">
          <div className=" flex items-center gap-8">
            <Link
              to={"/"}
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>

              <h1 className="text-lg font-bold">Chatty</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {authUser && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-2"
                >
                  <img
                    className="size-8 rounded-full bg-white object-cover object-center border border-secondary"
                    src={authUser.profilePic || "./avatar.png"}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-1"
                >
                  <li>
                    <Link
                      to={"/profile"}
                      className={`btn btn-sm gap-2 flex items-center justify-start`}
                    >
                      <User className="size-5" />
                      <span className="inline">Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/settings"}
                      className={`btn btn-sm gap-2 flex items-center justify-start`}
                    >
                      <Settings className="size-5" />
                      <span className="inline">Settings</span>
                    </Link>
                  </li>
                  <li>
                    <button
                      className="flex gap-2 items-center"
                      onClick={logout}
                    >
                      <LogOut className="size-5" />
                      <span className=" inline">Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
