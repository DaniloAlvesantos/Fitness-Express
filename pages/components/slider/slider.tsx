import React from "react";
import { data } from "./img-data";

const Slider: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full bg-zinc-200">
                <div
                    id="slider"
                    className="w-full h-full overflow-x-scroll whitespace-nowrap  scroll-smooth  scrollbar-thin scrollbar-thumb-zinc-400 "
                >
                    {data.map((value) => (
                        <img
                            src={value.url}
                            alt={value.alt}
                            className="w-[28rem] inline-block m-4 rounded-md shadow-customized"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Slider;
