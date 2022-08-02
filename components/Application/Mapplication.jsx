import React from 'react';
import './main_application.css';

import {Link} from 'react-router-dom';

const Mapplication = () => {
        return(

     <div className="Mapplication">
            <div className="main_application_block">
                <h1 className="h1_application">Подача заявки</h1>
                <p className="text_appli_1">Уверен в своем выборе? Заполняй заявку и выбирай понравившееся направление (можешь предложить свое).
                    Либо проходи анкету и мы поможем подобрать то что тебе по душе.</p>

                    <div className="buttons_application_1">
                        <Link role="button" to="/sendappli" className="but_give_app">подать заявку</Link>

                        <Link role="button" to="/prequest" className="but_start_anket">пройти анкету</Link>



                    </div>

            </div>

    </div>


    )
        ;
    };
export default Mapplication;