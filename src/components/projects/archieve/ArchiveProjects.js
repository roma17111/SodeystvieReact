import React, {useEffect, useState} from 'react';
import Project from "../actual/Project";
import axios from "axios";

const archive_projects_uri = 'https://paganell.webtm.ru:8080/api/v1/project/archive';

const ArchiveProjects = () => {
    const [actualProjects, setProjects] = useState([])
    useEffect(() => {
        axios.get(archive_projects_uri)
            .then(res => {
                setProjects(res.data)
            })
    }, []);

    return (
        <div>
            <h1 className="text-center m-3">Aрхивные проекты организации</h1>
            {actualProjects.length === 0 &&
                <h1 className="text-center m-3">
                    Список проектов пуст.
                </h1>
            }
            {actualProjects.map((el) => {
                    return <Project el={el} key={el.id}/>;
                }
            )}
        </div>
    );
};

export default ArchiveProjects