import React from "react";
import './App.css';
import MainInfo from "./components/maintext/MainInfo";
import DirectorImage from "./components/director/DirectorImage";



const Hello = () => {
    return(
        <div>
            <MainInfo/>
            <DirectorImage/>
        </div>
    )
}
export {Hello}