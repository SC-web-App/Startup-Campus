import React from "react";
import Image from "next/image";
import { div } from "framer-motion/client";

import chapterImage1 from "../../public/Chapter-img/chapterImage1.svg";
import chapterImage2 from "../../public/Chapter-img/chapterImage2.svg";
import chapterImage3 from "../../public/Chapter-img/chapterImage3.svg";
import chapterImage4 from "../../public/Chapter-img/chapterImage4.svg";
import chapterImage5 from "../../public/Chapter-img/chapterImage5.svg";

export const ChapterImage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10" >

            {/* Title Section */}
            <div className="text-center mb-8" >
                <h1 className="text-2xl font-bold text-gray-800">What have we been up to?</h1>
                <h2 className="text-lg font-semibold text-gray-600">Chapter Images</h2>
            </div>

            {/* Images Grid */}
            <div className="container mx-auto grid grid-cols-4 grid-rows-2 gap-6 px-4">

                {/* Image Card */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden row-span-2 col-span-2">
                    <Image src={chapterImage1} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Image src={chapterImage2} alt="" className="w-full h-full object-cover" />
                </div> 

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Image src={chapterImage3} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Image src={chapterImage4} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Image src={chapterImage5} alt="" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Pagination (Dots) */}
            <div className="flex justify-center mt-8">
                <span className="w-3 h-3 bg-gray-800 rounded-full mx-1"></span>
                <span className="w-3 h-3 bg-gray-200 rounded-full mx-1"></span>
            </div>

        </div>

    );
};
