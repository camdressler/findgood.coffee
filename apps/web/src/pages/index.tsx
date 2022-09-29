import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

import { BiCurrentLocation } from "react-icons/bi";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Index() {
    const text1 = "findgood";
    const text2 = ".coffee";

    return (
        <div className="h-screen w-screen bg-background flex flex-col items-center justify-center space-y-3">
            <TypeAnimation
                sequence={[500, "findbad", 1500, "findgood", 500, "findgood.coffee"]}
                wrapper="div"
                cursor={true}
                className="text-accents text-3xl font-semibold tracking-wide"
            />
            <input
                placeholder="Enter your zipcode"
                className="border-2 bg-transparent border-accents rounded-lg w-72 h-8 px-4 py-4 text-accents placeholder-accents placeholder-opacity-75"
            />
            <div className="flex flex-row items-center justify-center opacity-50">
                <hr className="w-24 text-accents" />
                <h1 className="text-accents font-semibold px-4">OR</h1>
                <hr className="w-24 text-accents" />
            </div>
            <div className="flex items-center text-accents font-bold text-sm border-2 border-accents cursor-pointer rounded-lg select-none py-2 px-4 hover:text-background hover:bg-accents duration-200 ease-in-out">
                Use Current Location
                <BiCurrentLocation className="ml-2 w-6 h-6" />
            </div>
            <div className="pt-2 text-xs opacity-50 text-accents font-semibold">By <a target="_blank" className="underline text-accents font-semibold" href="https://www.camdressler.com">Cam Dressler</a></div>
        </div>
    );
}
