// import styled from "styled-components";
// import React from "react";

// export default function styles() {
//     return <></>;
// }

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

// /* Buttons */

// const ButtomCommum = styled.button`
//     border: none;
//     border-radius: 5px;
//     height: 2.25rem;
//     width: 11.25rem;
//     padding: 0 16px;

//     cursor: pointer;
// `;
// const ButtomCommumSecondary = styled.a`
//     display: flex;
//     text-decoration: none;
//     text-transform: uppercase;

//     border-radius: 5px;

//     cursor: pointer;

//     font-family: "Ubuntu", sans-serif;

//     align-items: center;
//     justify-content: center;

//     font-size: 11px;
//     font-weight: bold;

//     color: #111111;

//     margin: 1rem;
//     padding: 10px 35px;

//     border: 2px solid ${LIGHT_GREEN};

//     overflow: hidden;

//     position: relative;

//     width: 10rem;
//     height: 1rem;

//     transition: 3s ease;

//     z-index: 10;

//     &:before {
//         content: "";
//         position: absolute;
//         top: 0%;
//         left: 0%;

//         width: 100%;
//         height: 100%;

//         background: ${LIGHT_GREEN};

//         z-index: -1;
//         transition: 3s ease;
//     }
//     &:hover {
//         color: ${LIGHT_RICH};
//         transition: 1.5s ease;
//     }
// `;

// export const ButtomEffectPrimary = styled.a`
//     display: flex;
//     text-decoration: none;
//     text-transform: uppercase;

//     border-radius: 5px;

//     cursor: pointer;

//     font-family: "Ubuntu", sans-serif;

//     align-items: center;
//     justify-content: center;

//     font-size: 11px;
//     font-weight: bold;

//     color: #111111;

//     margin: 1rem;
//     padding: 10px 35px;

//     border: 2px solid ${ELETRIC_BLUE};

//     overflow: hidden;

//     position: relative;

//     min-width:10rem;
//     height: 1rem;

//     transition: 3s ease;

//     z-index: 10;

//     &:before {
//         content: "";
//         position: absolute;
//         top: 0%;
//         left: 0%;

//         width: 100%;
//         height: 100%;

//         background: ${ELETRIC_BLUE};

//         z-index: -1;
//         transition: 3s ease;
//     }
//     &:hover {
//         transition: 1.5s ease;
//     }
//     &:before {
//         width: 0;
//         height: 100%;
//     }
//     &:hover {
//         &:before {
//             width: 100%;
//         }
//     }
// `;
// export const ButtomCalc = styled(ButtomCommum)`
//     background: transparent;

//     border: 1px solid ${MEDIUM_BLUE};

//     width: 11.25rem;

//     transition: 1s ease;

//     :hover {
//         background: ${MEDIUM_BLUE};
//         transition: 600ms;
//         color: #fff;
//     }
// `;
// /* Containers */
// export const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// export const ContainerCard = styled.div`
//     width: 20em;
//     height: 20em;

//     margin: 1rem;

//     h2 {
//         color: ${DARK_MEDIUM};
//     }
//     p {
//         color: ${DARK_MEDIUM};
//         margin-left: 1rem;
//     }
// `;

// export const ContainerReceitaBanner = styled(Container)`
//     flex-direction: column;
//     font-size: 15px;
//     @media (max-width: 650px) {
//         font-size: 88.5%;
//     }
//     @media (max-width: 460px) {
//         font-size: 82.7%;
//     }
//     @media (max-width: 370px) {
//         font-size: 75.5%;
//     }
//     @media (max-width: 300px) {
//         font-size: 70.6%;
//     }
// `;

// export const ContainerIMCPage = styled(Container)`
//     box-shadow: 1px 2px 28px 2px rgb(0 0 0 / 41%);

//     border-bottom-right-radius: 20%;
//     border-bottom-left-radius: 20%;

//     flex-direction: column;

//     transition: ease all;

//     p {
//         font-family: "Fira Sans", sans-serif;
//     }
// `;
// export const ContainerCalculo = styled(Container)`
//     margin: 2rem;

//     flex-direction: column;
// `;
// export const ContainerInps = styled.div`
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//     flex-direction: column;
// `;
// export const ContaienrReceitasCards = styled(Container)`
//     flex-direction: center;
// `;
// export const ContainerCards = styled.div`
//     justify-content: center;
//     align-items: center;
//     display: grid;
//     grid-gap: 2rem;
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     padding: 0.4rem;
// `;
// export const ContainerClock = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     position: relative;
// `;
// /* titles */

// export const Title = styled.h1`
//     font-family: "Ubuntu", sans-serif;
//     text-transform: uppercase;
//     color: ${MEDIUM_BLUE};
//     font-weight: lighter;
// `;
// export const TituloIMCPage = styled.h1`
//     font-family: "Roboto", sans-serif;
//     text-transform: uppercase;
//     color: ${BLACK_FOGRA};

//     margin: 0.5rem;
// `;

// /* others components */

// export const Card = styled.div`
//     width: 100%;
//     height: 100%;

//     border: 2px solid ${LIGHT_GREEN};
//     border-radius: 10px;

    
//     transition: 400ms;

//     cursor: pointer;
//     position:relative;
//     overflow:hidden;
// `;
// export const ImageCard = styled.div`
//     width: 100%;
//     height: 100%;

//     float: left;
//     :hover {
//         transform: scale(1.15);
//     }
//     position:absolute;
//     transition:transform .75s;
// `;
// export const Legenda = styled.div`
//     background: ${LIGHT_CYAN};
//     opacity: 0.7;

//     color: ${DARK_MEDIUM};

//     font-family: "Fira Sans", sans-serif;

//     border-radius: 10px;

//     padding: 1rem;

//     position: absolute;
//     left: 0;
//     bottom: 0;

//     width: 100%;

//     transition: ease 400ms;
// `;
// export const List = styled.ul`
//     font-family: "Fira Sans", sans-serif;

//     color: ${BLACK_FOGRA};

//     transition: all ease;
// `;
// export const Inp = styled.input`
//     border: none;
//     border-bottom: 1px solid #111111;

//     background: transparent;

//     outline: none;

//     font-family: "Fira Sans", sans-serif;
//     margin: 0.2rem;

//     width: 11.25rem;

//     transition: all ease 2s;
// `;
// export const Span = styled.span`
//     color: ${RED};
//     font-family: "Fira Sans", sans-serif;
//     font-size: 14px;
//     margin: 0.2rem;
// `;
// export const Resultado = styled.h2`
//     font-family: "Fira Sans", sans-serif;
//     background: ${LIGHT_CYAN};
//     padding: 1rem;
//     border-radius: 10px;
//     box-shadow: 1px 2px 10px 2px rgba(205, 247, 246, 0.41);
//     transform: scale(1);
//     transition: 400ms;
//     :hover {
//         transform: scale(1.03);
//     }
// `;

// /*TABELA*/

// export const Tabela = styled.table`
//     margin: 1rem;

//     padding: 1rem;

//     font-family: "Fira Sans", sans-serif;

//     border-radius: 5px;
//     border: 1px solid #111111;
//     @media (max-width: 408px) {
//         padding: 0.5rem;
//         margin: 0.5rem;
//         font-size: 14px;
//     }
//     @media (max-width: 340px) {
//         font-size: 13px;
//         padding: 0.3rem;
//     }
// `;
// export const TH = styled.th`
//     margin: 1rem;
// `;
// export const TR = styled.tr`
//     background: transparent;
// `;
// export const TD = styled.td`
//     text-transform: uppercase;
// `;
// export const LinkReceitas = styled.a`
//     font-style: none;
// `;
// export const Image = styled.img`
//     width: 100%;
//     height: 100%;

//     object-fit: cover;

//     border-radius: 10px;
// `;

// /* Receitas */

// export const Main = styled.main`
//     display: flex;
//     width: 90%;

//     align-items: center;

//     margin: 3rem;
//     padding: 0.5rem;

//     background: transparent;
//     border-radius: 10px;
//     border: 1px solid #111;

//     h2 {
//         margin-right: 3rem;
//         font-family: "Roboto", sans-serif;
//         text-transform: uppercase;
//     }
//     @media (max-width: 600px) {
//         width: auto;
//         padding: 0;
//     }
// `;

// export const BannerReceitas = styled.div`
//     display: flex;

//     align-items: center;
//     justify-content: end;

//     border-radius: 10px;

//     img {
//         width: 10rem;
//         height: 9rem;

//         object-fit: cover;

//         border-radius: 15px;
//     }
//     @media (max-width: 600px) {
//         display: none;
//     }
// `;

// export const ContainerSection = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;

//     width: auto;

//     border-radius: 10px;

//     margin: 3rem;
// `;

// export const Section = styled.section`
//     background: transparent;

//     width: 100%;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;

//     border: 1px solid #111111;
//     border-radius: 10px;
//     padding: 1rem;

//     h2 {
//         font-family: "Roboto", sans-serif;
//     }

//     p {
//         font-size: 1rem;
//         font-family: "Fira Sans", sans-serif;
//         width: 60%;
//     }
//     @media (max-width: 900px) {
//         p {
//             font-size: 0.9rem;
//             width: 70%;
//         }
//     }
//     @media (max-width: 810px) {
//         p {
//             font-size: 0.8rem;
//             width: 80%;
//         }
//     }
//     @media (max-width: 716px) {
//         p {
//             font-size: 0.7rem;
//         }
//     }
//     @media (max-width: 560px) {
//         h2 {
//             font-size: 1.3rem;
//         }
//         p {
//             width: 85%;
//         }
//     }
//     @media (max-width: 490px) {
//         p {
//             font-size: 0.6rem;
//         }
//     }
//     @media (max-width: 468px) {
//         p {
//             width: 90%;
//         }
//     }
//     @media (max-width: 378px) {
//         h2 {
//             font-size: 1rem;
//         }
//         p {
//             margin-top: -0.2rem;
//             font-size: 0.5rem;
//         }
//     }
//     @media (max-width: 330px) {
//         p {
//             width: 95%;
//         }
//     }
// `;

// export const ContainerIngredients = styled.ul`
//     width: 100em;

//     flex-direction: column;

//     p {
//         width: 60%;
//         font-family: "Fira Sans", sans-serif;
//         margin-top: 3rem;
//         font-size: 1rem;
//     }
//     @media (max-width: 1000px) {
//         p {
//             margin-top: 2rem;
//             font-size: 0.8rem;
//         }
//     }
//     @media (max-width: 700px) {
//         p {
//             font-size: 0.7rem;
//         }
//     }
//     @media (max-width: 440px) {
//         p {
//             font-size: 0.6rem;
//             width: 70%;
//         }
//     }
//     @media (max-width: 342px) {
//         p {
//             width: 80%;
//         }
//     }
// `;
// export const ContainerBake = styled.div`
//     width: 100%;
//     height: 100%;

//     position: relative;
//     float: left;

//     img {
//         position: absolute;

//         z-index: 1;

//         bottom: 1px;
//         right: 1px;

//         width: 6.5rem;
//         height: 6.5rem;
//     }
//     @media (max-width: 900px) {
//         display: none;
//     }
// `;
// export const InformaçõesReceita = styled.div`
//     background: linear-gradient(200deg, #f4f7f6, #f8ffe5);

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     border: 1px solid #111111;
//     border-radius: 10px;

//     width: 10rem;
//     height: 5rem;

//     position: absolute;
//     right: 0;
//     bottom: 0;

//     h2 {
//         font-family: "Fira Sans", sans-serif;
//         margin: 0.3rem;
//     }
// `;

// export const TituloReceitas = styled.h2`
//     font-family: "Fira Sans", sans-serif;
//     font-size: 1.4rem;
//     @media (max-width: 1000px) {
//         font-size: 1.2rem;
//     }
//     @media (max-width: 900px) {
//         font-size: 1rem;
//     }
//     @media (max-width: 700px) {
//         font-size: 0.8rem;
//     }
// `;
// export const BoxMinutos = styled.div`
//     background: linear-gradient(
//         to right,
//         #1affd5,
//         #7dde92,
//         #8eedf7,
//         #52ffee,
//         #2ebfa5,
//         #0acdff
//     );
//     background-size: 500% 100%;
//     animation: colors 10s ease infinite alternate;
//     width: 10rem;
//     height: 5rem;

//     box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.41);

//     border-radius: 10px;

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     position: absolute;
//     right: 10%;

//     p {
//         font-size: 1.4rem;
//         font-family: "Fira Sans", sans-serif;
//         color: #f4f7f6;
//     }
//     img {
//         width: 2rem;
//         height: 2rem;
//         margin: 0.4rem;
//     }
//     @media (max-width: 600px) {
//         width: 8rem;
//         height: 4rem;
//     }
//     @media (max-width: 410px) {
//         p {
//             font-size: 1.2rem;
//         }
//         img {
//             width: 1.5rem;
//             height: 1.5rem;
//         }
//         width: 7rem;
//         height: 3.5rem;
//     }
//     @keyframes colors {
//         0% {
//             background-position-x: 0%;
//         }
//         100% {
//             background-position-x: 100%;
//         }
//     }
// `;

// /* exercicios */

// export const MainExer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
// `;

// export const ContainerTop = styled.div`
//     display: flex;
//     align-items: center;

//     width: 95%;
// `;
// export const InfoBox = styled.div`
//     display: row;
//     margin: 1rem;
// `;

// export const BannerExer = styled.div`
//     box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.41);
//     display: flex;
//     align-items: center;
//     justify-content: end;
//     width: 16.5rem;
//     height: 10rem;
//     border-radius: 10px;

//     img {
//         object-fit: cover;

//         border-radius: 13px;
//         width: 100%;
//         height: 100%;
//         :hover {
//             transforme:scale(1.15);
//         }
//     }
//     @media (max-width: 600px) {
//         display: none;
//     }
// `;

// export const Nivel = styled.div`
//     box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.41);
//     border-radius: 5px;
//     margin: 1rem;
//     padding: 1rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     width: 8.6rem;
//     height: 3.7rem;

//     p {
//         font-family: "Fira Code", sans-serif;
//     }
// `;
// export const ContainerInfo = styled.div`
//     box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.41);
//     border-radius: 5px;
//     padding: 1rem;

//     width: min(700px, calc(38% + 100px));

//     /* max-width: 40%; */

//     margin: 1rem;
//     p {
//         font-family: "Fira Code", sans-serif;
//         font-size: 1rem;
//     }
// `;
// export const LegendaExe = styled.div`
//     background: #cdf7f6;
//     opacity: 0.7;

//     color: #111111;

//     font-family: "Fira Sans", sans-serif;

//     border-radius: 10px;

//     padding: 1rem;

//     position: absolute;
//     left: 0;
//     bottom: 0;

//     width: 100%;

//     transition: ease 400ms;
// `;

// export const ContentBox = styled(Container)`
//     flex-direction: column;
//     width: 100%;
// `;

// export const ContainerContent = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     width: 95%;

//     margin: 1rem;

//     padding: 1rem;

//     border-radius: 5px;
//     box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.41);

//     h2 {
//         font-family: "Fira Code", sans-serif;
//         font-size: 1rem;
//     }
//     p {
//         font-family: "Inter", sans-serif;
//         font-size: 1rem;
//     }
// `;
