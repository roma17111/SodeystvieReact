import React, {useEffect, useState} from 'react';
import Project from "./Project";
import axios from "axios";
import Load from "../../util/Load";

const actual_projects_uri = 'https://paganell.webtm.ru:8080/api/v1/project/actual';


const ActualProjects = () => {
    const [isWait,setIsWait] = useState(false)
    const [actualProjects, setProjects] = useState([])
   async function getProjects() {
        setIsWait(true);
        const res = axios.get(actual_projects_uri);
        const data = (await res).data;
        setProjects(data);
        setIsWait(false);
    }


    useEffect(() => {
            getProjects()
    }, []);

    return (
        <div>
            <h1 className="text-center m-3">Aктуальные проекты организации</h1>
            {isWait?
            <Load/>:
                <div>
                    {actualProjects.length === 0?
                        <h2 className="text-center m-3">
                            Список проектов пуст.
                        </h2>:
                        <div>
                            {actualProjects.map((el) => {
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

export default ActualProjects;