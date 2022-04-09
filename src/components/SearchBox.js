import React from "react";

export default function SearchBox() {
  return (
    <div>
      <div id="search-wrapper" className="flex shadow-lg rounded-lg align-middle p-4">
        <input
          type="text"
          id="search-bar"
          placeholder="City or Zip Code"
          className="msbx w-full"
        />
        <span className="opacity-10 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
