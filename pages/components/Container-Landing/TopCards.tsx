import React from "react";
import { CardsOBJ } from './index';

const TopCards:React.FC = () => {
    return (
        <div className="flex flex-col items-center sml:m-4">
            <div className="sml:w-[95%] w-full rounded-none m-0 h-[30%] pt-8 pb-8 pr-4 pl-4 bg-blob-scene bg-center bg-cover bg-no-repeat sml:rounded-lg p-4 screen-375:bg-[#CDF7F6] screen-375:p-4 screen-375:pr-0 ">
                <div className="grid gap-4 grid-cols-250-1fr items-center justify-center medium-sm:grid-cols-300-0fr">
                   {Object.entries(CardsOBJ).map(([key, value]) => {
                       return (
                           <div
                           key={key}
                           className="bg-gradient-to-bl from-[#30AADD] to-[#00FFC6]  rounded-md items-center w-[16rem] h-[15rem] p-[8px] mr-4 ml-4 scale-100 duration-500 shadow-customized hover:scale-105 "
                           >
                               <h2 className="text-white uppercase font-semibold">{value.title}</h2>
                               <br />
                               <p className="text-white">{value.content}</p>
                           </div>
                       )
                   })}
                </div>
            </div>
        </div>
    )
}

export default TopCards;
