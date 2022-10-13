import React from "react";
import CardsExe from "../card exe";
import Days from "./days/index";

const Exe: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-center flex-col">
                {/*dark:to-slate-900*/  }
                <div className="flex items-center justify-center shadow-customized w-[90%] rounded-lg m-4 bg-gradient-to-r from-[#2ebfa5] to-[#7dde92] ">
                    <div className="border-solid border-2 border-[#ffffff] shadow-slate-200 shadow-sm rounded-md p-4 m-2">
                        <h2 className="text-lg font-Inter text-[#f4f7f6]">Exercícios</h2>
                    </div>
                </div>
                <Days />
            </div>
            <CardsExe />
        </>
    );
};

export default Exe;
