
export default function Card({ id, name, url, small, large, focusId, setFocusId, setSmall }){

    return (
        <div onClick={()=>{
            setFocusId(id);
        }} className={` p-7 m-2 h-full bg-no-repeat bg-center flex justify-start items-end font-medium shadow-sm shadow-black transition-all duration-1000 bg-orange-400 rounded-[70px] ${focusId===id?large:small} ${focusId===id?"text-white":"text-transparent"} ${focusId===id?"text-3xl":"text-sm"} `} style={{
            backgroundImage: `url(${url})`
        }} >
            {name}
        </div>
    )

}