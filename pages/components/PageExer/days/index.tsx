import React from "react";

const Days: React.FC = () => {
    function Data() {
        let date = new Date();
        let day = [
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado",
        ];
        let fullDay = day[date.getDay()];
        // array day no indice "[]", é o que o "date.getDay" me retornar...
        return fullDay;
    }
    function Frases() {
        let date = new Date();
        let day = date.getDay();
        console.log(day);
        if (day == 0) {
            return "Sério ? fazer exercício no Domingo ?? ";
        }
        if (day == 1) {
            return "Que tal começar a semana fazendo exercícios ?";
        }
        if (day == 2) {
            return "Terça-feira, vamos comçar já com alguns exercícios ?";
        }
        if (day == 3) {
            return "Quarta-feira... Hoje você não vai pra feira em 😂😂 Bora fazer exercício.";
        }
        if (day == 4) {
            return "Quinta-feira, bora fazer esse dia ser focado no seu corpo !";
        }
        if (day == 5) {
            return "Sexta-feira, SEXTOUU !! Bora malhar !!";
        }
        if (day == 6) {
            return "Hoje é Sábado, que tal fazer alguns exercícios nesse final de semana ??";
        }
    }
    return (
        <>
            <div className="flex items-center justify-center flex-col w-[min(700px,calc(38% + 100px))] shadow-2xl bg-[#f9fdff] rounded-lg p-8 m-3 mb-6">
                <h2 className="font-Inter text-lg text-[#3083dc] uppercase">{Data()}</h2>
                <h3 className="font-sans text-base text-[#111111]">{Frases()} </h3>
            </div>
        </>
    );
};

export default Days;
