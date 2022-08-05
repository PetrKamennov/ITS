import React from 'react';
import '../your_appli.css';
import {Link} from "react-router-dom";
const YourApp = () => {
    return (
        <div className="YourApp">
            <div className="sliders">
                <div className="line">
                    <hr noshade />
                    <Link role="h4" to="/sendappli" ><h4>назад</h4></Link>
                </div>
                <div className="line">
                    <Link role="h4" to="/thirdappli" ><h4>вперёд</h4></Link>
                    <hr noshade />
                </div>
            </div>
            <div className="main_your_appli">
                <div className="first_block_your_appli">
                    <h4 className="h4_appli">Направление</h4>
                    <input className="inputs_app direction_inp" type="text" placeholder="Поле для ввода"/>
                </div>
                <div className="scnd_block_your_appli">
                    <h4 className="h4_appli">Информация о направлении</h4>
                            <textarea className="inputs_app info_inp" rows="10" cols="51"
                                   placeholder="Расскажи немного о выбранном тобой направлении"/>
                </div>
            </div>
        </div>
    );
};

export default YourApp;