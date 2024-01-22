import React, {useEffect, useState} from 'react';
import Project from "../actual/Project";
import axios from "axios";
import Load from "../../util/Load";

const archive_projects_uri = 'https://paganell.webtm.ru:8080/api/v1/project/archive';

const ArchiveProjects = () => {
    const [isWait,setIsWait] = useState(false)
    const [archiveProjects, setProjects] = useState([])

    async function getProjects() {
        setIsWait(true);
        const res = axios.get(archive_projects_uri);
        const data = (await res).data;
        setProjects(data);
        setIsWait(false);
    }

    useEffect(() => {
       getProjects()
    }, []);

    return (
        <div>
            <h1 className="text-center m-3">Aрхивные проекты организации</h1>
            {isWait?
                <Load/>:
                <div>
                    {archiveProjects.length === 0?
                        <h2 className="text-center m-3">
                            Список проектов пуст.
                        </h2>:
                        <div>
                            {archiveProjects.map((el) => {
                                    return <Project el={el} key={el.id}/>;
                                }
                            )}
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default ArchiveProjects