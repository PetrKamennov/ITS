import React from 'react';
import { useTransition, animated } from 'react-spring';
import { 
    BrowserRouter as Router, 
    Route, 
    Routes, 
    useLocation 
} from 'react-router-dom';
import { Calendar } from './pages/index';
import Navbar from './components/Navbar/navbar';
import { Direction } from './pages/Direction';
import "./App.css";



function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element='Homepage'/>
                    <Route exact path="/about" element="About"/>
                    <Route exact path="/directions" element={ <Direction/> }/>
                    <Route exact path="/application" element="Application"/>
                    <Route exact path="/calendar" element = { <Calendar/> }/>
                    <Route exact path="/blog" element="Blog"/>
                    <Route exact path="/contacts" element="Contacts"/>
                </Routes>
            </Router>
        </div>
    );
}


export default App;