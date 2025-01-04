import Image from "next/image";

export const AboutUs = () => {
    return(
        
        <div className="sm:container sm:mx-auto rounded-lg shadow-lg text-[#333333]">
            <div className="text-center text-sm">Who are we?</div>
            <div className="text-center text-2xl font-bold">About Us</div>
            
            <div className="grid md:grid-cols-2">
                <div className="m-32 mt-10 h-331 w-464">
                    <div className="text-md font-light text-justify tracking-tighter">
                        <p><span className="text-lg font-normal">Nile Startup Campus</span> equips students with the necessary skills to innovate and enables them to realize their ideas.</p>
                        <br></br>
                        <p>It's a community where aspiring entrepreneurs, innovators, and early-stage businesses can access resources, mentorship, networking opportunities, and education to help them grow and succeed.</p>
                    </div>
                    <br></br>
                    <button className="bg-[#113045] text-[#FFFFFF] rounded-full p-2 pr-4 pl-4">See more</button>
                </div>
                

                <div className="relative">
                    <div className="container relative mr-3 mt-10 ml-9 mb-16 w-500 h-300"> 
                        <img src="/About-img/AboutPic.svg" alt="2023 Orientation Info Session" className="rounded-lg"/>
                        <div className="absolute -bottom-2 sm:right-24">
                            <div className="bg-white rounded-lg p-5">
                                <p className="text-black text-md font-normal text-center">2023<br></br>Orientation<br></br>Info Session</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}