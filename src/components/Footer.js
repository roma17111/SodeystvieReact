import React from 'react';
import './Footer.css'
const Footer = () => {
    let date = new Date().getFullYear()
    return (
        <div>
            <div className="container-fluid text-center text-footer-color">
                <span className="text-center">©2004-{date} Все права защищены</span>
            </div>
            <div className="text-center">
                <p><a className="text-center a-footer text-footer-color" href="mailto:sodeystvie@gmail.com">📧
                    sodeystvie@gmail.com</a></p>
            </div>
            <div className="text-center mb-2 text-footer-color">
                <span>📞 +7(916)157-11-31</span>
            </div>
            <div className="created text-center text-footer-color">
                <span>Created by Roman and Nika</span>
            </div>
        </div>
    );
};

export default Footer;