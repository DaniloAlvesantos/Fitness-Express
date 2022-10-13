// import React, { useState } from "react";
// import TabelaIMC from "../tabela/tabela";

// const IMCFunc = () => {
//     const [show, setShow] = useState(false);
//     const [altura, setAltura] = useState();
//     const [peso, setPeso] = useState();
//     const [result, setResult] = useState();

//     function imc() {
        
//         let imc = peso / (altura * altura);
//         setResult(imc.toFixed(1));
//     }

//     return (
//         <>
//             <ContainerIMCPage>
//                 <TituloIMCPage>imc</TituloIMCPage>
//                 <p>
//                     Calcule seu <strong>IMC</strong> é veja resultado e se você
//                     está em media.
//                 </p>
//                 <p>Monstrar indice:</p>
//                 <input type="checkbox" onChange={() => setShow(!show)} />
//                 {show && (
//                     <Container>
//                         <List>
//                             <li>IMC:18.5 “Está Abaixo da media.”</li>
//                             <li>IMC:35 “Está Acima da media.”</li>
//                             <li>IMC entre 18 a 35 “Está dentro da media.”</li>
//                             <li>IMC: 25 ”Está excelente !“</li>
//                         </List>
//                     </Container>
//                 )}
//             </ContainerIMCPage>
//             <ContainerCalculo>
//                 <ContainerInps>
//                     <Inp
//                         placeholder="Altura"
//                         onChange={(event) => {
//                             setAltura(event.target.value);
//                         }}
//                     />
//                     <Inp
//                         placeholder="Peso"
//                         onChange={(event) => {
//                             setPeso(event.target.value);
//                         }}
//                     />
//                     <ButtomCalc onClick={imc}>Calcular</ButtomCalc>
//                     <Resultado>Resultado: {result}</Resultado>
//                 </ContainerInps>
//             </ContainerCalculo>
//             <Container>
//                 <TabelaIMC />
//             </Container>
//         </>
//     );
// };

// export default IMCFunc;
