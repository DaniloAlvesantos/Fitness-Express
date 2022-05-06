import React from "react";
import styled from "styled-components";

export default function style() {
    return <></>;
}

// export const DARK_MEDIUM = "#111111";
// export const BLACK_OLIVE = "#41463D";
// export const BLACK_FOGRA = "#0e131f";
// export const LIGHT_BLUE = "#7899d4";
// export const MEDIUM_BLUE = "#3083dc";
// export const MEDIUM_BLUE = "#3c9aff";
// export const DARK_BLUE = "#0a369d";
// export const LIGHT_CYAN = "#cdf7f6";
// export const LIGHT_RICH = "#f8ffe5";
// export const LIGHT_RICH_SECONDARY = "#f4f7f6";
// export const LIGHT_GREEN = "#7dde92";
// export const GREEN_MEDIUM_CYAN = "#2ebfa4c7";
// export const GREEN_MEDIUM_CYAN = "#2ebfa5";
// export const SEA_GREEN = "#1affd5";
// export const ELETRIC_BLUE = "#8eedf7";
// export const SKY_BLUE = "#0ACDFF";
// export const TURQUOISE_BLUE = "#52FFEE";
// export const LAVENDER_FLORAL = "#9D8DF1";
// export const PURPLE = "#5F00BA";
// export const RED = "#fd151b";

export const Section = styled.section `
    display:flex;
    align-items:center;
    justify-content:center;
`

export const Container = styled.div`
    width:100%;
    padding:2rem 1rem 2rem 1rem;
`;

export const Box = styled.div`
    display: grid;
    grid-gap: 1rem;
    align-items:center;
    justify-content:center;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

export const CardNavigation = styled.div`
    background: #ffffff;
    box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.41);
    border-radius: 5px;

    margin:0px 1rem 0px 1rem;

    width:38rem;
    height:12rem;

    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    position:relative;
`;

export const About = styled.div`
    background:#0ACDFF;
    border-radius:8px;

    height:3rem;
    display:flex;
    align-items:center;
    justify-content:center;

    min-width:15rem;

    padding:10px;
    margin:1rem;
    h2 {
        font-family: "Roboto Mono", sans-serif;
        font-weight: 300;
        font-size:1.2rem;
    }
`

export const IMG = styled.img `
    width:4rem;
    height:4rem;

    position:absolute;
    left:8px;
    top:5px;
`

export const BtnEffect = styled.a`
    display: flex;
    text-decoration: none;
    text-transform: uppercase;

    border-radius: 5px;

    cursor: pointer;

    font-family: "Ubuntu", sans-serif;

    align-items: center;
    justify-content: center;

    font-size: 11px;
    font-weight: bold;

    color: #111111;

    padding: 10px 35px;

    border: 2px solid #8EEDF7;

    overflow: hidden;

    position: relative;

    min-width:15rem;
    height: 1rem;

    transition: 3s ;

    z-index: 10;

    &:before {
        content: "";
        position: absolute;
        top: 0%;
        left: 0%;

        width: 100%;
        height: 100%;

        background:#8EEDF7;

        z-index: -1;
        transition: 3s ;
    }
    &:hover {
        transition: 1.5s ease;
    }
    &:before {
        width: 0;
        height: 100%;
    }
    &:hover {
        &:before {
            width: 100%;
        }
    }
`;
