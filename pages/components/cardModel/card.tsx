import React, { useEffect, useState } from "react";
import {
    ContainerCard,
    Card,
    ImageCard,
    Legenda,
    ContainerReceitaBanner,
    ContaienrReceitasCards,
    ContainerCards,
    Image
} from "../componentes";
import Link from "next/link";
import api from "../../api/api";

type CardType = {
    id: string;
    img: string;
    nome: string;
    info: string;
    m: string;
};

const Cards = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        api.get("cards").then(({ data }) => {
            setCard(data);
        });
        console.log(card);
        // eslint-disabled-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ContainerCards>
                {card?.map((cards: CardType, index) => (
                    <ContaienrReceitasCards key={index} id={cards.id}>
                        <ContainerReceitaBanner>
                            <ContainerCard>
                                <Link href={`/receitas/${cards.id}`} passHref>
                                    <Card>
                                        <ImageCard>
                                            <Image src={cards.img} alt="Banner Image" />
                                        </ImageCard>
                                        <Legenda>
                                            <p>{cards.nome}</p>
                                            <p>Dificuldade: {cards.info}</p>
                                        </Legenda>
                                    </Card>
                                </Link>
                            </ContainerCard>
                        </ContainerReceitaBanner>
                    </ContaienrReceitasCards>
                ))}
            </ContainerCards>
        </>
    );
};

export default Cards;
