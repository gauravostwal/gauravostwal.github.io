import * as React from 'react';
import { NavBar } from '../ReusableComponents/NavBar/index';
import './resume.scss';
const developerPhoto = require('../../assets/gaur.jpg');

export interface IResumePageProps {

}

export class ResumePage extends React.PureComponent<IResumePageProps> {
    state = {

    };
    
    render() {
        return (
            <div className="resume-page-wrapper">
                <NavBar />
                <div className="resume-container">
                    <div className="resume-main-container">   
                    <div className="left-column-container">
                    <div className="image-wrapper">
                        <img src={developerPhoto} className="image"/>
                    </div>
                    {/* <div className="objective-label">
                        Objective
                    </div> */}
                    </div>
                    <div className="right-column-container">
                        <div className="title-wrapper">
                            <div className="developer-label">
                                    Gaurav Ostwal
                            </div>
                            <div className="developer-profile">
                                    FULL STACK DEVELOPER
                            </div>
                        </div>
                        <div className="body-wrapper">
                            <div className="">
                                Experience
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}