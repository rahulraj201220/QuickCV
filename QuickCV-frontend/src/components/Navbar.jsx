
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function Navbar() {
  const { user } = useUser(); 

  return (
    <div className="navbar shadow bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* <li>
              <Link to={"/about"}>About</Link>
            </li> */}
            
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          AI Resume Maker
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <Link to={"/about"}>About</Link>
          </li> */}
       
          <li>
            <Link to={"/contact"}>Contact Me</Link>
          </li>
        </ul>
      </div>
<div className="navbar-end space-x-2">
        <SignedOut>
          {/* Sign‑in & Sign‑up UI */}
          <SignInButton mode="modal">
            <button className="btn btn-ghost">Login</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="btn btn-primary">Register</button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          {/* Show user greeting + user menu */}
          <span className="font-semibold hidden sm:block">
            Hi, {user?.firstName}
          </span>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  );
}

