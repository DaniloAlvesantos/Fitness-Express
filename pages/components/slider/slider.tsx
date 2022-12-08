import React from "react";

const data = [
    {
        id: 1,
        url:"https://i.ibb.co/LNsgSnG/2.png",
        alt:"recipe"
    },
    {
        id:2,
        url:"https://i.ibb.co/crqpgDq/1.png",
        alt:"exercise"
    },
    {
        id:3,
        url:"https://i.ibb.co/GnWhxX6/3.png",
        alt:"imc"
    },
    {
        id:3,
        url:"https://i.ibb.co/GnWhxX6/3.png",
        alt:"imc"
    },
    {
        id:3,
        url:"https://i.ibb.co/GnWhxX6/3.png",
        alt:"imc"
    },
    {
        id:3,
        url:"https://i.ibb.co/GnWhxX6/3.png",
        alt:"imc"
    },
    {
        id:3,
        url:"https://i.ibb.co/GnWhxX6/3.png",
        alt:"imc"
    }
]

const Slider: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div
                    id="slider"
                    className="w-full h-full snap-x snap-proximity overflow-x-scroll whitespace-nowrap  scroll-smooth  scrollbar-thin scrollbar-thumb-zinc-400 backdrop-blur-sm bg-gradient-to-t from-[#52FFEE] dark:from-[#121212] to-[#00b4a2] dark:to-[#303030] bg-fixed medium:scrollbar-hide"
                >
                    {data.map((value) => (
                        <picture key={value.id}>
                            <source srcSet={value.url} type="image/webp" />
                            <img
                                src={value.url}
                                alt={value.alt}
                                className="w-[28rem] snap-center inline-block m-4 rounded-md "
                            />
                        </picture>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Slider;
