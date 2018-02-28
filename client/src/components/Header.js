import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllAnimals } from '../redux/actions';
import logo from '../images/logo3.png';
import logo_white from '../images/logo3-white.png';

class Header extends Component {

    getAllAnimals() {
        this.props.actions.getAllAnimals(this.props.animals);
    }

    render () {
        const { links } = this.props;

        return(
            <header className="header">
                <div className="header__logo">
                    <div className="header__logo__logo-image">
                        <img src={links ? logo : logo_white} alt="logo"/>
                    </div>
                    <Link to="/" className="header__logo__name" style={links ? links : null}><h2> Logo </h2></Link>
                </div>
                <ul className="header__nav">
                    <NavLink exact to="/" className="header__nav__link" style={links ? links : null}><li>Home</li></NavLink>
                    <NavLink to='/animals' className="header__nav__link" style={links ? links : null} onClick={this.getAllAnimals.bind(this)}><li>Animals</li></NavLink>
                </ul>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        animals: state.animals.animals
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
        {
            getAllAnimals
        },
        dispatch
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);