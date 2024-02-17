import { useCallback, useState } from "react";


export default function PercentageCountdown(){

    const [num, setNum] = useState(0);
    const timer = useCallback((num)=>{
        setTimeout(()=>{
            if (num<100) setNum(i => i+1);
        }, [50])
        return num;
    }, [])
    timer(num);
    // {num}%


    return (
        <div className=" w-full h-screen">
            <div className=" w-full h-screen fixed flex justify-center items-center bg-opacity-0 z-10 text-white text-7xl transition-all " style={{
                opacity: `${100-num}%`
            }}>
                {num}%
            </div>
            <div className=" w-full h-screen bg-cover transition-all " style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1567853042143-8d8480f022ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                filter: `blur(${(100-num)*0.2}px)`,
            }}>
            </div>
        </div>
    )

}