import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "../../Assets/Styles/Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Header = (props) => {

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
        if (size.width > 963 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const LogoutClickHandler = () => {
        menuToggleHandler();
        localStorage.clear();
        navigate("/");
        window.location.reload();
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to={props.titlelink} className={classes.header__content__logo}>
                   {props.Headericon}   {props.Headertitle} 
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 963 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to={props.content1link} onClick={menuToggleHandler}>
                                {props.content1}
                            </Link>
                        </li>
                        <li>
                            <Link to={props.content2link} onClick={menuToggleHandler}>
                                {props.content2}
                            </Link>
                        </li>
                        <li>
                        {props.content3 === "" ? null : (
                            <Link to={props.content3link} onClick={menuToggleHandler}>
                                {props.content3}
                            </Link>

                        )}
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