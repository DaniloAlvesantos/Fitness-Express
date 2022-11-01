import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
import api from "../../../api/api";

type Cards = {
    id: string;
    img: string;
    nome: string;
    nivel: string;
};


const Card: React.FC = () => {
    const [cardApi, setApi] = useState<Cards>();
    const [theme, setTheme] = useState(false);
    const [number, setNumber] = useState<number>(
        Math.floor(Math.random() * 8) || 1
    );
    useEffect(() => {
        console.log(number);
        api.get(`cards/${number}`).then(({ data }) => {
            setApi(data);
            console.log(data);
        });
    }, []);
    return (
        <>
            {!cardApi ? (
                <div className="m-4 flex items-center justify-center flex-col">
                    <h1 className="font-Inter">Loading...</h1>
                    <img
                        src="/Google/refresh_.svg"
                        alt="Loaing"
                        className="animate-spin m-2"
                    />
                </div>
            ) : (
                <Link href={`/receitas/${cardApi.id}`} passHref>
                    <div
                        className="flex items-center justify-center"
                        key={cardApi?.id}
                    >
                        <div className="flex-col text-base">
                            <div className="w-[17em] 380-screen:w-[20em] h-[17em] 380-screen:h-[20em] m-2">
                                <div className="w-full h-full border-2 border-solid border-[#7dde92] dark:border-[#111111] rounded-lg cursor-pointer transition duration-500 relative overflow-hidden">
                                    <div className="w-full h-full absolute float-left hover:scale-125  ease-in-out transition">
                                        <img
                                            className="w-full h-full object-cover rounded-md"
                                            src={cardApi?.img}
                                            alt="Banner Image"
                                        />
                                    </div>
                                    <div className="bg-green-200 dark:bg-[#303030] opacity-70 text-[#111111] dark:text-[#fdfeff] font-sans rounded-lg p-4 absolute left-0 bottom-0 w-full transition ease-linear duration-300">
                                        <p>{cardApi?.nome}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

export default Card;
