import React from 'react';
import photo from "../../photos/director/director.jpg"
import "./directorimage.css"

const DirectorImage = () => {
    return (
        <div className= "director">
            <img className="image img-fluid" src={photo} alt= "Картинка"/>
            <h3 className="text-center m-3">Директор</h3>
            <h4 className="text-center m-3">Якименко Вероника Владимировна</h4>
        </div>
    );
};

export default DirectorImage;