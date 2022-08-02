import React from 'react';
import "../third_quest.css";
import {Link} from "react-router-dom";
const ThirdQuest = () => {
    return (
        <div className="ThirdQuest">
                <div className="sliders">
                    <div className="line">
                        <hr noshade />
                        <Link role="h4" to="/scndquest" ><h4>назад</h4></Link>
                    </div>
                    <div className="line">
                        <Link role="h4" to="" ><h4>вперёд</h4></Link>
                        <hr noshade />
                    </div>
                </div>
                <div className="main_quest_block_3">
                    <h1>3. Какое задание у тебя вызвало интерес?</h1>
                    <div className="input">
                        <input type="checkbox" name="option1" value="a1" checked="checked"/>
                            <p className="text_4">На основе данных просмотренного пользователем онлайн-кинотеатра выстроить
                                рекомендательную систему, которая будет предлагать им похожие фильмы, и это увеличит
                                выручку сервиса в 5 раз.</p>

                    </div>
                    <div className="input">
                        <input type="checkbox" name="option2" value="a2"/>
                            <p className="text_4">Сделать так, чтобы при регистрации данные пользователя попали в нужную базу.</p>

                    </div>
                    <div className="input">
                        <input type="checkbox" name="option3" value="a3"/>
                            <p className="text_4">Вписать 2 объекта (3д-модель) в короткий видео-ролик с эффектом движения и дальнейшего
                                столкновения. учитывая цветовые, теневые и прочие параметры, достигнуть наибольшей
                                реалистичности.</p>

                    </div>
                    <div className="input">
                        <input type="checkbox" name="option4" value="a4"/>
                            <p className="text_4">Сделать модель для 3D принтера.</p>

                    </div>
                    <div className="quest_page_number">
                        <Link role="button" to="/firstquest" className="buts button_1"></Link>
                        <Link role="button" to="/scndquest" className="buts button_2"></Link>
                        <Link role="button" to="/thirdquest" className="buts button_33"></Link>
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

export default ThirdQuest;