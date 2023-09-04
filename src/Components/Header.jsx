import logo from "../assets/images/movielogo.jpg"
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiStar, HiTv } from 'react-icons/hi2';
import { HiDotsVertical, HiPlus } from 'react-icons/hi';
import HeaderItems from "./HeaderItems";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menu = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "ORIGINALS",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        },
    ]

    return (
        <div className="flex items-center justify-between text-white p-5">
            <div className="flex items-center gap-8">
                <div className="flex items-center mr-2">
                <img className="w-[60px] md:w-[100px] object-cover" src={logo} alt="" /><h2 className="text-[20px] md:text-[35px] font-bold ">Serial</h2>
                </div>
                <div className="hidden  md:flex gap-7">
                    {menu.map((item, index) => (
                        <HeaderItems name={item.name} Icon={item.icon} key={index} />
                    ))}
                </div>
                <div className="flex md:hidden gap-11">
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItems name={""} Icon={item.icon} key={index} />
                    ))}
                    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                        <HeaderItems name={""} Icon={HiDotsVertical}></HeaderItems>
                        {toggle? <div className="absolute mt-3 bg-[#201313] border-[1px] border-gray-700 px-5 py-4 p-3 ">
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItems name={item.name} Icon={item.icon} key={index} />
                            ))}
                        </div>:null}
                    </div>
                </div>
            </div>
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="" alt="" />
        </div>
    );
};

export default Header;