import Image from "next/image";

import GalleryImage1 from "../../public/Global-Gallery-img/galleryImage1.svg";
import GalleryImage2 from "../../public/Global-Gallery-img/galleryImage2.svg";
import GalleryImage3 from "../../public/Global-Gallery-img/galleryImage3.svg";
import GalleryImage4 from "../../public/Global-Gallery-img/galleryImage4.svg";
import GalleryImage5 from "../../public/Global-Gallery-img/galleryImage5.svg";
import DarkEllipse from "../../public/Global-Gallery-img/darkEllipse.svg";
import LightEllipse from "../../public/Global-Gallery-img/lightEllipse.svg";

export const GlobalGallery = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 pt-9 pb-9">
            <div className="text-lg mb-3">What have we been up to?</div>
            <div className="text-3xl font-semibold font-spartan mb-8">Gallery</div>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center">
                        <Image src={GalleryImage1} alt="Gallery Image 1" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center">
                            <Image src={GalleryImage2} alt="Gallery Image 2" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src={GalleryImage3} alt="Gallery Image 3" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src={GalleryImage4} alt="Gallery Image 4" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src={GalleryImage5} alt="Gallery Image 5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-8">
                <div className="mr-2"><Image src={DarkEllipse} alt="" /></div>
                <div className="mr-2"><Image src={LightEllipse} alt="" /></div>
                <div className="mr-2"><Image src={LightEllipse} alt="" /></div>
            </div>
        </div>
    );
};

