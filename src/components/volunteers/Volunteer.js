import React from 'react';
import "./volunteers.css"

const Volunteer = (props) => {
    return (
        <div className="container-fluid p-0 volunteer">
            <img className="v-image p-2 mb-1"width="300" src={props.volunteer.image}/>
            <div className="p-3">
                <h5 className="text-center m-3 volunteer-fio-text">{props.volunteer.fio}</h5>
                <span className="">{props.volunteer.description}</span>
            </div>
        </div>
    );
};

export default Volunteer;