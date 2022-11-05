import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isHover, setHover] = useState(false);
    const [infoHover, setInfo] = useState(false);
    const [theme, setTheme] = useState(false);

    function handleTheme() {
        setTheme(!theme);
        if (!theme === true) {document.documentElement.classList.add("dark");}
        else document.documentElement.classList.remove("dark");
        event?.preventDefault();
    }

    function loadTheme() {
        if(document.documentElement.classList.value === "dark") setTheme(true);
        else setTheme(false);
    }

    return (
        <>
            <header className="bg-[#2ebfa5] dark:bg-[#303030] text-[#f8ffe5] w-full h-16 flex">
                <div className="w-full inline-flex items-center">
                    <div className="hidden 450-screen:block">
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
                                className={`cursor-pointer w-12 h-12 m-4 flex p-2 bg-[#7dde92] dark:bg-[#121212] border-2 border-solid dark:border-[#121212] border-[#7dde92] rounded-md text-[#f8ffe5] font-['Fira Sans'] no-underline group hover:shadow-xl transition-shadow screen-375:p-1`}
                            >
                                <img src="/Google/home_.svg" alt="home_" />
                            </div>
                        </Link>
                        <span
                            className={`${
                                isHover ? "visible" : "hidden"
                            } medium:hidden absolute top-[4.4rem] right-[0.75rem] opacity-80 rounded-md pt-1 pb-1 pr-2 pl-2 bg-[#41463d] z-[1] font-Ubuntu font-semibold text-sm`}
                        >
                            HOME
                        </span>
                    </div>
                    <div>
                        <Link href="/sobre" passHref>
                            <div
                                onMouseOver={() => setInfo(true)}
                                onMouseLeave={() => setInfo(false)}
                                id="btn-secondary"
                                className="cursor-pointer bg-transparent border-2 border-solid border-[#7dde92] dark:border-[#121212] rounded-md w-12 h-12 p-2 m-2 mr-8  text-[#f8ffe5] font-['Fira Sans'] no-underline hover:shadow-xl after:transition-shadow transition-colors duration-150 ease-linear hover:bg-[#7dde92] hover:dark:bg-[#121212] screen-375:p-1"
                            >
                                <img src="/Google/info_.svg" alt="info_" />
                            </div>
                        </Link>
                        <span
                            className={`${
                                infoHover ? "visible" : "hidden"
                            } transition-all ease-linear opacity-80 
                                medium:hidden absolute  right-[5.56rem] top-[4rem] rounded-md pt-1 pb-1 pr-2 pl-2 bg-[#41463d] z-[1] font-Ubuntu font-semibold text-sm`}
                        >
                            SOBRE
                        </span>
                    </div>
                    <div className="m-8">
                        <button
                            onClick={handleTheme}
                            onLoad={loadTheme}
                            className="absolute w-10 md:w-12 h-5 md:h-6 top-5 right-5 rounded-2xl bg-[#f6f6f6] dark:bg-[#1f1f1f] flex items-center transition duration-300 shadow"
                        >
                            <div
                                className={`relative w-6 md:w-7 h-6 md:h-6 rounded-full transition transform duration-500 ${
                                    theme ? "translate-x-full" : "-tranlate-x-2"
                                } p-1 dark:bg-[#303030] bg-[#2ebfa5] shadow-md flex items-center`}
                            >
                                {theme ? (
                                    <img
                                        src="/Google/light_mode_.svg"
                                        alt="light mode"
                                    />
                                ) : (
                                    <img
                                        src="/Google/dark_mode_.svg"
                                        alt="dark mode"
                                    />
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
