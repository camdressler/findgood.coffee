import React from "react";

export default function SearchBox() {
  return (
    <div>
      <div
        id="search-wrapper"
        className="flex bg-brown-200 box-shadow-lg shadow-brown-600 rounded-lg align-middle p-4"
      >
        <input
          type="text"
          id="search-bar"
          placeholder="Your Zip Code"
          className="msbx w-full bg-brown-200 text-brown-500 placeholder-brown-600"
        />
        <span className="text-brown-500 hover:cursor-pointer">
          Search
        </span>
      </div>
    </div>
  );
}
