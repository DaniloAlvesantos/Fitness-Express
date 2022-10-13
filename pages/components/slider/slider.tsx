import React from "react";
import { data } from "./img-data";

const Slider: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div
                    id="slider"
                    className="w-full h-full snap-x snap-proximity overflow-x-scroll whitespace-nowrap  scroll-smooth  scrollbar-thin scrollbar-thumb-zinc-400 backdrop-blur-sm "
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
