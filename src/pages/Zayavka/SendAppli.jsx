import React from 'react';
import '../scnd_page_application.css'
import {Link, Route, Router, Routes } from 'react-router-dom';
const SendAppli = () => {
    return (
            <div className="SendAppli">
                <div className="main_application_block_2page">
                    <h1 className="h1_application_2page">Подача заявки</h1>
                    <p className="text_appli_2">IT-сфера довольно обширна и включает в себя множество специализаций, в одной из которых ты можешь
                    раскрыть свой потенциал. На данный момент мы предлагаем тебе 8 направлений, которые активно
                    развиваются в нашем СНО. Также ты можешь предложить свое направление, если не нашел подходящее в
                    нашем списке.</p>
                    <div className="buttons_application_2">
                        <Link role="button"  to="/directionsappli" className="but_give_app_2page">выбрать готовое</Link>
                        <Link role="button" to="/yourapp" className="but_your_offer">предложить свое</Link>
                    </div>
                </div>
            </div>
                )
    ;
                };

export default SendAppli;