import React, { useState, useEffect, useContext} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getAbout } from '../services/cvService';
import userImg from '../assets/img/yo.JPG';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { UserContext } from '../context/UserContext';

export const Sidebar = () => {

    //let lang = 'es';
    const { lang, setLang } = useContext(UserContext);
    
    const [about, setAbout] = useState({})

    useEffect(() => {
        setAbout(getAbout(lang))
    }, [lang])

    const handleChangeLang = () => {
        if(lang === 'es') {
            setLang('en');
        }
        else {
            setLang('es');
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            
                    <div className="d-lg-block">

                        <FormControlLabel
                            value="top"
                            control={
                                <Switch 
                                    defaultChecked
                                    color="default"
                                    onChange={handleChangeLang}
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />}
                            label={lang === 'es' ? 'Español' : 'English'}
                            labelPlacement="top"
                        />
                    </div>
                <Link className="navbar-brand js-scroll-trigger" to="/" >

                    <span className="d-block d-lg-none">{about.name + ' ' + about.lastName}</span>
                    <span className="d-none d-lg-block">
                        <img 
                            className="img-fluid img-profile rounded-circle mx-auto mb-2" 
                            src={"data:image/jpeg;base64,"+ about.image}
                            // src={process.env.PUBLIC_URL + '/img/yo.JPG'} 
                            alt="Juan Pablo Tello" 
                        />

                    </span>
                </Link>
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
                            <NavLink to="/about" className="nav-link js-scroll-trigger" activeClassName="active">{lang === 'es' ? 'Acerda de': 'About'}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/experience" className="nav-link js-scroll-trigger" activeClassName="active">{lang === 'es' ? 'Experiencia': 'Experience'}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/education" className="nav-link js-scroll-trigger" activeClassName="active">{lang === 'es' ? 'Educación': 'Education'}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link js-scroll-trigger" activeClassName="active">{lang === 'es' ? 'Habilidades': 'Skills'}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/interests" className="nav-link js-scroll-trigger" activeClassName="active">{lang === 'es' ? 'Intereses': 'Interests'}</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
