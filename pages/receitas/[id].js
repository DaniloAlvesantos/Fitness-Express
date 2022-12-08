/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Receita({ receita }) {
    console.log(receita);
    const [color, setColor] = useState(receita.color);
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        if (document.documentElement.classList.value === "dark") setTheme(true);
        else setTheme(false);
    }, []);

    return (
        <div className="dark:bg-[#1f1f1f]">
            <Head>
                <title>{receita.nome}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>
            <Header />
            <div
                className={`flex items-center justify-center flex-col -mb-4 pb-4`}
                style={{
                    background: `linear-gradient(${color}, ${
                        theme ? "" : "#1f1f1f"
                    })`,
                }}
            >
                <div className="w-full 380-screen:w-[95%] min-h-[22rem] 380-screen:m-2 p-4 rounded-md bg-[#f8ffe5] bg-opacity-20 backdrop-blur-lg drop-shadow-lg ">
                    <div className="flex items-center justify-center mb-2">
                        <h2 className="font-sans text-[1.4rem] text-[#f8ffe5]">
                            {receita.nome}
                        </h2>
                    </div>
                    <div className="grid justify-center grid-707:justify-around items-center gap-8 grid-cols-[repeat(auto-fit,minmax(300px,0fr))] grid-707:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] p-1 w-full h-full">
                        <div className="relative flex items-center justify-center grid-707:justify-left w-[100%] h-80 grid-707:w-[50%]">
                            <img
                                className=" grid-707:max-w-full grid-707:max-h-full absolute rounded-md shadow-xl"
                                src={receita.img}
                                alt="recipe image"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <p className="text-[#f8ffe5] text-lg -m-4 mb-2 w-full">
                                {receita.n}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center flex-col w-full 380-screen:w-[95%] rounded-lg m-12 bg-[#f8ffe5] bg-opacity-20 backdrop-blur-lg drop-shadow-lg text-[#fefdff] p-2 pb-4">
                    <div className="w-full flex items-center justify-center flex-col p-4">
                        <h2 className="font-Roboto_mono m-2 mb-4 text-lg md:text-2xl bg-[#1f1f1f] rounded-lg p-2 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">MODO DE PREPARO</h2>
                        <p className="md:text-lg">{receita.p}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export async function getStaticProps({ params }) {
    const receita = await fetch(
        `http://localhost:8080/cards/${params.id}`
    )
        .then((data) => {
            if (data.ok) {
                return data.json();
            }
            throw new Error("Deu problema");
        })
        .then((dataObj) => dataObj);

    return {
        props: {
            receita,
        },
    };
}

export async function getStaticPaths() {
    const receitas = await fetch(
        `http://localhost:8080/cards`
    )
        .then((re) => {
            if (re.ok) {
                return re.json();
            }
            throw new Error(" Problema ao buscar a API ! ");
        })
        .then((reObj) => reObj);
    return {
        paths: receitas.map((receita) => ({
            params: {
                id: receita.id.toString(),
            },
        })),
        fallback: false,
    };
}

export default Receita;
