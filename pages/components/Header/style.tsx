import styled from "styled-components";
import React from "react";
import style from "../../../styles/animations.module.css";
import Link from "next/link";
import { GREEN_MEDIUM_CYAN, LIGHT_RICH, LIGHT_GREEN } from "../componentes";

type Prop = {
    error:string,
}

export default function Style() {
    return (
        <>
            <HeaderBox>
                <ContainerPrimary>
                    <div>
                        <LogoTipo src="/arm.png" alt="logo" />
                    </div>
                    <TituloPrimary className={`${style["animate-inside"]}`}>
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
        </>
    );
}

export const LogoTipo = styled.img`
    width: 3.75rem;
    height: 3.65rem;
    margin: 1rem;
    justify-content: flex-start;

    @media (max-width: 350px) {
        width: 3rem;
        height: 3rem;
    }
    @media (max-width: 320px) {
        margin: 0;
    }
`;
export const TituloPrimary = styled.h2`
    width: 20rem;
    font-family: "Roboto", sans-serif;

    text-transform: uppercase;

    animation-delay: 100ms;

    margin: 1rem;

    @media (max-width: 425px) {
        font-size: 15px;
    }
    @media (max-width: 330px) {
        font-size: 14px;
    }
`;
export const HeaderBox = styled.header`
    background: ${GREEN_MEDIUM_CYAN};
    color: ${LIGHT_RICH};

    width: 100%;
    height: 60px;

    display: flex;
`;
export const ContainerPrimary = styled.div`
    width: 100%;

    display: inline-flex;
    align-items: center;
`;
export const ContainerLinks = styled.div`
    width: 100%;
    display:inline-flex;
    align-items: center;
    justify-content: flex-end;
`;
export const Buttom = styled.div`
    background: ${LIGHT_GREEN};
    border: 2px solid ${LIGHT_GREEN};

    border-radius: 5px;

    padding: 0.4rem 0.8rem 0.4rem 0.8rem;
    margin: 1rem;

    color: ${LIGHT_RICH};

    font-family: "Fira Sans", sans-serif;

    text-decoration: none;

    transition: 400ms;

    box-shadow: 1px 2px 10px 2px rgba(145, 238, 165, 0.41);

    cursor: pointer;

    :hover {
        box-shadow: 1px 2px 10px 2px rgba(205, 247, 246, 0.41);

        transition: 300ms;
    }

    @media (max-width: 440px) {
        padding: 0.3rem;
        margin: 0.2rem;
    }
`;

export const ButtomSecondary = styled(Buttom)`
    border: 2px solid ${LIGHT_GREEN};
    background: transparent;

    transition: 1s;
    animation-delay: 100ms;

    font-family: "Fira Sans", sans-serif;

    :hover {
        transition: 1s;
        background: ${LIGHT_GREEN};
    }
`;
