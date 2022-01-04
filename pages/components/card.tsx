import * as React from "react";
import {
    ContainerCard,
    Card,
    ImageCard,
    Legenda,
    ContainerReceitaBanner,
    Image,
} from "./componentes";
import Link from "next/link";

const CardComponent: React.FC = () => {
    return (
        <ContainerReceitaBanner>
            <Link href="/cards_receitas" passHref>
                <ContainerCard title="Ver mais">
                    <Card>
                        <ImageCard>
                            <Image
                                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzcyUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="image ex"
                            />
                        </ImageCard>
                        <Legenda>
                            <h2>Receitas facies</h2>
                            <p>Dificuldade:Facil</p>
                        </Legenda>
                    </Card>
                </ContainerCard>
            </Link>
        </ContainerReceitaBanner>
    );
};

export default CardComponent;
