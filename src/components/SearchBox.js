import React from "react";
import { useState } from "react";

import ZipSearch from "../services/zipsearch.service";

export default function SearchBox() {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const submit = () => {
    if (state.length >= 5) {
      ZipSearch(state);
    }
  };

  return (
    <div>
      <div
        id="search-wrapper"
        className="flex bg-brown-100 box-shadow-lg rounded-lg align-middle p-4"
      >
        <input
          type="text"
          id="search-bar"
          placeholder="YOUR ZIP CODE"
          className="msbx w-full bg-brown-100 text-brown-600 placeholder-brown-600"
          value={state}
          onChange={(e) => handleChange(e)}
        />
        <span
          className="text-brown-500 hover:cursor-pointer"
          onClick={submit()}
        >
          Search
        </span>
      </div>
      <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAI7go8LvG7sh5_6p_BLt0qK1mDjJwtnlk&libraries=places&callback=initMap"
      ></script>
    </div>
  );
}
