import Image from "next/image";

export const AboutUs = () => {
    return(
        
        <div className="">
            <div>Who are we?</div>
            <div >About Us</div>
            
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <p><span>Nile Startup Campus</span> equips students with the necessary skills to innovate and enables them to realize their ideas.</p>
                    <br></br>
                    <p>It's a community where aspiring entrepreneurs, innovators, and early-stage businesses can access resources, mentorship, networking opportunities, and education to help them grow and succeed.</p>
                </div>
                
                <div>
                    <Image
                            className="rounded-full"
                            src="public/About-img/AboutPic.svg"
                            alt="2023 Orientation Info Session"
                            width={538}
                            height={361}
                    />
                </div>
            </div>
            
            <button className="bg-[#113045] text-[#FFFFFF] rounded-full md:py-[12px] py-8 md:px-[20px] px-6">See more</button>

            <div>2023 Orientation Info Session</div>
        </div>

    )
}