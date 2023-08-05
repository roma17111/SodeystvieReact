import React from 'react';
import {useState} from "react";
import image from "../../photos/test/man.jpg"
import Volunteer from "./Volunteer";

const Volunteers = () => {
    const [volunteers] = useState([
        {id: 1, image: image, fio: "Якименко Роман Эдуардович",
            description: "Отличный волонтёр Отличный волонтёр" +
                " Отличный волонтёр Отличный волонтёр" +
                "Отличный волонтёр Отличный волонтёр" +
                "Отличный волонтёр Отличный волонтёр" +
                "Отличный волонтёр Отличный волонтёр" +
                "Отличный волонтёр Отличный волонтёр" +
                "Отличный волонтёр Отличный волонтёр"},
        {id: 1, image: image, fio: "Якименко Роман Эдуардович", description: "Отличный волонтёр." +
                "Проявил себя на последнем слёте только исключительно с положительной стороны"},
        {id: 1, image: image, fio: "Якименко Роман Эдуардович", description: "Отличный волонтёр"},
        {id: 1, image: image, fio: "Якименко Роман Эдуардович", description: "Отличный волонтёр"},
        {id: 1, image: image, fio: "Якименко Роман Эдуардович", description: "Отличный волонтёр"},
        {id: 2, image: image, fio: "Якименко Роман Эдуардович", description: "Отличный волонтёр"}
    ])

    return (
        <div className="container-fluid p-3">
            <h1 className="text-center m-3">Волонтёры организации</h1>
            <div className="row">
                {volunteers.map((el) =>
                    <div className="col">
                        <Volunteer volunteer={el} key={el.id}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Volunteers;