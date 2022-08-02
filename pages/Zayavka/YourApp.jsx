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
                    <h4>Направление</h4>
                    <input className="inputs_app direction_inp" type="text" placeholder="поле для ввода"/>
                </div>
                <div>
                    <h4>Информация о направлении</h4>
                    <div className="input_width">
                        <div className="input_shelter_width">
                            <input className="inputs_app info_inp" type="text" size="40"
                                   placeholder="Расскажи немного о выбранном тобой направлении"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourApp;