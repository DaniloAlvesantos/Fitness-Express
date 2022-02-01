import styled from 'styled-components';

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
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

export const ContainerSection = styled.div`
    /* background-image: linear-gradient( 109.6deg,  rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% ); */
    background: linear-gradient(
        to right,
        rgba(24,138,141,1) 11.2% ,
        rgba(96,221,142,1) 91.1%

    );
    background-size: 200% 100%;
    animation: colors 15s ease infinite alternate;

    border-radius:10px;

    box-shadow: 1px 2px 28px 2px rgb(0 0 0 / 41%);

    display:flex;
    align-items:center;
    justify-content:center;

    width:90%;

    margin:1rem;
`;

export const ContainerHeader = styled.div`
    border:2px solid #0ACDFF;
    border-radius: 5px;
    padding:1rem;
    margin:1rem;
`

export const TextPrimary = styled.h2`
    font-size:1.4rem;
    font-family:"Inter", sans-serif;
    color:#f4f7f6;
`
