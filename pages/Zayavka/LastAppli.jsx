import React from 'react';
import '../last_page_application.css';
import {Link} from "react-router-dom";
const LastAppli = () => {
    return (
        <div className="LastAppli">
            <div className="main_application_block_last">
                <h1 className="h1_application">Первый шаг сделан!</h1>
                <p>Уверен в своем выборе? Заполняй заявку и выбирай понравившееся направление (можешь предложить свое).
                    Либо проходи анкету и мы поможем подобрать то что тебе по душе.</p>
                <div className="buttons_application_1">
                    <Link role="button" to="" className="but_give_app">отправить заявку</Link>
                    <Link role="button" to="/prequest" className="but_start_anket">пройти анкету</Link>
                </div>
            </div>
        </div>
    );
};

export default LastAppli;