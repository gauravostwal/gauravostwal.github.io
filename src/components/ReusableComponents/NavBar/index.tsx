import * as React from 'react';
import './navbar.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';

  
const websiteLogo = require('../../../assets/logo1.png');
export interface INavBarProps extends RouteComponentProps{

}
export class NavBarImpl extends React.PureComponent<INavBarProps> {

    state = {
        activeLink: 0,
        responsiveFlag: false
    };

    handleLink = (index, linkNavigator) => {
        const { history } = this.props;
        history.push({
            pathname: `/${linkNavigator}`
        })
        this.setState({ activeLink: index });
    }
    handleShowMenu = () => {
        const { responsiveFlag } = this.state;
        this.setState({ responsiveFlag:  !responsiveFlag })
    }
    render() {
        const { responsiveFlag } = this.state;
        const { history } = this.props;
        const activeLink = history.location.pathname.split('/')[1];
        const labels = ['HOME', 'RESUME', 'SKILLS', 'CONTACT'];
        return (
            <div className="navBar-Container">
                {/* <div className="brand-logo"><img src={websiteLogo} className="brand-image"/></div> */}
                <div className= {`links ${ responsiveFlag ? 'responsive' : '' }`}>
                    { labels.map((label, index) => (
                        <div className={`links-label ${activeLink === label.toLowerCase() && 'active'} ${ responsiveFlag ? 'responsive' : '' } `} onClick={() => this.handleLink(index, label.toLowerCase())}>{label}</div>
                    )) }
                </div>
                <a className={`icon ${ responsiveFlag ? 'responsive' : '' }`} onClick={() => this.handleShowMenu()}>&#9776;</a>
            </div>
        );
    }
}

export const NavBar = withRouter(connect(null)(NavBarImpl));
