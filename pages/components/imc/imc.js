import React, { useState } from "react";
import TabelaIMC from "../tabela/tabela";

const IMCFunc = () => {
    const [show, setShow] = useState(false);
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [result, setResult] = useState();

    function imc() {
        let imc = peso / (altura * altura);
        setResult(imc.toFixed(1));
    }

    return (
        <>
            <div className="flex items-center justify-center flex-col shadow-customized rounded-br-[20%] rounded-bl-[20%]">
                <h1 className="font-Roboto_mono uppercase text-[#111111] m-2">
                    imc
                </h1>
                <p>
                    Calcule seu <strong>IMC</strong> é veja resultado e se você
                    está em media.
                </p>
                <p>Monstrar indice:</p>
                <input type="checkbox" onChange={() => setShow(!show)} className="m-4 w-4 h-4 border " />
                {show && (
                    <div className="flex items-center justify-center flex-col">
                        <ul className="font-sans text-[#111111]">
                            <li>IMC:18.5 “Está Abaixo da media.”</li>
                            <li>IMC:35 “Está Acima da media.”</li>
                            <li>IMC entre 18 a 35 “Está dentro da media.”</li>
                            <li>IMC: 25 ”Está excelente !“</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="flex itemx-center justify-center flex-col m-8">
                <div className="flex items-center justify-center flex-col">
                    <input
                        placeholder="Altura"
                        onChange={(event) => {
                            setAltura(event.target.value);
                        }}
                        className="border-b border-solid border-[#111] bg-transparent outline-none font-sans m-1 w-[11.25rem]"
                    />
                    <input
                        placeholder="Peso"
                        onChange={(event) => {
                            setPeso(event.target.value);
                        }}
                        className="border-b border-solid border-[#111] bg-transparent outline-none font-sans m-1 w-[11.25rem]"
                    />
                    <button
                        onClick={imc}
                        className="border-solid border border-[#3083dc] hover:bg-[#3083dc] transition-colors hover:text-[#fafafa] rounded-md h-9 w-44 p-4 cursor-pointer flex items-center justify-center m-4"
                    >
                        Calcular
                    </button>
                    <h2 className="font-sans bg-[#cdf7f6] p-4 rounded-lg shadow-customized scale-100 transition hover:scale-105">
                        Resultado: {result}
                    </h2>
                </div>
            </div>
            <div className="flex items-center justify-center">{/*      */}</div>
        </>
    );
};

export default IMCFunc;
