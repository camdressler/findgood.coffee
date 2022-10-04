import React from "react";
import { TypeAnimation } from "react-type-animation";

import ZipcodeSearch from "../components/ZipcodeSearch/ZipcodeSearch";
import CurrentLocation from "../components/CurrentLocation/CurrentLocation";

export default function Index() {
    return (
        <div className="h-screen w-screen bg-background flex flex-col items-center justify-center space-y-3">
            <TypeAnimation
                sequence={[500, "findbad", 1500, "findgood", 500, "findgood.coffee"]}
                wrapper="div"
                cursor={true}
                className="text-accents text-3xl font-semibold tracking-wide"
            />
            <ZipcodeSearch />
            <div className="flex flex-row items-center justify-center opacity-50">
                <hr className="w-24 text-accents" />
                <h1 className="text-accents font-semibold px-4">OR</h1>
                <hr className="w-24 text-accents" />
            </div>
            <CurrentLocation />
            <div className="pt-2 text-xs opacity-50 text-accents font-semibold">
               <span className="pr-1">By</span> 
                <a target="_blank" className="underline text-accents font-semibold" href="https://www.camdressler.com">
                    Cam Dressler
                </a>
            </div>
        </div>
    );
}
