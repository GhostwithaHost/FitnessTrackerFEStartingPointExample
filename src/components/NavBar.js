import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {

const {isLoggedIn, loggedInUsername} = props;

    return (
        <div id="navbar">
            <div id="siteName" className="navtext">
                Fitness Trackr
            </div>
            <div id="siteLinks">
            {isLoggedIn ?
                <span className="navtext">{`Welcome, ${loggedInUsername}`}</span>
                :
                <span className="navtext">Welcome, Guest</span>
            }

            <Link to="/">
                <a className="navtext">HOME</a>
            </Link>

            {isLoggedIn ?
                <Link to="/">
                    <a className="navtext"
                        onClick={() => {
                            localStorage.removeItem("access_token");
                        }}>LOG OUT</a>
                </Link>
                :
                null}
        </div>
        </div>
    )
}

export default NavBar;
