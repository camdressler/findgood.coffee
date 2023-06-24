import React from "react";
import { BiCurrentLocation } from "react-icons/bi";

export default function () {
    return (
        <div className="flex items-center text-accents font-bold text-sm border-2 border-accents cursor-pointer rounded-lg select-none py-2 px-4 hover:text-background hover:bg-accents duration-200 ease-in-out">
            Use Current Location
            <BiCurrentLocation className="ml-2 w-6 h-6" />
        </div>
    );
}
