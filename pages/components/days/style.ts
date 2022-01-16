import styled from "styled-components";


export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    width:min(700px, calc(38% + 100px));

    padding:1rem;
    margin:1rem;

    transition:1s;

    border-radius: 10px;
    box-shadow:0px 10px 40px -5px rgb(0 0 120  / 25%);
    :hover {
        transition:2s;
        box-shadow: 5px 10px 45px -8px rgba(0, 0, 0, 0.41);
    }
`

export const TextPrimary = styled.h2`
    font-family: "Inter", sans-serif;
    font-size:1.5rem;
    color:#3083dc;
    text-transform:uppercase;
`

export const TextSecondery = styled.h3`
    font-family:"Fira Code", sans-serif;
    font-size:1rem;
    color:#111111;
`
