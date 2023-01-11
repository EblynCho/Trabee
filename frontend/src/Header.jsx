import React from "react";

import {Outlet, Link} from "react-router-dom";

const styles = {
    link: {
        textDecoration: 'none',
        color: 'black',
        padding: 20,
        fontSize: 19
    }
};

function Header(props) {
    return (
        <div className={"nav_text"}>
            <nav className={"navbar navbar-expand-lg"}>
                <div className={"container-fluid"}>
                    <Link to={"/"} style={styles.link}>
                        <img src="/img/TRABEE_logo.png" alt="TRABEE" style={{width: 110}}/>
                    </Link>
                    <ul className={"navbar-nav"}>
                        <li className={"nav-item"}>
                            <Link to={"/board"} style={styles.link}>Board</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/"} style={styles.link}>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}

export default Header;