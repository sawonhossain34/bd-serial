import disney from "../assets/images/disney.png"
import marvel from "../assets/images/marvel.png"
import nationalG from "../assets/images/nationalG.png"
import pixar from "../assets/images/pixar.png"
import starwar from "../assets/images/starwar.png"

import disneyVideo from "../assets/videos/disney.mp4";
import marvelVideo from "../assets/videos/marvel.mp4";
import nationalGeographicVideo from "../assets/videos/national-geographic.mp4";
import pixarVideo from "../assets/videos/pixar.mp4";
import starwarVideo from "../assets/videos/star-wars.mp4";

const ProductionHouse = () => {
    const productionHouseList = [
        {
            id:1,
            image:disney,
            video:disneyVideo
        },
        {
            id:2,
            image:marvel,
            video:marvelVideo
        },
        {
            id:3,
            image:nationalG,
            video:nationalGeographicVideo
        },
        {
            id:4,
            image:pixar,
            video:pixarVideo
        },
        {
            id:5,
            image:starwar,
            video:starwarVideo
        },
    ]
    return (
        <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 text-white">
            {
               productionHouseList.map((item) => (
                <div className="border-[2px] border-gray-600 rounded-md hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                    <video src={item.video} autoPlay loop playsInline muted className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 shadow-xl shadow-gray-800" />
                    <img src={item.image} alt=""  className="w-full z-[1]"/>
                    
                </div>
               )) 
            }
        </div>
    );
};

export default ProductionHouse;