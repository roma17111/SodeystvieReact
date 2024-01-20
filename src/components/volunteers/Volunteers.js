import React, {useEffect} from 'react';
import {useState} from "react";
import Volunteer from "./Volunteer";
import axios from "axios";
import Load from "../util/Load";

const url = 'https://paganell.webtm.ru:8080/api/v1/volunteer/all';

const Volunteers = () => {


    const [volunteers, setVolunteers] = useState([])
    const [isWait,setIsWait] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setVolunteers(res.data)
                setIsWait(false)
            })


    }, []);

    return (
        <div className="container-fluid p-3">
            <h1 className="text-center m-3 volunteer-text-color">Волонтёры организации</h1>
            {isWait?
            <Load/>:
                <div>
                    {volunteers.length === 0 ?
                        <h1 className="text-center m-3">
                            Список волонтёров пуст.
                        </h1> : <div className="row">
                            {volunteers.map((el) =>
                                <div className="col">
                                    <Volunteer volunteer={el} key={el.id}/>
                                </div>
                            )}
                        </div>
                    }
                </div>
            }

        </div>
    );
};

export default Volunteers;