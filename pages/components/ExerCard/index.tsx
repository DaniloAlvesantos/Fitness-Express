import React from 'react';
import Link from 'next/link';
import { TextPrimary, Container, TextSec, Button } from './style';

export default function ExerCard() {
    return(
        <>
            <Container>
                <TextPrimary>Você está precisando perder uns quilos a mais ?</TextPrimary>
                <TextSec>Então veja alguns de nossos exercícios !</TextSec>
                <Link href="/exercicios">
                    <Button>Ver Mais</Button>
                </Link>
            </Container>
        </>
    );
}
