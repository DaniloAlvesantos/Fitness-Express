import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isHover, setHover] = useState(false);
    const [infoHover, setInfo] = useState(false);
    return (
        <>
            <header className="bg-[#2ebfa5] text-[#f8ffe5] w-full h-16 flex">
                <div className="w-full inline-flex items-center">
                    <div>
                        <img
                            className="w-[3.75rem] h-[3.75rem] m-1 justify-start object-cover mobile-sm:w-[3rem] mobile-sm:h-[3rem]"
                            src="/arm.png"
                            alt="arm logo"
                        />
                    </div>
                    <h2 className="ml-4 font-['Roboto'] uppercase text-xl">
                        Fitness Express
                    </h2>
                </div>
                <div className="flex items-center">
                    <div
                        onMouseLeave={() => {
                            setHover(false);
                            setInfo(false);
                        }}
                        className="relative"
                    >
                        <Link href="/Home" passHref>
                            <div
                                onMouseOver={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                id="btn-primary"
                                className={`cursor-pointer m-4 flex p-2 bg-[#7dde92] border-2 border-solid border-[#7dde92] rounded-md text-[#f8ffe5] font-['Fira Sans'] no-underline group hover:shadow-xl transition-shadow screen-375:p-1`}
                            >
                                <img src="/Google/home_.svg" alt="home_" />
                            </div>
                        </Link>
                        <span
                            className={`${
                                isHover ? "visible" : "hidden"
                            } medium:hidden absolute top-[4.7rem] right-[1rem] opacity-80 rounded-md pt-1 pb-1 pr-2 pl-2 bg-[#41463d] z-[1] font-Ubuntu font-semibold text-sm`}
                        >
                            HOME
                        </span>
                    </div>
                    <div>
                        <Link href="#" passHref>
                            <div
                                onMouseOver={() => setInfo(true)}
                                onMouseLeave={() => setInfo(false)}
                                id="btn-secondary"
                                className="cursor-pointer bg-transparent border-2 border-solid border-[#7dde92] rounded-md p-[0.4rem] m-2 mr-4 text-[#f8ffe5] font-['Fira Sans'] no-underline hover:shadow-xl after:transition-shadow transition-colors duration-150 ease-linear hover:bg-[#7dde92] screen-375:p-1"
                            >
                                <img src="/Google/info_.svg" alt="info_" />
                            </div>
                        </Link>
                        <span
                            className={`${infoHover ? "visible" : "hidden"} transition-all ease-linear opacity-80 
                                medium:hidden absolute  right-[0.8rem] top-[4rem] rounded-md pt-1 pb-1 pr-2 pl-2 bg-[#41463d] z-[1] font-Ubuntu font-semibold text-sm`}>
                            SOBRE
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
}
