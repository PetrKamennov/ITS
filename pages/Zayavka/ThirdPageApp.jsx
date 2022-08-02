import React from 'react';
import '../third_page_appli.css';
import {Link} from "react-router-dom";
const ThirdPageApp = () => {
    return (
        <div className="ThirdPageApp">
            <div className="sliders">
                <div className="line">
                    <hr noshade />
                    <Link role="h4" to="/yourapp" ><h4>назад</h4></Link>
                </div>
                <div className="line">
                    <Link role="h4" to="/lastappli" ><h4>вперёд</h4></Link>
                    <hr noshade />
                </div>
            </div>
            <div className="main_application_block_3page">
                <h1 className="h1_application_3page">Подача заявки</h1>
                <div className="inputs first_inp">
                    <div>
                        <h5>Фамилия и имя</h5>
                        <input className="inputs_appli" type="text" placeholder="Волосов Геральт Ривович"/>
                    </div>
                    <div>
                        <h5>Телефон</h5>
                        <input className="inputs_appli" type="text" placeholder="8 (800) 555 35-35"/>
                    </div>
                </div>
                <div className="inputs scnd_inp">
                    <div>
                        <h5>Группа</h5>
                        <input className="inputs_appli" type="text" placeholder="ИВТб-69"/>
                    </div>
                    <div>
                        <h5>Никнейм в telegram</h5>
                        <input className="inputs_appli" type="text" placeholder="@ubitsa_2009"/>
                    </div>
                </div>
                <p>*данные используются исключительно для связи</p>
                <button>отправить</button>
            </div>
        </div>
    );
};

export default ThirdPageApp;