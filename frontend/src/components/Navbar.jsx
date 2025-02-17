import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

import { MessageSquare, Settings } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <header className=" bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
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

          <div className=" flex items-center gap-2">
            <Link
              to={"/settings"}
              className="btn btn-sm gap-2 transition-colors group"
            >
              <Settings className="size-4 transition-transform duration-500 group-hover:rotate-[180deg]" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {/* {authUser && ( */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="flex items-center gap-2">
              <img src="" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
