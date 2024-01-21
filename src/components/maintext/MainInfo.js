import React from 'react';
import './MainText.css'
import photo from '../photos/sod.jpg'

const MainInfo = () => {
    return (
        <div>
            <h3 className="text-center m-5 reg">РЕГИОНАЛЬНАЯ ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ ИНВАЛИДОВ</h3>
            <h2 className="main-text-center m-5 text-center">ЦЕНТР СЕМЬИ И МОЛОДЕЖИ</h2>
            <h1 className="text-center m-5 main-text-sod">«СОДЕЙСТВИЕ»</h1>
            <img src={photo} className='img img-fluid rounded mx-auto d-block'></img>
            <h1 className="text-center m-5 main-text-sod">История организации</h1>
            <p className='text-center text'>Здесь будет история организации</p>
        </div>
    );
};

export default MainInfo;