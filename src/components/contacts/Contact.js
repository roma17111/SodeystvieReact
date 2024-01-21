import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='m-0'>
            <h1>Контактная информация</h1>
            <div className="text-center m-0">
                <p><a className="email text-center a-footer text-contact" href="mailto:sodeystvie@gmail.com">📧
                    sodeystvie@gmail.com</a></p>
            </div>
            <div className="text-center mb-2 text-contact m-0">
                <span>📞 +7(916)157-11-31</span>
            </div>
        </div>
    );
};

export default Contact;