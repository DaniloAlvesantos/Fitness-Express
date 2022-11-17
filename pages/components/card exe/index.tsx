import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import api from "../../api/api";
type CardType = {
    id: string;
    img: string;
    nome: string;
    nivel: string;
};
const CardsExe = () => {
    const [load, setLoad] = useState<Boolean>(true);
    const [card, setCard] = useState([]);
    useEffect(() => {
        api.get("exe").then(({ data }) => {
            setCard(data);
            setLoad(false);
        });
    }, []);
    return (
        <div className="dark:bg-[#1f1f1f]">
            <div className="grid justify-center items-center gap-8 grid-cols-300-0fr p-1 dark:bg-[#1f1f1f]">
                {load ? (
                    <p>Carregando...</p>
                ) : (
                    card?.map((cards: CardType, index) => (
                        <div
                            className="flex items-center justify-center"
                            key={index}
                            id={cards.id}
                        >
                            <div className="flex-col text-base">
                                <div className="w-[20em] h-[20em] m-2" onClick={() => alert("Exercícios não está disponivel nessa versão !")}>
                                    <Link
                                        //href={`/exercicio/${cards.id}`}
                                        href={`#`}
                                        passHref
                                    >
                                        <div className="w-full h-full border-2 border-solid border-[#7dde92] dark:border-[#121212] rounded-lg cursor-pointer transition duration-500 relative overflow-hidden">
                                            <div className="w-full h-full absolute float-left hover:scale-125  ease-in-out transition">
                                                <img
                                                    className="w-full h-full object-cover rounded-md"
                                                    src={cards.img}
                                                    alt="Banner Image"
                                                />
                                            </div>
                                            <div className="bg-green-200 opacity-70 text-[#111111] font-sans rounded-lg p-4 absolute left-0 bottom-0 w-full transition ease-linear duration-300">
                                                <p>{cards.nome}</p>
                                                <p>
                                                    Dificuldade: {cards.nivel}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
export default CardsExe;
