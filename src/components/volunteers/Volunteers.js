import React, {useEffect} from 'react';
import {useState} from "react";
import Volunteer from "./Volunteer";
import axios from "axios";

const url = 'https://paganell.webtm.ru:8080/api/v1/volunteer/all';

const Volunteers = () => {


    const [volunteers,setVolunteers] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setVolunteers(res.data)
            })
    }, []);

    return (
        <div className="container-fluid p-3">
            <h1 className="text-center m-3 volunteer-text-color">Волонтёры организации</h1>
            {volunteers.length === 0 &&
                <h1 className="text-center m-3">
                    Список волонтёров пуст.
                </h1>
            }
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