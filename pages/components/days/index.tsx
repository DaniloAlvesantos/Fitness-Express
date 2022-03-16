import React from "react";
import { Container, TextPrimary, TextSecondery } from "./style";

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
            <Container>
                <TextPrimary>{Data()}</TextPrimary>
                <TextSecondery>{Frases()} </TextSecondery>
            </Container>
        </>
    );
};

export default Days;
