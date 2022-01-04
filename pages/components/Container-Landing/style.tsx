import React from "react";
import styled from "styled-components";
import {
    LIGHT_RICH,
    SEA_GREEN,
    SKY_BLUE,
    LIGHT_CYAN,
    ELETRIC_BLUE,
} from "../componentes";

export default function style() {
    return (
        <></>
    )
}

export const  ContainerAbout = styled.div`
    background: linear-gradient(280deg, ${SEA_GREEN}, ${SKY_BLUE});
    color: ${LIGHT_RICH};
    width: 40%;

    margin: 2rem;
    padding: 1rem;

    border-radius: 10px;

    box-shadow: 1px 2px 10px 2px rgb(0 0 0 / 41%);

    font-family: "Fira Sans", sans-serif;

    animation-delay: 250ms;

    transition: ease 500ms;
    transform: scale(1);

    strong {
        color: ${LIGHT_CYAN};
    }
    h2 {
        margin: 0.4rem;
    }
    p {
        margin: 0.4rem;
    }
    :hover {
        transform: scale(1.01);
        transition: ease 500ms;
    }
    :strong {
        color: ${LIGHT_CYAN};
    }
    @media (max-width: 840px) {
        width: 50%;
    }
    @media (max-width: 670px) {
        width: 55%;
    }
    @media (max-width: 425px) {
        h2 {
            font-size: 15px;
        }
        p {
            font-size: 15px;
        }
    }
    @media (max-width: 385px) {
        h2 {
            font-size: 14px;
        }
        p {
            font-size: 14px;
        }
    }
    @media (max-width: 330px) {
        h2 {
            font-size: 12.6px;
        }
        p {
            font-size: 13px;
        }
    }
    @media (max-width: 300px) {
        width: 60%;
        margin: 0.8rem;
    }
`;
export const ContainerWellcome = styled.div`
    background: linear-gradient(180deg, ${ELETRIC_BLUE}, ${SKY_BLUE});
    color: ${LIGHT_RICH};

    font-family: "Fira Sans", sans-serif;

    width: 50%;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    margin: 1rem;

    position: absolute;
    right: 2px;

    box-shadow: 1px 2px 10px 2px rgb(0 0 0 / 41%);

    animation-delay: 250ms;

    transform: scale(1);
    transition: ease 400ms;

    p {
        margin-top: 0.4rem;
    }
    :hover {
        transform: scale(1.01);
    }
    @media (max-width: 385px) {
        h2 {
            font-size: 20px;
        }
        p {
            font-size: 15px;
        }
    }
    @media (max-width: 330px) {
        h2 {
            font-size: 15px;
        }
        p {
            font-size: 13px;
        }
    }
    @media (max-width: 300px) {
        width: 60%;
        margin: 0.8rem;
    }
`;
