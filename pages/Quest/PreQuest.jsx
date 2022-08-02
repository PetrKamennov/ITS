import React from 'react';
import "../Pre_quest.css"
import {Link} from "react-router-dom";
const PreQuest = () => {
    return (
        <div className="PreQuest">
                <div className="sliders">
                    <div className="line">
                        <hr noshade />
                        <Link role="h4" to="/application" ><h4>назад</h4></Link>
                    </div>
                    <div className="line">
                        <Link role="h4" to="/firstquest" ><h4>вперёд</h4></Link>
                        <hr noshade />
                    </div>
                </div>
                <div className="main_quest_block_1">
                    <p className="text_1">Анкета содежрит 15 вопросов, на которые тебе предстоит ответить. Отвечай быстро, не задумываясь. В каждом вопросе можно выбрать несколько вариантов. По итогу ты увидишь статистику, которая основана на твоих ответах. Желаем удачи!</p>
                </div>
        </div>
    );
};

export default PreQuest;