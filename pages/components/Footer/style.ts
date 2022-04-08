import styled from "styled-components";

export const HR = styled.hr`
    width:100%;
    height:1rem;
`

export const ContainerFooter = styled.div `
    margin-top:3rem;
`

export const ContainerNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;

    p {
        font-family: "Open Sans", sans-serif;
        font-size: 1rem;
        text-transform: uppercase;
        margin: 0px 5px 0px 5px;
        transition: 800ms;
        cursor: pointer;

        :hover {
            color: #cccc;
            transition: 500ms;
        }
    }
`;

export const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;
export const Imagem = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;

export const ContainerImage = styled.div`
    border-radius: 50%;
    border: 1px solid #111111;
    padding: 1rem;
    transition: 300ms;
    margin: 0px 1rem 0px 1rem;
    box-shadow: 1px 3px 1px 1px rgba(0, 0, 0, 0.41);
    cursor:pointer;
    :hover {
        transform: translateY(10px);
    }
`;
