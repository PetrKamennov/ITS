import React from 'react';
import { useTransition, animated } from 'react-spring';
import {
    Route,  
    Routes, 
    useLocation, 
} from 'react-router-dom';
import {Calendar} from './pages/index';
import Navbar from './components/Navbar/navbar';
import Mapplication from "./components/Application/Mapplication";
import "./App.css";
import SendAppli from "./pages/Zayavka/SendAppli";
import YourApp from "./pages/Zayavka/YourApp";
import Directions from "./pages/Zayavka/Direction";
import PreQuest from "./pages/Quest/PreQuest";
import FirstQuest from "./pages/Quest/FirstQuest";
import ScndQuest from "./pages/Quest/ScndQuest";
import ThirdQuest from "./pages/Quest/ThirdQuest";
import ThirdPageApp from "./pages/Zayavka/ThirdPageApp";
import LastAppli from "./pages/Zayavka/LastAppli";
//import moment from 'moment';




function App() {
    const location = useLocation();

    const transitions = useTransition(location, 
            (location) => location.pathname, 
            {
            from: {
                opacity: 0,
                transform: 'translateY(-500px)',
                transition: 'all 0.5s linear 0s'
            },
            enter: {
                opacity: 1,
                transform: 'translateY(0px)',
                transition: 'all 0.5s linear 0s'
            },
            leave: {
                opacity: 0,
                transform: 'translateY(500px)',
                transition: 'all 0.5 ease 0s'
            },
        }
    );

    return (
            <>
                <Navbar/>
                <main 
                    className='container'
                    style={{position:'relative', overflow: 'hidden', minHeight: '90vh'}}
                >
                {transitions.map(({item, props, key}) => (
                    <animated.div key={key} style={props}>
                        <div style={{position:'absolute', width: '100%'}}>
                        <Routes location={item}>
                            <Route path = "/" element ='Homepage'/>
                            <Route path = "/about" element ="About"/>
                            <Route path = "/application" element = {<Mapplication/>}/>
                            <Route path = "/calendar" element = {<Calendar/>}/>
                            <Route path = "/blog" element = "Blog"/>
                            <Route path = "/contacts" element = "Contacts"/>
                            <Route path="/sendappli" element={<SendAppli/>} />
                            <Route path="/yourapp" element={<YourApp/>} />
                            <Route path="/directions" element={<Directions/>} />
                            <Route path="/prequest" element={<PreQuest/>} />
                            <Route path="/firstquest" element={<FirstQuest/>} />
                            <Route path="/scndquest" element={<ScndQuest/>} />
                            <Route path="/thirdquest" element={<ThirdQuest/>} />
                            <Route path="thirdappli" element={<ThirdPageApp/>} />
                            <Route path="/lastappli" element={<LastAppli/>}/>
                        </Routes>
                        </div>
                    </animated.div>
                ))}
                </main>
            </>
    );
}


export default App;