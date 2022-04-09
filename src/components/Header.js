import React from "react";

export default function Header() {
  return (
    <nav className="bg-transparent py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex">
          <div>
            <a href="#" className="flex items-left py-2 pl-8 gap-2">
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#6F4E37",
                }}
                className="px-4 py-2 items-center mr-4"
              >
                Find Good Coffee
              </button>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="/login">
              <button
                id="goToLogin"
                style={{
                  background: "white",
                  border: "2px solid #6F4E37",
                  boxSizing: "border-box",
                  borderRadius: "9.9px",
                  color: "#6F4E37",
                }}
                className="px-4 py-2 items-center shadow-lg mr-4"
              >
                Login
              </button>
              <button
                id="goToSignup"
                style={{
                  background: "white",
                  border: "2px solid #",
                  boxSizing: "border-box",
                  borderRadius: "9.9px",
                  color: "#6F4E37",
                }}
                className="px-4 py-2 items-center shadow-lg"
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
