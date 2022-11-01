import React from "react";
import { data } from "./img-data";

const Slider: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div
                    id="slider"
                    className="w-full h-full snap-x snap-proximity overflow-x-scroll whitespace-nowrap  scroll-smooth  scrollbar-thin scrollbar-thumb-zinc-400 backdrop-blur-sm bg-gradient-to-t from-[#52FFEE] dark:from-[#121212] to-[#00b4a2] dark:to-[#303030] bg-fixed medium:scrollbar-hide"
                >
                    {data.map((value) => (
                        <img
                            key={value.id}
                            src={value.url}
                            alt={value.alt}
                            className="w-[28rem] snap-center inline-block m-4 rounded-md shadow-customized"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Slider;
