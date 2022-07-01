import Link from "next/link";
import React from "react";
import {
    Section,
    Container,
    Box,
    CardNavigation,
    IMG,
    BtnEffect,
    About
} from "./style";

const HomeComponents: React.FC = () => {
    return (
        <>
            <Section>
                <Container>
                    <Box>
                        <CardNavigation>
                            <IMG src="gym.svg" />
                            <About>
                                <h2>Veja nossas receitas Fit !</h2>
                            </About>
                            <BtnEffect>
                                <Link href="/cards_receitas">
                                        Aprenda a Fazer a receita do seu dia a dia
                                </Link>
                            </BtnEffect>
                        </CardNavigation>
                        <CardNavigation>
                            <IMG src="body mass.svg" />
                            <About>
                                <h2>IMC</h2>
                            </About>
                            <BtnEffect><Link href="/imc">Calcule seu IMC !</Link></BtnEffect>
                        </CardNavigation>
                        <CardNavigation>
                            <IMG src="exercise.svg" />
                            <About>
                                <h2>Exercícios</h2>
                            </About>
                            <BtnEffect><Link href="/exercicios">Venha se exercítar !</Link></BtnEffect>
                        </CardNavigation>
                    </Box>
                </Container>
            </Section>
        </>
    );
};

export default HomeComponents;
