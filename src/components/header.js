import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { changeBackground } from "../actions/index";


const Header = (props) => {
    function changeBackground() {
        props.changeBackground(Math.floor(Math.random() * 16));
    }
    function renderBackButton() {
        if (props.back) {
            return (
                <li>
                    <Link to="/">
                        <i className="material-icons">
                            arrow_back
                        </i>
                    </Link>
                </li>
            )
        }
    }
    return (
        <nav className="my-3">
            <div className="nav-wrapper grey darken-2">
                <ul className="left">
                    {renderBackButton()}
                    <li className={props.back ? "hide-on-small-only" : ""} onClick={changeBackground}>
                        <Link to="#">
                            <i className="material-icons">
                                refresh
                            </i>
                        </Link>
                    </li>
                </ul> 
                <span className="brand-logo center">{props.title}</span>
                <ul className="right">
                    <li>
                        <Link to="/add-todo">
                            <i className="material-icons">
                                add
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

function mapStateToProps(state) {
	return {
		background: state.background.background
	};
}

export default connect(mapStateToProps, { changeBackground })(Header);
