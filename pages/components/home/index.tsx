import Link from "next/link";
import React from "react";

const cards = {
    RECIPE: {
        title: "Veja nossas receitas FIT !",
        txt: "Faça a receita do seu dia a dia",
        image: {
            souce: "gym.svg",
            alt: "halter",
        },
        href:"cards_receitas"
    },
    IMC: {
        title: "IMC",
        txt: "Calcule seu IMC !",
        image: {
            souce: "mass.svg",
            alt: "tape",
        },
        href:"imc"
    },
    EXE: {
        title: "Exercícios",
        txt: "Venha se exercítar !",
        image: {
            souce: "exercise.svg",
            alt: "bike",
        },
        href:"exercicios"
    },
};

const HomeComponents: React.FC = () => {
    return (
        <>
            <section className="flex items-center justify-center">
                <div className="w-full pt-8 pr-4 pb-8 pl-4">
                    <div className="w-full grid gap-4 items-center justify-center grid-cols-1 sml:grid-cols-500px">
                        {Object.entries(cards).map(([key, value]) => (
                            <div
                                key={key}
                                className="bg-[#ffffff] shadow-customized rounded-md ml-4 mr-4 h-28 sml:h-[12rem] flex items-center flex-col"
                            >
                                <header className="bg-[#1affd5] rounded-md h-12 w-full flex items-center justify-center p-3 ">
                                    <h2 className="font-Roboto_mono font-light text-base sml:text-[1.2rem]">
                                        {value.title}
                                    </h2>
                                </header>
                                <div className="w-full flex items-center text-center justify-center flex-col relative m-8">
                                    <img
                                        className="hidden sml:block w-16 h-16 absolute left-2 top-8"
                                        src={value.image.souce}
                                        alt="pages icon"
                                    />
                                    <a className="flex uppercase rounded-md max-w-[25rem] sml:mb-[-10rem] cursor-pointer font-Ubuntu items-center justify-center text-xs font-bold text-[#111111] p-3 sml:px-9 border-2 border-solid border-[#1affd5]  min-w-[15rem] h-4 ease-in transition-colors duration-300 hover:bg-[#1affd5]">
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
        </>
    );
};

export default HomeComponents;
