import React from 'react';

export default function SearchBox() {
    return (
        <div>
            <div id="search-wrapper" className="flex flex-col p-6 shadow-lg rounded-lg">
                <input
                    type="text"
                    id="search-bar"
                    placeholder="Enter A Zip Code..."
                    name="s" 
                    style={{
                        outlineColor: '#6F4E37'
                    }}
                    className="py-2 px-4 pr-64 mb-16 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-brown-300 rounded transition ease-in-out duration-1000"
                />
                <div id="search-results" className="">

                </div>
            </div>
        </div>
    )
}

<input
type="search"
class="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
id="exampleSearch"
placeholder="Type query"
/>