import React from "react";

export const MainContent:React.FC = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="bg-wave-block bg-[#3c9aff] bg-top bg-no-repeat bg-contain flex flex-col  w-[95%] h-[30%] p-4 pb-[8rem] rounded-md m-4">
                <header className="bg-[#f1f0ee] w-[18rem] h-[5rem] rounded-l-no p-4 flex items-center justify-center screen-375:w-auto">
                    <h2 className="font-['Inter'] text-base">
                        Venha conhecer mais de nós !!
                    </h2>
                </header>
                <main className="mt-[4rem] mobile-small:mt-8">
                    <p className="font-Open_Sans text-white text-base mat-[5px] mb-[5px] w-[100%] screen-375:text-sm">
                        Nós iremos te auxiliar com exercícios e cardapios
                        variados, para ajudar na sua estética e saúde
                    </p>
                    <p className="font-Open_Sans text-white text-base mat-[5px] mb-[5px] w-[100%] screen-375:text-sm">
                        Este site não foi feito para ganhar dinheiro, mas sim
                        para sua saúde
                    </p>
                    <p className="font-Open_Sans text-white text-base mat-[5px] mb-[5px] w-[100%] screen-375:text-sm">
                        Ainda estamos em desenvolvimento... mas você ainda pode
                        se surpreender com nossos conteúdo !
                    </p>
                    <p className="font-Open_Sans text-white text-base mat-[5px] mb-[5px] w-[100%] screen-375:text-sm">Ainda não somos uma empresa, infelizmente 😥</p>
                </main>
            </div>
        </div>
    );
}

export default MainContent;
