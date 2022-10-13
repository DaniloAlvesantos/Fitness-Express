import React from "react";
import MainContent from "./Main";
import TopCards from "./TopCards";

export const CardsOBJ = {
    ABOUT: {
        title: 'O que é Fitness Express ?',
        content: 'Fitness Express é o site que irá te deixar em forma,não só fisicamente, mas na sua dieta também. Vamos deixar você em forma com qual maneira ? Simplês !! Com exercícios e receitas saldaveis.'
    },
    SECURITY: {
        title: 'Fitness Express é confiavel ?',
        content:'Sim !  Não é qualquer site, mas o site que vai te auxiliar no seu dia a dia'
    },
    CONTENT: {
        title: 'Qual é o conteúdo ?',
        content:'Fitness Express oferece conteúdo de receitas fit e exercícios para sua saúde.'
    },
};

const Containers: React.FC = () => {
    return (
        <>
            <TopCards  />
            <MainContent />
        </>
    );
};

export default Containers;
