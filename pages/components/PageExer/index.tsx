import React from "react";
import CardsExe from "../card exe";
import {
    Container,
    TextPrimary,
    ContainerHeader,
    ContainerSection,
} from "./style";
import Days from "../days/index";

const Exe: React.FC = () => {
    return (
        <>
            <Container>
                <ContainerSection>
                    <ContainerHeader>
                        <TextPrimary>Exercícios</TextPrimary>
                    </ContainerHeader>
                </ContainerSection>
                <Days />
            </Container>
            <CardsExe />
        </>
    );
};

export default Exe;
