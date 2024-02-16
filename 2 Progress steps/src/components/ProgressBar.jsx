import { useState } from "react"
import ProgressStage from "./ProgressStage";

export default function ProgressBar({ stages }){

    const [progress, setProgress] = useState(1);

    return (
        <div className=" h-screen w-full flex justify-center items-center flex-col">
            <div className=" p-10 flex ">
                {stages.map(stage => <ProgressStage key={stage} stage={stage} progress={progress} />)}
            </div>
            <div>
                <button className={` m-3 px-8 p-1 rounded-md text-white ${progress===1?"cursor-not-allowed":"cursor-pointer"} ${progress===1?"bg-sky-200":"bg-sky-600"} `} onClick={()=>{
                    if (progress!=1) setProgress(i => i-1);
                }}>Prev</button>
                <button className={` m-3 px-8 p-1 rounded-md text-white ${progress===stages.length?"cursor-not-allowed":"cursor-pointer"} ${progress===stages.length?"bg-sky-200":"bg-sky-600"} `} onClick={()=>{
                    if (progress!=stages.length) setProgress(i => i+1);
                }}>Next</button>
            </div>
        </div>
    )

}