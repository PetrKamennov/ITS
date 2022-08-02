import React from 'react';
import {Link} from "react-router-dom";
import "../scnd_quest.css"
const ScndQuest = () => {
    return (
        <div className="ScndQuest">
                <div className="sliders">
                    <div className="line">
                        <hr noshade />
                        <Link role="h4" to="/firstquest" ><h4>назад</h4></Link>
                    </div>
                    <div className="line">
                        <Link role="h4" to="/thirdquest" ><h4>вперёд</h4></Link>
                        <hr noshade />
                    </div>
                </div>
                <div className="main_quest_block_3">
                    <h1>2. Какие задачи для реализации ты мог бы взять, имея достаточно знаний?</h1>
                    <div className="input_scnd">
                        <input type="checkbox" name="option1" value="a1" checked="checked" />
                            <p className="text_3">Сделать для клиента сайт-визитку или создать удобную форму оплаты для
                                интернет-магазина.</p>

                    </div>
                    <div className="input_scnd">
                        <input type="checkbox" name="option2" value="a2" />
                            <p className="text_3">Разработать макет сайта по пожеланиям заказчика.</p>

                    </div>
                    <div className="input_scnd">
                        <input type="checkbox" name="option3" value="a3" />
                            <p className="text_3">Необходимо создать алгоритм, который находит ответ на вопрос, в соответствующем тексте из
                                Википедии.</p>

                    </div>
                    <div className="input_scnd">
                        <input type="checkbox" name="option4" value="a4" />
                            <p className="text_3">Разработать механику движения поездов, позволяющую максимально точно отразить работу ЖД
                                станции в симуляторе, разработанном в виртуальной реальности.</p>

                    </div>
                    <div className="quest_page_number_2">
                        <Link role="button" to="/firstquest" className="buts button_1"></Link>
                        <Link role="button" to="/scndquest" className="buts button_22"></Link>
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

export default ScndQuest;