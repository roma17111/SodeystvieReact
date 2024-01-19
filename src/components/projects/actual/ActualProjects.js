import React, {useEffect, useState} from 'react';
import Project from "./Project";
import axios from "axios";

const actual_projects_uri = 'https://paganell.webtm.ru:8080/api/v1/project/actual';

const ActualProjects = () => {
    const [actualProjects, setProjects] = useState([])
    useEffect(() => {
        axios.get(actual_projects_uri)
            .then(res => {
                setProjects(res.data)
            })
    }, []);

    return (
        <div>
            <h1 className="text-center m-3">Aктуальные проекты организации</h1>
            {actualProjects.length === 0 &&
                <h2 className="text-center m-3">
                    Список проектов пуст.
                </h2>
            }
            {actualProjects.map((el) => {
                    return <Project el={el} key={el.id}/>;
                }
            )}
        </div>
    );
};

export default ActualProjects;