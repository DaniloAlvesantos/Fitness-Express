import * as React from "react";
import { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Card from "./CardComponent/index";

const LandingPage: React.FC = () => {
    const [dark,setDark] = useState(false);
    function handleTheme() {
        if(document.documentElement.classList.value === "dark") setDark(true)
        else setDark(false); 
    }
    return (
        <>
            <Header />
            <div className="bg-[url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-cover bg-center bg-fixed 820-screen:bg-fixed w-full h-[60vh] relative flex items-center, justify-left">
                <div className="bg-gradient-to-r from-[#111111] to-transparent absolute w-full h-full"></div>
                <div className="flex items-center justify-start">
                    {/* <img
                        src="/blob-cian.svg"
                        alt="blob-cian"
                        className="sml:w-72  380-screen:w-56 w-36 h-36 380-screen:h-56 sml:h-72 z-10 opacity-90"
                    /> */}
                    <div className="sml:w-72  380-screen:w-56 w-36 h-36 380-screen:h-56 sml:h-72 z-10 opacity-90"> 
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="dark:fill-[#303030] fill-[#2ebfa5]"
                                d="M48.5,-69.7C60.8,-57.9,67.2,-40.9,69.7,-24.6C72.2,-8.4,70.9,7.1,66.5,21.9C62.1,36.7,54.7,50.8,43,58.6C31.4,66.4,15.7,68,-0.9,69.2C-17.5,70.4,-34.9,71.2,-49.8,64.5C-64.8,57.8,-77.2,43.4,-84.2,26.3C-91.1,9.2,-92.7,-10.7,-84.2,-24.4C-75.7,-38.1,-57.1,-45.5,-41.4,-56.2C-25.7,-66.9,-12.8,-80.8,2.7,-84.5C18.1,-88.1,36.3,-81.5,48.5,-69.7Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                    </div>
                    <main className="flex items-center justify-center flex-col w-28 h-28">
                        <h2 className="text-4xl drop-shadow-lg 380-screen:drop-shadow-none 380-screen:text-5xl sml:text-7xl -ml-24 sml:-ml-14 italic font-['Roboto'] z-20 uppercase text-[#fafafa]">
                            Fitness
                        </h2>
                        <h2 className="text-4xl drop-shadow-lg 380-screen:drop-shadow-none 380-screen:text-5xl sml:text-7xl -ml-24 sml:-ml-14 italic font-['Roboto'] z-20 uppercase text-[#fafafa]">
                            Express
                        </h2>
                    </main>
                </div>
            </div>
            <section className="flex items-center justify-center flex-col pb-12 pt-12 -mb-[1.1rem] bg-fixed bg-[url(/pattern-light.svg)] dark:bg-[url(/pattern-dark.svg)]">
                <div className="block text-center m-2 mb-1 p-2 w-11/12 rounded-md bg-[#96CAB7]">
                    <h2 className="font-Inter text-3xl sm:text-4xl md:text-5xl tracking-wide m-4 text-[#111111]">
                        Sua plataforma de <br />
                        receitas & exercícios
                    </h2>
                </div>
                <div className="block text-center w-11/12 bg-[#009473] text-[#fafafa] rounded-md p-2">
                    <h3 className="w-full font-Ubuntu text-xl md:text-2xl">
                        Venha perder alguns quilos <br />e de recompensa conehça
                        receitas que vão te acompanhar nessa jornada!
                    </h3>
                </div>
                <main className="relative mt-8 p-4 flex items-center justify-center flex-col 380-screen:bg-[#fafafa] dark:bg-[#1F1F1F] rounded-md w-11/12">
                    <img
                        src="/blob_wave_1.svg"
                        alt="blob wave"
                        className="absolute 740-screen:hidden left-0 top-0 rounded-tl-sm"
                    />
                    <div className="m-4 flex items-center justify-center flex-col">
                        <div className="bg-gradient-to-br dark:from-[#121212] from-[#009473] dark:to-[#303030] to-[#00ffc8] z-10 shadow-xl p-4 rounded-md">
                            <h2 className="text-base 380-screen:text-lg font-Inter text-[#fafafa]">
                                Conheça uma de nossas receitas
                            </h2>
                        </div>

                        <Card />
                    </div>
                    <img
                        src="/blob_wave_2.svg"
                        alt="blob wave"
                        className="absolute 740-screen:hidden right-[-1px] bottom-[-1px] rounded-br-md"
                    />
                </main>
            </section>
            <Footer />
        </>
    );
};

export default LandingPage;
