import React from 'react';
import lager from "../../../photos/superlager/superlager.jpg"
import "./superlager.css"
const SuperLager = () => {
    return (
        <div className="m-5">
            <div className="lager-text">
                <h3 className="text-center">Слёт любителей английского языка</h3>
                <h2 className="text-center">English Summer Camp</h2>
            </div>
            <div className= "p-5">
                <img className="lager-image" src={lager} alt="lager" width="650"/>
            </div>
            <div >
                <span className="text">В этом месте будет информация о слёте Английского языка.
                Слёт был основан в 2004-м году по инициативе трёх чёкнутых интузиастов,
                которым было не насрать...</span>
            </div>

        </div>
    );
};

export default SuperLager;