import React from 'react';
import './HeaderInfo.css'
import logo from "../../photos/sod.jpg";
const HeaderInfo = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-primary p-1 nav-color">
                <div className="container">
                    <img src={logo} className="" width= "60"  alt="Картинка"/>
                    <button className="navbar-toggler white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor"
                             className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link  white" aria-current="page" href="#">Главная</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  white" href="#">Наши волонтёры</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  white" href="#">Актуальные проекты</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  white" href="#">Архив проектов</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export {HeaderInfo};