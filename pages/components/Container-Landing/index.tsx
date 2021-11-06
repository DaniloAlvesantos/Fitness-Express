import React from "react";
import style from "../../../styles/animations.module.css";
import { ContainerAbout, ContainerWellcome } from "./style";

const Containers: React.FC = () => {
    return (
        <>
            <ContainerAbout className={`${style["animate-insideAbout"]}`}>
                <h2>Ésta Procurando receitas ?</h2>
                <p>
                    <strong>Fitness Express</strong> mostrará para você receitas
                    de todo gosto.
                </p>
            </ContainerAbout>
            <ContainerWellcome className={`${style["animate-insideAbout1"]}`}>
                <h2>Quer perder alguns quilos a mais ?</h2>
                <p>
                    <strong>Você</strong> ésta no lugar certo !
                </p>
            </ContainerWellcome>
        </>
    );
};

export default Containers;
