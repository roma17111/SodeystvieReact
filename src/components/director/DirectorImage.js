import React, {useEffect, useState} from 'react';
import "./directorimage.css"
import axios from "axios";
import async from "async";

const directorUrl = 'https://paganell.webtm.ru:8080/api/v1/director/photo';

const DirectorImage = () => {

    const [director, setDirector] = useState({});

    async function getDirector() {
      const data = axios.get(directorUrl);
      const json = (await data).data;
        setDirector(json);
    }

    useEffect(() => {
        getDirector();
    }, []);

    return (
        <div className="director">
            <h1 className="text-center m-3 director-text">Директор</h1>
            <img className="img-fluid rounded mx-auto d-block image" src={director.image} alt="Картинка"/>
            <h3 className="text-center m-3 director-text-fio">{director.fio}</h3>
            <h5 className="text-center m-3">Информация о директоре</h5>
            <p className="text-center m-3">{director.text}</p>
        </div>
    );
};

export default DirectorImage;