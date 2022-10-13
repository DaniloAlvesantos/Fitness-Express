import * as React from "react";
import { useState } from "react";
const Filter: React.FC = () => {
    const [facil, setFacil] = useState<Boolean>(false);
    const [medio, setMedio] = useState<Boolean>(false);
    const [dificil, setDificil] = useState<Boolean>(false);
    return (
        <>
            <div className="m-4 flex items-center justify-center bg-gradient-to-r from-[#6ef195] to-[#00e3fd] rounded-sm">
                <h2 className="m-2 font-medium font-mono text-lg">
                    Catálago de receitas
                </h2>
            </div>
            <ul
                className="flex items-start justify-center flex-col m-4 border-solid border-2 border-black rounded-md p-4 w-[15rem]"
            >
                <h2>Filtrar</h2>
                <label>Dificuldade</label>
                <li>
                    <input
                        type="checkbox"
                        id="facil"
                        onChange={() => setFacil(!facil)}
                    />
                    Fácil
                </li>
                <li>
                    <input
                        type="checkbox"
                        id="medio"
                        onChange={() => setMedio(!medio)}
                    />
                    Médio
                </li>
                <li>
                    <input
                        type="checkbox"
                        id="dificil"
                        onChange={() => setDificil(!dificil)}
                    />
                    Difícil
                </li>
            </ul>
        </>
    );
};

export default Filter;
