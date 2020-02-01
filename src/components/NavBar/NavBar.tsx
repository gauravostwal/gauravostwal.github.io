import * as React from 'react';
import { Link, Element } from 'react-scroll'
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

const developerPhoto = require('../../assets/gaurav.jpg');

export interface INavBarProps{

}
export class NavBar extends React.PureComponent {
    static identifier = 'front-page';
    state = {
      activeLink: 'about'
    }
    handleLink = (string) => {
      this.setState({ activeLink: string });
  }
    render () {
        const {activeLink} = this.state
        console.log(activeLink)
        return (
            <React.Fragment>
            <nav className="navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger nav-bar-brand" href="#page-top">
                    <span className="d-block d-lg-none nav-bar-name">Gaurav Ostwal</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={developerPhoto} alt="" />
                    </span>
                </a>
                <button className="navbar-toggler nav-bar-toggle-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="d-none d-lg-block navbar-nav ">
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="about" spy={true} smooth={true} duration={500} >About</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="experience" spy={true} smooth={true} duration={500} >Experience</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="education" spy={true} smooth={true} duration={500} >Education</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="interests" spy={true} smooth={true} duration={500} >Interests</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="awards" spy={true} smooth={true} duration={500} >Awards</Link>
                    </li>
                </ul>
                </div>
            </nav>
            <div className="container-fluid p-0">
              <Element name="about" className="element" >
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                  <div className="w-100">
                    <h1 className="mb-0">Ostwal
                      <span className="user-name text-primary">Gaurav</span>
                    </h1>
                    <div className="subheading mb-5">Pune · Maharashtra, 411012 · (+91) 9403825035 ·
                      <a href="mailto:name@email.com">gauravostwal11@gmail.com</a>
                    </div>
                    <p className="lead mb-5">
                    "Building web apps is an art and HTTP is our stage to spread this positive art to the people" Thoroughly enjoy working with
                     full stack web development that includes integrating various JavaScript 
                     frameworks and back end technologies such as MongoDb, 
                     SailsJs, ReactJs. 
                     Love working on front end development using ReactJs and writing Typescript.
                    </p>
                    <div className="social-icons">
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                  </div>
                </section>
              </Element>
              
            </div>
            </React.Fragment>
        );
    }
}
