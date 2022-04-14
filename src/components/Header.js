import React from "react";

export default function Header() {
  return (
    <nav className="bg-brown-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex">
          <div>
            <a href="#" className="flex items-left py-2 pl-8 gap-2">
              <button className="bg-transparent border-none text-brown-600 items-center px-4 py-2  mr-4">
                Find Good Coffee
              </button>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="/login">
              <button
                id="goToLogin"
                className="bg-brown-100  border-brown-600 border-2 box-border rounded-lg text-brown-600 tems-center px-4 py-2  mr-4"
              >
                Login
              </button>
              <button
                id="goToSignup"
                className="bg-brown-100  border-brown-600 box-border rounded-lg text-brown-600 items-center px-4 py-2 "
              >
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
