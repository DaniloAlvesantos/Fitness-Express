/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import api from "../../api/api";

type CardType = {
    id: string;
    img: string;
    nome: string;
    info: string;
    m: string;
};

const Cards = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        api.get("/cards").then(({ data }) => {
            setCard(data);
        });
    },[]);
    return (
        <div className="grid justify-center items-center gap-8 grid-cols-300-0fr p-1 dark:bg-[#1f1f1f]">
            {card?.map((cards: CardType, index) => (
                <div
                    className="flex justify-center items-center cards"
                    key={index}
                    id={cards.id}
                >
                    <div className="flex-col text-base">
                        <div className="w-[20em] h-[20em] m-2">
                            <Link href={`/receitas/${cards.id}`} passHref>
                                <div className="w-full h-full border-2 border-solid border-[#7dde92] dark:border-[#121212] rounded-lg cursor-pointer transition duration-500 relative overflow-hidden">
                                    <div className="w-full h-full absolute float-left hover:scale-125  ease-in-out transition">
                                        <img
                                            className="w-full h-full object-cover rounded-lg"
                                            src={cards.img}
                                            alt="Banner Image"
                                        />
                                    </div>
                                    <div
                                        id="info"
                                        className="bg-green-200 dark:bg-[#111111] opacity-70 text-[#111111] dark:text-[#fefdff] font-sans rounded-lg p-4 absolute left-0 bottom-0 w-full transition ease-linear duration-300"
                                    >
                                        <h2>{cards.nome}</h2>
                                        <p className="dificult">
                                            Dificuldade:{cards.info}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
