import Image from "next/image";

export default function Custom404() {
    return (
        <div className="flex items-center justify-center flex-col h-[100vh] w-[100vw] bg-gradient-to-br from-[#2ebfa5] via-[#7dde92] to-[#1cfeba] ">
            <main className="relative bg-[#f8ffe5] p-4 rounded-lg flex items-center justify-center flex-col">
                <div className="p-2 bg-[#2ebfa5] rounded-md flex items-center justify-center">
                    <h1 className="font-Open_Sans text-center text-[#fafafa]">
                        404 - Page Not Found
                    </h1>
                </div>
                <span className="bg-[#D7263D] rounded-full p-4 flex items-center justify-center m-2">
                    <img src="/Google/warning_.svg" alt="warning icon" className="w-24 h-24 z-10"  />
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 rounded-md">
                <path fill="#2ebfa5"  d="M0,0L40,21.3C80,43,160,85,240,128C320,171,400,213,480,245.3C560,277,640,299,720,298.7C800,299,880,277,960,234.7C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>
            </main>
        </div>
    );
}
