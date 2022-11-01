import Link from "next/link";
import React from "react";

const cards = {
    RECIPE: {
        title: "Veja nossas receitas FIT !",
        txt: "Faça a receita do seu dia a dia",
        image: {
            souce: "/Google/menu_book_.svg",
            alt: "halter",
        },
        href: "cards_receitas",
    },
    IMC: {
        title: "IMC",
        txt: "Calcule seu IMC !",
        image: {
            souce: "/Google/scale_.svg",
            alt: "tape",
        },
        href: "imc",
    },
    EXE: {
        title: "Exercícios",
        txt: "Venha se exercítar !",
        image: {
            souce: "/Google/fitness_center_.svg",
            alt: "bike",
        },
        href: "exercicios",
    },
};

const HomeComponents: React.FC = () => {
    return (
        <section className="flex items-center justify-center dark:bg-[#1f1f1f] ">
            <div className="w-full pt-8 pr-4 pb-8 pl-4">
                <div className="w-full grid gap-4 items-center justify-center grid-cols-1 sml:grid-cols-500px">
                    {Object.entries(cards).map(([key, value]) => (
                        <div
                            key={key}
                            className="bg-[#ffffff] dark:bg-[#1f1f1f] shadow-customized rounded-md ml-4 mr-4 h-28 sml:h-[12rem] flex items-center flex-col"
                        >
                            <header className="bg-gradient-to-r from-[#52FFEE] to-[#00b4a2] rounded-md h-12 w-full flex items-center justify-center p-3 ">
                                <h2 className="font-Roboto_mono font-light text-base sml:text-[1.2rem]">
                                    {value.title}
                                </h2>
                            </header>
                            <div className="w-full flex items-center text-center justify-center flex-col relative m-8">
                                <img
                                    className="hidden  sml:block w-16 h-16 absolute left-2 top-8 bg-[#00b1a2] dark:bg-[#121212] p-2 rounded-full"
                                    src={value.image.souce}
                                    alt="pages icon"
                                />
                                <a className="flex uppercase rounded-md max-w-[25rem] sml:mb-[-10rem] cursor-pointer font-Ubuntu items-center justify-center text-xs font-bold text-[#111111] dark:text-[#FDFEFF] hover:dark:text-[#121212] p-3 sml:px-9 border-2 border-solid border-[#1affd5]  min-w-[15rem] h-4 ease-in transition-all duration-300 hover:bg-[#1affd5]">
                                    <Link href={`/${value.href}`}>
                                        {value.txt}
                                    </Link>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeComponents;
