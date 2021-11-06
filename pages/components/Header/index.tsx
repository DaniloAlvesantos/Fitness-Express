import React from "react";
import Link from "next/link";
import style from "../../../styles/animations.module.css";
import {
    LogoTipo,
    TituloPrimary,
    HeaderBox,
    ContainerPrimary,
    ContainerLinks,
    ButtomSecondary,
    Buttom,
} from "./style";

export default function Header() {
    return (
        <HeaderBox>
            <ContainerPrimary>
                <div>
                    <LogoTipo src="/arm.png" alt="logo" />
                </div>
                <TituloPrimary
                    className={`${style["animate-inside"]}`}
                >
                    Fitness Express
                </TituloPrimary>
                <ContainerLinks>
                    <ButtomSecondary className={`${style["animate-left"]}`}>
                        <Link href="/Home">HOME</Link>
                    </ButtomSecondary>
                    <Buttom className={`${style["animate-left"]}`}>
                        <Link href="#">
                            <a>SOBRE</a>
                        </Link>
                    </Buttom>
                </ContainerLinks>
            </ContainerPrimary>
        </HeaderBox>
    );
}
