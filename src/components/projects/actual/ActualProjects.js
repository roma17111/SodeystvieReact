import React, {useState} from 'react';
import Project from "./Project";
import lager from "../../../photos/superlager/superlager.jpg"

// eslint-disable-next-line react-hooks/rules-of-hooks,no-use-before-define


const ActualProjects = () => {
    const [actualProjects] = useState([
        {
            id: 1, image: lager,
            description: "Слёт любителей английского языка",
            name: 'English Summer Camp',
            text: "В этом месте будет информация о слёте Английского языка.\n" +
                "                Слёт был основан в 2004-м году по инициативе трёх чёкнутых интузиастов,\n" +
                "                которым было не насрать..."
        },

    ])
    return (
        <div>
            {actualProjects.map((el) =>
            <Project el={el} key={el.id}/>
            )}
        </div>
    );
};

export default ActualProjects;