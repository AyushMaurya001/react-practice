import { useEffect } from "react";
import PercentageCountdown from "./PercentageCountdown";

// https://images.unsplash.com/photo-1567853042143-8d8480f022ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

export default function BlurryScreen(){

    const blur = ["blur-3xl", "blur-2xl", "blur-xl", "blur-lg", "blur-md", "blur-sm", "blur-none"];
    // ${blur.map(blur => console.log(blur))}
    return (
        <div>
            <PercentageCountdown />
        </div>
    )

}