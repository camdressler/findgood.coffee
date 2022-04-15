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
        className="flex bg-transparent box-shadow-lg rounded-lg align-middle p-2"
      >
        <input
          type="text"
          id="search-bar"
          placeholder="YOUR ZIP CODE"
          className="msbx bg-transparent text-black placeholder-black"
          value={state}
          onChange={(e) => handleChange(e)}
        />
        <span
          className="text-black hover:cursor-pointer hover:text-brown-dark"
          onClick={submit()}
        >
          GO
        </span>
      </div>
    </div>
  );
}
