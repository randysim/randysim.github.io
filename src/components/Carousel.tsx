"use client";
import { useState } from "react";

export default function Carousel(
    {
        elements
    } : {
        elements: React.ReactNode[]
    }
) {
    const [index, setIndex] = useState(0);

    return (
        <div className="flex flex-col flex-wrap w-full justify-center px-5">
            <div className="flex justify-center items-center w-full overflow-hidden">
                <div className="flex flex-col-reverse w-[800px] h-[300px] sm:h-[400px] ">
                    {elements[index]}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row justify-center w-[50%] max-w-[400px] rounded-bl-xl rounded-br-xl p-2 bg-backgroundSecondary">
                    {
                        elements.map((_, i) => (
                            <button
                                key={i}
                                className={`w-4 h-4 mx-1 rounded-full ${i === index ? "bg-backgroundContrast" : "bg-background"}`}
                                onClick={() => setIndex(i)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}