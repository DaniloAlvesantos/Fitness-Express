import React from "react";
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
// export const GREEN_MEDIUM_CYAN = "rgb(46, 191, 165)";
// export const SEA_GREEN = "rgb(26, 255, 213)";
// export const ELETRIC_BLUE = "rgb(142, 237, 247)";
// export const SKY_BLUE = "#0ACDFF";
// export const TURQUOISE_BLUE = "#52FFEE";
// export const LAVENDER_FLORAL = "#9D8DF1";
// export const PURPLE = "#5F00BA";
// export const RED = "rgb(253, 21, 27)";


export default function style() {
    return (
        <></>
    )
}

export const PrimaryBox = styled.div`
    background:#7dde92;
    width:100%;
    height:30%;
    padding:2rem 1rem 2rem 1rem;
    @media(max-width:579px) {
        padding:1rem;
    }
`

export const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items:center;
    justify-content:center;

    @media(max-width:579px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 0fr));
    }
`

export const CardBox = styled.div`
    box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.41);
    background:rgb(241, 240, 238);
    border-radius: 5px;
    text-align:center;
    width:16rem;
    height:15rem;
    padding:8px;
    margin:0px 1rem 0px 1rem;
    transform:scale(1);
    transition: 400ms;
    h2 {
        color:#11111;
        font-family:"Inter", sans-serif;
        font-weight:500;
        font-size:1rem;
    }
    p {
        color:#11111;
        font-family:"Inter", sans-serif;
        font-weight:500;
        font-size:1rem;
        width:100%;
    }
    :hover {
        transform:scale(1.04)
    }
    strong {
        color:#2ebfa5;
    }
`

export const ContainerAbout = styled.div`
    background:#3083dc;
    display:flex;
    flex-direction:column;
    width:100%;
    padding:1rem;
    padding-bottom:8rem;
    p {
        font-family:"Open Sans", sans-serif;
        text-shadow: 2px 2px 5px rgb(46, 191, 164);
        letter-spacing:2px;
        font-size:1rem;
        margin:5px 0px 5px 0px;
        width:100%;

        @media(max-width:490px) {
            width:95%;
            font-size:0.95rem;
        }
        @media(max-width:490px) {
            width:100%;
        }
    }
    @media(max-width:490px){
        padding-bottom:5rem;
    }
`

export const Headline = styled.div `
    background:rgb(241, 240, 238);
    width:18rem;
    height:5rem;
    border-radius:10px 10px 10px 1px;
    padding:1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    h2{
        font-family:"Inter", sans-serif;
        font-size:1rem;
    }
`
export const ContainerTxt = styled.main`
    margin-top:5rem;
    @media(max-width:490px) {
        margin-top:3rem;
    }
`
