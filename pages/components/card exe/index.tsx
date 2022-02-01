import React, { useState, useEffect } from "react";
import Link from "next/link";
import api from "../../api/api";
import {
    ContainerCards,
    Container,
    ContainerBanner,
    ContainerCard,
    Card,
    ImageCard,
    Legenda,
    Image,
} from "./style";
type CardType = {
    id: string;
    img: string;
    nome: string;
    nivel: string;
};
const CardsExe = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        api.get("exe").then(({ data }) => {
            setCard(data);
        });
        // eslint-disabled-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <ContainerCards>
                {card?.map((cards: CardType, index) => (
                    <Container key={index} id={cards.id}>
                        <ContainerBanner>
                            <ContainerCard>
                                <Link href={`/exercicio/${cards.id}`}>
                                    <Card>
                                        <ImageCard>
                                            <Image
                                                src={cards.img}
                                                alt="Banner Image"
                                            />
                                        </ImageCard>
                                        <Legenda>
                                            <p>{cards.nome}</p>
                                            <p>Dificuldade: {cards.nivel}</p>
                                        </Legenda>
                                    </Card>
                                </Link>
                            </ContainerCard>
                        </ContainerBanner>
                    </Container>
                ))}
            </ContainerCards>
        </>
    );
};
export default CardsExe;
