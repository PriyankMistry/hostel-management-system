import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "../../Assets/Styles/Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const LogoutClickHandler = () => {
        menuToggleHandler();
        navigate("/");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/student" className={classes.header__content__logo}>
                    Student Dashboard
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/student/leaveform" onClick={menuToggleHandler}>
                                Leave Application
                            </Link>
                        </li>
                        <li>
                            <Link to="/student/Complaints" onClick={menuToggleHandler}>
                                Complaints
                            </Link>
                        </li>
                        <li>
                            <Link to="/student/Attendance" onClick={menuToggleHandler}>
                                Attendance
                            </Link>
                        </li>
                    </ul>
                    <button onClick={LogoutClickHandler}><FaSignOutAlt/> Logout</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;