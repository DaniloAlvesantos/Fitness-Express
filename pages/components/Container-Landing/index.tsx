import React from "react";
import {
    CardBox,
    PrimaryBox,
    Container,
    ContainerAbout,
    Headline,
    ContainerTxt
} from "./style";

const Containers: React.FC = () => {
    return (
        <>
            <PrimaryBox>
                <Container>
                    <CardBox>
                        <h2>O que é " Fitness Express " ??</h2>
                        <br />
                        <p>
                            Fitness Express é o site que irá te deixar em forma,
                            não só fisicamente, mas na sua dieta também. <br />
                            Vamos deixar você em forma com qual maneira ?
                            Simplês !! Com exercícios e receitas saldaveis.
                        </p>
                    </CardBox>
                    <CardBox>
                        <h2>Fitness Express é confiavel ? </h2>
                        <br />
                        <p>
                            Sim ! <br />
                            <br /> Não é qualquer site, mas o site que vai te
                            auxiliar no seu dia a dia
                        </p>
                    </CardBox>
                    <CardBox>
                        <h2>Qual é o conteúdo ?</h2>
                        <br />
                        <p>
                            Fitness Express oferece conteúdo de receitas
                            <strong> fit </strong> e exercícios para sua
                            <strong> saúde.</strong>
                        </p>
                    </CardBox>
                </Container>
            </PrimaryBox>
            <ContainerAbout>
                <Headline>
                    <h2>Venha conhecer mais de nós !!</h2>
                </Headline>
                <ContainerTxt>
                    <p>Nós iremos te auxiliar com exercícios e cardapios variados, para ajudar na sua estética e saúde</p>
                    <p>Este site não foi feito para ganhar dinheiro, mas sim para sua saúde</p>
                    <p>Ainda estamos em desenvolvimento... mas você ainda pode se surpreender com nossos conteúdo !</p>
                    <p>Ainda não somos uma empresa, infelizmente 😥</p>
                </ContainerTxt>
            </ContainerAbout>
        </>
    );
};

export default Containers;
