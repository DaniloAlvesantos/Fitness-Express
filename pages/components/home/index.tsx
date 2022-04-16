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
                                Aprenda a Fazer a receita do seu dia a dia
                            </BtnEffect>
                        </CardNavigation>
                        <CardNavigation>
                            <IMG src="body mass.svg" />
                            <About>
                                <h2>IMC</h2>
                            </About>
                            <BtnEffect>Calcule seu IMC !</BtnEffect>
                        </CardNavigation>
                        <CardNavigation>
                            <IMG src="exercise.svg" />
                            <About>
                                <h2>Exercícios</h2>
                            </About>
                            <BtnEffect>Venha se exercítar !</BtnEffect>
                        </CardNavigation>
                    </Box>
                </Container>
            </Section>
        </>
    );
};

export default HomeComponents;
