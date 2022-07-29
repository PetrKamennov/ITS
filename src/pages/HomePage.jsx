import React from "react";
import * as THREE from "three";
import Waves from "vanta/dist/vanta.waves.min.js";

import "../components/HomePage/HomePage.js";
import "../components/HomePage/HomePageCss.css";
import LogoWhite from "../components/HomePage/img/logowhite.png" ;

class HomePage extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = Waves ({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0,
            waveSpeed: 0.5
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return <div style={{ height: "100vh", width: "100%" }}  ref={this.vantaRef}>
            <div className="first__section">
                <img src={LogoWhite} alt='logo'/>
            </div>
            </div>
    }
}


export {HomePage};