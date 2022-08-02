import React from 'react';
import {Link} from "react-router-dom";
import "../first_quest.css"
const FirstQuest = () => {
    return (
        <div className="FirstQuest">
                <div className="sliders">
                    <div className="line">
                        <hr noshade />
                        <Link role="h4" to="/prequest" ><h4>назад</h4></Link>
                    </div>
                    <div className="line">
                        <Link role="h4" to="/scndquest" ><h4>вперёд</h4></Link>
                        <hr noshade />
                    </div>
                </div>
                <div className="main_quest_block_2">
                    <h1>1.Какая сферая сфера тебя привлекает?</h1>
                    <div className="input_first">
                        <input type="checkbox" name="option1" value="a1" checked="checked"/>
                            <p className="text_2">Творческая</p>

                    </div>
                    <div className="input_first">
                        <input type="checkbox" name="option2" value="a2"/>
                            <p className="text_2">Техническая</p>

                    </div>
                    <div className="quest_page_number_1">
                        <Link role="button" to="/firstquest" className="buts button_1j"></Link>
                        <Link role="button" to="/scndquest" className="buts button_2"></Link>
                        <Link role="button" to="/thirdquest" className="buts button_3"></Link>
                        <Link role="button" to="" className="buts button_4"></Link>
                        <Link role="button" to="" className="buts button_5"></Link>
                        <Link role="button" to="" className="buts button_6"></Link>
                        <Link role="button" to="" className="buts button_7"></Link>
                        <Link role="button" to="" className="buts button_8"></Link>
                        <Link role="button" to="" className="buts button_9"></Link>
                        <Link role="button" to="" className="buts button_10"></Link>
                        <Link role="button" to="" className="buts button_11"></Link>
                        <Link role="button" to="" className="buts button_12"></Link>
                        <Link role="button" to="" className="buts button_13"></Link>
                        <Link role="button" to="" className="buts button_14"></Link>
                        <Link role="button" to="" className="buts button_15"></Link>
                    </div>
                </div>
        </div>
    );
};

export default FirstQuest;