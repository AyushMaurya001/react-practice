import { useState } from "react";
import Article from "./Article";

export default function Nav({ setArticleAxis }){

    const [axis, setAxis] = useState("");
    const [navAxis, setNavAxis] = useState("rotate-45");
    return (
        <div className=" overflow-hidden">
            <div className={` w-60 h-60 bg-pink-800 rounded-full fixed -top-32 -left-32 flex justify-center items-center transition-all duration-700 ${axis} z-10 `}>
                <div className=" w-60 h-60 flex flex-col justify-center items-center bg-opacity-25">
                    <div className=" w-24 h-24 flex justify-center items-center">
                        <i className="ri-close-line text-4xl cursor-pointer text-white" onClick={()=>{
                            setAxis("");
                            setNavAxis("rotate-45");
                            setArticleAxis("");
                        }}></i>
                    </div>
                    <div className=" w-24 h-24 flex justify-center items-center">
                    </div>
                </div>
                <div className=" w-60 h-60 flex flex-col justify-center items-center">
                    <div className=" w-24 h-24 flex justify-center items-center">
                    </div>
                    <div className=" w-24 h-24 flex justify-center items-center">
                        <i className="ri-menu-line text-4xl cursor-pointer text-white" onClick={()=>{
                            setAxis("-rotate-180");
                            setNavAxis("-rotate-12");
                            setArticleAxis("-rotate-12");
                        }}></i>
                    </div>
                </div>
            </div>
            <div className={` w-full h-screen fixed -z-10 bg-orange-500 `}>
                <div className={` w-32 h-screen flex flex-col transition-all duration-500 ${navAxis} `}>
                    <div className=" h-[60%]"></div>
                    <div className=" h-[40%] flex justify-center items-center">
                        <ul className="">
                            <li className=" list-disc cursor-pointer hover:font-semibold transition-all">Home</li>
                            <li className=" list-disc cursor-pointer hover:font-semibold transition-all">About</li>
                            <li className=" list-disc cursor-pointer hover:font-semibold transition-all">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}