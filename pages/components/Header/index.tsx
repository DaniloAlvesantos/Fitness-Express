import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <>
            <header className="bg-[#2ebfa5] text-[#f8ffe5] w-full h-16 flex">
                <div className="w-full inline-flex items-center">
                    <div>
                        <img className="w-[3.75rem] h-[3.75rem] m-1 justify-start object-cover mobile-sm:w-[3rem] mobile-sm:h-[3rem]" src="/arm.png" />
                    </div>
                    <h2 className="ml-4 font-['Roboto'] uppercase text-lg">Fitness Express</h2>
                </div>
                <div className="flex items-center justify-end">
                    <div
                    id="btn-primary"
                    className="cursor-pointer bg-[#7dde92] border-2 border-solid border-[#7dde92] rounded-md p-2 m-4 text-[#f8ffe5] font-['Fira Sans'] no-underline shadow-customized screen-375:p-1">
                        <Link href="/Home">Home</Link>
                    </div>
                    <div
                    id="btn-secondary"
                    className="cursor-pointer bg-transparent border-2 border-solid border-[#7dde92] rounded-md p-2 m-2 text-[#f8ffe5] font-['Fira Sans'] no-underline shadow-customized transition-colors duration-150 ease-linear hover:bg-[#7dde92] screen-375:p-1"
                    >
                        <Link href="#">Sobre</Link>
                    </div>
                </div>
            </header>
        </>
    );
}
