import React from 'react';
import "./project.css"

const Project = (props) => {
    return (
        <div className="m-5">
            <div className="lager-text">
                <h2 className="text-center">{props.el.name}</h2>
                <h3 className="text-center">{props.el.description}</h3>
            </div>
            <div className="p-5">
            <img className="lager-image img-fluid rounded mx-auto d-block " src={props.el.image} alt="lager" width="650"/>
            </div>
            <div >
                <span className="text text-center">{props.el.text}</span>
            </div>
        </div>
    );
};

export default Project;