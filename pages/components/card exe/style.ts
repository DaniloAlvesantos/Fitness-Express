import styled from "styled-components";

// export const DARK_MEDIUM = "#111111";
// export const BLACK_OLIVE = "#41463D";
// export const BLACK_FOGRA = "#0e131f";
// export const LIGHT_BLUE = "#7899d4";
// export const MEDIUM_BLUE = "#3083dc";
// export const DARK_BLUE = "#0a369d";
// export const LIGHT_CYAN = "#cdf7f6";
// export const LIGHT_RICH = "#f8ffe5";
// export const LIGHT_RICH_SECONDARY = "#f4f7f6";
// export const LIGHT_GREEN = "#7dde92";
// export const GREEN_MEDIUM_CYAN = "#2ebfa5";
// export const SEA_GREEN = "#1AFFD5";
// export const ELETRIC_BLUE = "#8EEDF7";
// export const SKY_BLUE = "#0ACDFF";
// export const TURQUOISE_BLUE = "#52FFEE";
// export const LAVENDER_FLORAL = "#9D8DF1";
// export const PURPLE = "#5F00BA";
// export const RED = "#FD151B";

export const ContainerCards = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0.4rem;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: center;
`;

export const ContainerBanner = styled(Container)`
    flex-direction:column;
    font-size:15px;
    @media (max-width: 650px) {
        font-size: 88.5%;
    }
    @media (max-width: 460px) {
        font-size: 82.7%;
    }
    @media (max-width: 370px) {
        font-size: 75.5%;
    }
    @media (max-width: 300px) {
        font-size: 70.6%;
    }
`

export const ContainerCard = styled.div`
    width: 20em;
    height: 20em;

    margin: 1rem;

    h2 {
        color: #111111;
    }
    p {
        color: #111111;
        margin-left: 1rem;
    }
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;

    border: 2px solid #0ACDFF;
    border-radius: 10px;

    transform: scale(1.01);
    transition: 400ms;

    cursor: pointer;

    :hover {
        transform: scale(1);
    }
`;
export const ImageCard = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    float: left;
`;
export const Legenda = styled.div`
    background: #cdf7f6;
    opacity: 0.7;

    color: #111111;

    font-family: "Fira Sans", sans-serif;

    border-radius: 10px;

    padding: 1rem;

    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;

    transition: ease 400ms;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 10px;
`;
