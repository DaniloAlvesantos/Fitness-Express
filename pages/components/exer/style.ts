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

export const Container = styled.div`
    width: min(1000px, calc(43% + 100px));
    height: 11rem;
    border-radius: 5px;
    border: 2px solid #1affd5;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 1rem;
    background: #f4f7f6;
`;
export const TextPrimary = styled.h1`
    font-size: clamp(1rem, 1.3rem, 1.5rem);
    color: #0acdff;
    font-family: "Fira Sans", sans-serif;
    @media (max-width: 895px) {
        font-size: 1.2rem;
    }
    @media (max-width: 700px) {
        font-size: 1.1rem;
    }
    @media (max-width: 565px) {
        font-size: 1rem;
    }
    @media (max-width: 440px) {
        font-size: 0.9rem;
    }
`;
export const TextSec = styled.h2`
    font-size: clamp(1rem, 1.3rem, 1.5rem);
    color: #52ffee;
    font-family: "Inter", sans-serif;
    @media (max-width: 895px) {
        font-size: 1.2rem;
    }
    @media (max-width: 700px) {
        font-size: 1.1rem;
    }
    @media (max-width: 630px) {
        font-size: 1rem;
    }
    @media (max-width: 565px) {
        font-size: 0.9rem;
    }
    @media (max-width: 490px) {
        font-size: 0.8rem;
    }
`;
export const Button = styled.button`
    background: #f4f7f6;
    width: 6rem;
    height: 2rem;
    border: 2px solid #1affd5;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 1s ease;
    :hover {
        transition: 1s ease;
        background: #1affd5;
        color: #fff;
    }
    @media (max-width: 490px) {
        width: 5rem;
        font-size: 0.7rem;
    }
`;
