import React, {Image, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { getAbout } from '../services/cvService';
import userImg from '../assets/img/Yo.jpg';

export const Sidebar = () => {

    const lang = 'es';
    const [about, setAbout] = useState({})

    useEffect(() => {
        setAbout(getAbout(lang))
    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="">
                    <span className="d-block d-lg-none">{about.name + ' ' + about.lastName}</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={userImg} alt="Juan Pablo Tello" />
                    </span>
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link js-scroll-trigger" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/experience" className="nav-link js-scroll-trigger" activeClassName="active">Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/education" className="nav-link js-scroll-trigger" activeClassName="active">Education</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link js-scroll-trigger" activeClassName="active">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/interests" className="nav-link js-scroll-trigger" activeClassName="active">Interests</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
