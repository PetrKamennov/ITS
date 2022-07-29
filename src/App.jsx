import React from 'react';
import { useTransition, animated } from 'react-spring';
import {
    Route,  
    Routes, 
    useLocation, 
} from 'react-router-dom';
import {Calendar} from './pages/index';
import Navbar from './components/Navbar/navbar';
import {Direction} from './pages/Direction';
import "./App.css";
import {HomePage} from './pages/HomePage';
import moment from 'moment';




function App() {
    const location = useLocation();

    const transitions = useTransition(location, 
            (location) => location.pathname, 
            {
            from: {
                opacity: 1,
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
                    style={{position:'relative', overflow: 'hidden', minHeight: '100vh'}}
                >
                {transitions.map(({item, props, key}) => (
                    <animated.div key={key} style={props}>
                        <div style={{position:'absolute', width: '100%'}}>
                        <Routes location={item}>
                            <Route path = "/" element = {<HomePage/>}/>
                            <Route path = "/about" element ="About"/>
                            <Route path = "/directions" element = {<Direction/>}/>
                            <Route path = "/application" element = "Application"/>
                            <Route path = "/calendar" element = {<Calendar/>}/>
                            <Route path = "/blog" element = "Blog"/>
                            <Route path = "/contacts" element = "Contacts"/>
                        </Routes>
                        </div>
                    </animated.div>
                ))}
                </main>
            </>
    );
}


export default App;