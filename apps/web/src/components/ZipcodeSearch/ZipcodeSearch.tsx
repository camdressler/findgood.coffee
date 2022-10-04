import React, { useState } from "react";

export default function () {
    const [zipcode, setZipcode] = useState("");

    const validateZipcode = () => {
        setZipcode(input);
    };

    return (
        <>
            <input
                onChange={e => validateZipcode(e.target.value)}
                value={zipcode}
                placeholder="Enter your zipcode"
                className="border-2 bg-transparent border-accents rounded-lg w-72 h-8 px-4 py-4 text-accents placeholder-accents placeholder-opacity-75"
            />
        </>
    );
}
