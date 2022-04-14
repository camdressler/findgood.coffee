import React from "react";

export default function Header() {
  return (
    <nav className="bg-back py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex">
          <div>
            <a href="#" className="flex items-left py-2 pl-8 gap-2">
              <button className="bg-transparent border-none text-brown-100 text-4xl items-center px-4 py-2  mr-4">
                ☕️
              </button>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="/login">
              <button
                id="goToLogin"
                className="bg-transparent border-none border-2 box-border rounded-lg text-brown-100 tems-center px-4 py-2  mr-4"
              >
                LOGIN
              </button>
              <button
                id="goToSignup"
                className="bg-transparent  border-brown-100 box-border rounded-lg text-brown-100 items-center px-4 py-2 "
              >
                SIGN UP
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
