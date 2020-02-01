import * as React from 'react';
const developerPhoto = require('../../assets/gaurav.jpg');

export interface IFrontPageProps {

}

export interface IFrontPageState {

}

export class NavBar extends React.PureComponent {
    static identifier = 'front-page';
    render () {
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
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
                    </li>
                </ul>
                </div>
            </nav>
            <div className="container-fluid p-0">
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">Ostwal
          <span className="user-name text-primary">Gaurav</span>
        </h1>
        <div className="subheading mb-5">Pune · Maharashtra, 411012 · (+91) 9403825035 ·
          <a href="mailto:name@email.com">gauravostwal11@gmail.com</a>
        </div>
        <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
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
            </div>
            </React.Fragment>
        );
    }
}
