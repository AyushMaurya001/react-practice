

export default function ProgressStage({ stage, progress }){

    if (stage===1){
        return (
            <div className={` w-10 h-10 bg-white text-black rounded-full flex items-center justify-center border-4 ${progress>=stage?"border-sky-700":"border-sky-200"} `}>
                {stage}
            </div>
        )
    } else {
        return (
            <div className="flex justify-center items-center ">
                <div className={` transition-all duration-500 w-20 border-b-4 ${progress>=stage?"border-sky-700":"border-sky-200"} `}></div>
                <div className={` transition-all duration-500 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center border-4 ${progress>=stage?"border-sky-700":"border-sky-200"} `}>
                    {stage}
                </div>
            </div>
        )
    }

}