import styled from "styled-components";

interface ContainerProps {
    primary:string;
}

export const ContainerFooter = styled.div`
    margin-top: 1rem;
    padding-top: 5rem;
    height: 20rem;
    background-image: url("/wave01.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #52ffee;
`;

export const BoxMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;

    margin-top:3rem;
    @media(max-width:370px) {
        width:70%;
    }
`;

export const List = styled.ul`
    display: flex;
    justify-content:center;
    flex-direction: column;

    font-family: "Inter", sans-serif;

    width: 2rem;
    @media(max-width:370px) {
        margin-left:1.5rem;
        margin-right:1.5rem;
    }
`;

export const H2 = styled.h2<ContainerProps>`
    color: #fafafa;
    border-bottom: 1px solid #fafafa;

    font-size: 1rem;

    width:${(props) => props.primary};

    padding-bottom:3px;
    margin-bottom:5px;
`;

export const NavList = styled.li`
    color: #fafafa;
    list-style: none;

   text-transform: uppercase;

   a {
    cursor:pointer;
    transition:1s;
    :hover {
        color:#cdcdcdcd;
    }
   }
`;

export const Box = styled.div`
    display:flex ;
    justify-content:end;
    position:absolute ;
    right:5px;
    margin-bottom:-6.8rem;
`

export const BoxContent = styled.div`
    display:flex ;
    align-items:center;
    justify-content:center;
    gap:1rem;
`

export const ButtonToTop = styled.button`
    background:#1AFFD5 ;
    width:38px;
    height:38px;
    border-radius:10px;
    border:none;
    padding:5px;

    margin-bottom:-5rem;

    cursor: pointer;

    img {
        transform: rotate(-90deg);
    }
`

export const Logo = styled.img`
    width:10rem;
    height:10rem;

    @media(max-width:370px) {
        display:none;
    }
`
