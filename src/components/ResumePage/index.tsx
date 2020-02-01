import * as React from 'react';
import { NavBar } from '../ReusableComponents/NavBar/index';
import './resume.scss';
import { skillContants } from 'src/utilities/jsonConstants';
const developerPhoto = require('../../assets/gaur.jpg');
import Progress from 'react-progressbar';

export interface IResumePageProps {

}

export class ResumePage extends React.PureComponent<IResumePageProps> {
    state = {

    };
    componentWillMount(){
        document.body.style.backgroundColor = "#121212";
    }

    renderIntroSection() {
        return (
            <div className="top-container">
                <div className="name-label">
                        GAURAV OSTWAL
                </div>
                <div className="skill-label">
                        FULL STACK DEVELOPER
                </div>
            </div>
        );
    }

    renderContactDetails(){
        return (
            <div className="contact-container"> 
                <label className="contact">CONTACT</label>
                <div className="details">
                    <div className="contact-labels-container">
                        <div className="contact-labels">Address</div>
                        <div className="contact-labels-details">
                            Gurukrupa Aster, 
                            Vadgaosheri, 
                            Pune
                        </div>
                    </div>
                    <div className="contact-labels-container">
                        <div className="contact-labels">Phone</div>
                        <div className="contact-labels-details">
                            9403825035
                        </div>
                    </div>
                    <div className="contact-labels-container">
                        <div className="contact-labels">Email</div>
                        <div className="contact-labels-details">
                            gaurav.ostwal+11@coditas.com
                        </div>
                    </div>
                    <div className="contact-labels-container">
                        <div className="contact-labels">Website</div>
                        <div className="contact-labels-details">
                            www.gauravostwal.com
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    experienceContainer() {
        return (
            <div className="experience-container">
                            <label className="experience">EXPERIENCE</label>
                            <div className="experience-data-container">
                                    <div className="year">
                                            2018 - Present
                                    </div>
                                    <div className="company-container">
                                        <div className="company-title">
                                                Coditas Technologies Pvt Ltd
                                        </div>
                                        <div className="company-position">
                                                Software Developer
                                        </div>
                                        <div className="job-description">
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst                                        
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className="experience-data-container">
                                    <div className="year">
                                            2017 - 2018
                                    </div>
                                    <div className="company-container">
                                        <div className="company-title">
                                                Anulom Technologies
                                        </div>
                                        <div className="company-position">
                                                Project Intern
                                        </div>
                                        <div className="job-description">
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst                                        
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                            A goal-oriented professional with nearly 3 years as Full Stack Developer 
                                            and Data Analyst
                                        </div>
                                        
                                    </div>
                            </div>
                        </div>
        )
    }
    progressBar(widthValue){
        return (
            <div className="progress-bar-container">
                <div className="filled-value" style={{ width: `${widthValue}`}}>

                </div>
            </div>
        );
    }
    skillContainer() {
        return (
            <div className="skills-container">
                <label className="skill-label">SKILLS & EXPERTIZE</label>
                <div className="skills-details-container">
                    {skillContants.map(skill => (
                        <div className="skill-detail">
                            <div className="skill">
                                { skill.skillName }
                            </div>
                                {this.progressBar(skill.efficiency)}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="resume-container">
                {this.renderIntroSection()}
                <div className="middle-container">
                    <div className="middle-left-container">
                        <div className="profile-container"> 
                            <label className="profile">PROFILE</label>
                            <div className="description">
                                A professional developer having 1.6 year of experience with passion for web development
                            </div>
                        </div>
                        {this.renderContactDetails()}

                    </div>
                    <div className="middle-right-container">
                        {this.experienceContainer()}
                        {this.skillContainer()}
                    </div>
                </div>
            </div>
        );
    }
}