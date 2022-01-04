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
    width:45%;
    height:11rem;
    border-radius:5px;
    border:2px solid #1AFFD5;
    align-items:center;
    justify-content:center;
    padding:1rem;
    margin:1rem;
    background:#f4f7f6;
`
export const TextPrimary = styled.h1`
    font-size:1.5rem;
    color:#0ACDFF;
    font-family: "Fira Sans", sans-serif;
`
export const TextSec = styled.h2`
    font-size:1.3rem;
    color:#52FFEE;
    font-family:"Inter", sans-serif;
`
export const Button = styled.button`
    background:#f4f7f6;
    width:6rem;
    height:2rem;
    border:2px solid #1AFFD5;
    border-radius:5px;
    padding:1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    margin:1rem;
    transition: 1s ease;
    :hover {
        transition:1s ease;
        background:#1AFFD5;
        color:#fff;
    }
`
