import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {

    function scroll() {
        window.scrollTo({top:0, behavior: 'smooth'})
    }
    return (
        <>
            <div className="mt-4 pt-[5rem] h-80 bg-footer dark:bg-footer-dark bg-center bg-no-repeat bg-cover bg-[#52ffee] dark:bg-[#1f1f1f]">
                <div className="flex items-center justify-evenly w-[60%] mt-[3rem] mobile-sm:w-[80%]">
                    <ul className="flex justify-center flex-col font-['Inter'] w-8">
                        <h2 className="text-[#fafafa] border-b-2 w-[150%] pb-[3px] mb-[5px] font-xs">
                            MENU
                        </h2>
                        <li className="list-none text-[#fafafa] uppercase">
                            <Link href="/Home">
                                <a className="cursor-pointer hover:text-[#cdcdcdcd] transition-colors">
                                    HOME
                                </a>
                            </Link>
                        </li>
                        <li className="list-none text-[#fafafa] uppercase">
                            <Link href="/imc">
                                <a className="cursor-pointer hover:text-[#cdcdcdcd] transition-colors">
                                    IMC
                                </a>
                            </Link>
                        </li>
                        <li className="list-none text-[#fafafa] uppercase">
                            <Link href="/receitas">
                                <a className="cursor-pointer hover:text-[#cdcdcdcd] transition-colors">
                                    Receitas
                                </a>
                            </Link>
                        </li>
                        <li className="list-none text-[#fafafa] uppercase">
                            <Link href="/exercicios">
                                <a className="cursor-pointer hover:text-[#cdcdcdcd] transition-colors">
                                    Exercícios
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex justify-center flex-col font-['Inter'] w-8">
                        <h2 className="text-[#fafafa] border-b-2 w-[240%] pb-[3px] mb-[5px] font-xs">
                            CONTATO
                        </h2>
                        <li className="list-none text-[#fafafa] uppercase">
                            <a href="mailto:daniloasan.itapira@gmail.com" className="cursor-pointer hover:text-[#cdcdcdcd] transition-colors">
                                Gmail
                            </a>
                        </li>
                        <li className="list-none text-[#fafafa] uppercase">
                            <Link href="https://www.instagram.com/danilodos9818/?hl=pt-br">
                                <a target="_blank" className="cursor-pointer hover:text-[#cdcdcdcd] transition-colors">
                                    Instagram
                                </a>
                            </Link>
                        </li>
                        <li className="list-none text-[#fafafa] uppercase">
                            <br />
                        </li>
                        <li className="list-none text-[#fafafa] uppercase">
                            <br />
                        </li>
                    </ul>
                    <div className="flex justify-end absolute right-[5px] mb-[-4rem]">
                        <div className="flex items-center justify-center gap-4 group">
                            <button onClick={scroll} className="bg-[#1affd5] dark:bg-[#121212]  w-9 h-9 rounded-lg border-none p-[5px] mb-[-5rem] cursor-pointer flex justify-center items-center transition-colors duration-300 hover:bg-cyan-300 mobile-small:mr-10">
                                <img
                                    className="rotate-[-90deg] group-hover:opacity-75"
                                    src="/arrow.svg"
                                    alt="arrow"
                                />
                            </button>
                            <img
                                className="w-[10rem] h-[10rem] mobile-small:hidden"
                                src="/logo.png"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
