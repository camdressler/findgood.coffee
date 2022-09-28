import React, { useState, useEffect } from "react";

export default function Index() {
    const text1 = "FindGood.Coffee";

    const [firstText, setFirstText] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFirstText(text1.slice(0, text1.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
    }, [firstText]);

    return (
        <div className="h-screen w-screen bg-background flex flex-col items-center justify-center space-y-4">
            <span className="text-accents text-3xl font-semibold tracking-wide blinking-cur">FindGood.Coffee</span>
            <div className="border-2 bg-transparent border-accents rounded-lg w-72 h-8"></div>
        </div>
    );
}
