import React, {useEffect, useState} from 'react';
import photo from "../../photos/director/director.jpg"
import "./directorimage.css"
import axios from "axios";

const directorUrl = 'https://paganell.webtm.ru:8080/api/v1/director/photo';

const DirectorImage = () => {

    const [director,setDirector] = useState({});
    useEffect(() => {
        axios.get(directorUrl)
            .then(res =>{
                setDirector(res.data)
            })
    }, []);

    return (
        <div className= "director">
            <img className="image img-fluid" src={director.image} alt= "Картинка"/>
            <h2 className="text-center m-3">Директор</h2>
            <h3 className="text-center m-3">{director.fio}</h3>
            <h5 className="text-center m-3">Информация о директоре</h5>
            <p className="text-center m-3">{director.text}</p>
        </div>
    );
};

export default DirectorImage;