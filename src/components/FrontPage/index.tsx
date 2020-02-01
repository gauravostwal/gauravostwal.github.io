import * as React from 'react';

const developerPhoto = require('../../assets/gaurav.jpg');
import './frontpage.scss';
import { Particle } from '../ReusableComponents/Particles';
import { NavBar } from '../ReusableComponents/NavBar/index';

export interface IFrontPageProps {

}

export interface IFrontPageState {

}

export class FrontPage extends React.PureComponent {
    static identifier = 'front-page';
    componentWillMount(){
        document.body.style.backgroundColor = "#121212";
    }
    render () {
        return (
        <div className="main-container">
            <Particle />
            <div className="front-page-wrapper">
            {/* <div className="front-page-container"> */}
                
                <div className="developer-details">
                <div className="image-wrapper">
                    <img src={developerPhoto} className="image"/>
                </div>
                <div className="labels">
                    <div className="intro-label">Hello I'm</div>
                    <div className="developer-name-label">GAURAV OSTWAL</div>
                    <div className="developer-profile-label">FULL STACK DEVELOPER</div>
                </div>
                </div>
            {/* </div> */}
            </div>
            <NavBar />
        </div>
        );
    }
}
