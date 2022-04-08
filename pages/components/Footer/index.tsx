import Link from "next/link";
import React, { useState } from "react";
import {
    ContainerNavigation,
    ContainerIcons,
    Imagem,
    ContainerImage,
    ContainerFooter,
    HR
} from "./style";

const Footer: React.FC = () => {
    const [ano, setAno] = useState<Number>();

    function Data() {
        let date = new Date();
        let year = date.getFullYear();
        setAno(year);
    }

    return (
        <>
        <ContainerFooter>
        <HR/>
                <ContainerNavigation>
                    <Link href={"/Home"}>
                        <p>Home</p>
                    </Link>
                    <Link href={"/cards_receitas"}>
                        <p>Receitas</p>
                    </Link>
                    <Link href={"/imc"}>
                        <p>IMC</p>
                    </Link>
                    <Link href={"/exercicios"}>
                        <p>Exercícios</p>
                    </Link>
                </ContainerNavigation>
                <ContainerIcons>
                    <ContainerImage>
                        <Imagem  title="Linkedin" src="/linkedin.svg" />
                    </ContainerImage>
                    <ContainerImage>
                        <Imagem  title="Portifolio" src="/suitcase.svg" />
                    </ContainerImage>
                    <ContainerImage>
                        <Imagem  title="Youtube" src="/youtube.svg" />
                    </ContainerImage>
                </ContainerIcons>
        </ContainerFooter>
        </>
    );
};

export default Footer;
