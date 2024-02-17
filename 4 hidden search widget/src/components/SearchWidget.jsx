import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react"

export default function SearchWidget(){

    const [searchWidth, setSearchWidth] = useState("w-16");
    const [inputWidth, setInputWidth] = useState("w-0");
    const [gap, setGap] = useState("gap-0");

    const focusInput = useCallback((inputElement)=>{
        if (inputElement){
            inputElement.focus();
        }
    }, [inputWidth])

    return (
        <div className={` ${searchWidth} h-16 flex ${gap} justify-center items-center border-2 border-sky-600 transition-all duration-500 rounded-full overflow-hidden bg-white shadow-lg shadow-blue-400 `}>
            <input ref={focusInput} type="text" placeholder="Search.." id="searchBar" className={` ${inputWidth} h-8 border-black focus:outline-none transition-all duration-500 text-lg `} />
            <i className="ri-search-line text-3xl text-blue-950 transition-all duration-500" onClick={()=>{
                if (searchWidth==="w-16"){
                    setSearchWidth("w-1/4");
                    setInputWidth("w-48");
                    setGap("gap-2");
                } else {
                    setSearchWidth("w-16");
                    setInputWidth("w-0");
                    setGap("gap-0");
                }
            }}></i>
        </div>
    )

}