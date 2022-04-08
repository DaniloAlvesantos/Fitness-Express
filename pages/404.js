import styled from "styled-components";
import { Container } from "./components/componentes";

const Title = styled.h1`
    font-family:"Fira Sans", sans-serif;
    color:#111111;
`

export default function Custom404() {
    return (
        <>
            <Container>
                <Title>404 - Page Not Found</Title>
            </Container>
        </>
    )
}
