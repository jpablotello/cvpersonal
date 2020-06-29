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
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://lh3.googleusercontent.com/s1D88L1KBMIHq_PB-PruWU8kyYA9KuOVE6Cra1HVicw-x8Fde18p8DYlxpLhYoPGQrORWyGqwurm6wzM79hHRw9yzEM7o67a1O7v3fVPkUkzxuGHgM49_kqrAc6pXYsXgitiQTx60cBUGKUHoOg-RYWIsoAW9dTs9jHqCYEmFnDs8Ff_mesrd5Hk0bgcxvNlbDx496BZNbOeMTLjbSEayq_m4svXTheA8NrCqMKOMitub5YbpSyAK52DrkfusqAgt-H4yF8TZtVMVp9DWCBYOHk4Njb7PuYGMpiFJqs61JUAXfyhfWvbcjPbU8ldGUQJt1ykBpn1jAeoRt_Z7bbF26tgkGwO_utL0oi8ulYcnh9vpd7t27RVGFkLcyzL9ziHbFSViKybiApkg-lCGmzfayWOdGLaMmhF5BIj3O6u7WE4BCz_Plk6TtUNOS-oKpSiq8n6eSE1vxKle5nzkGxWxp_P0MRNMOVgVM5HzJ_XCX79-xEe3UtT_fKg3zrSB3J9fgZEK0uNB0nv7X47MubngYr1M9gupapUHU0_jv3g73N4alFq4gOb3jw2WXlmn6sCNDNeRRtsf8EuNpmh1tuu203mJqzp4NQmFQT8jpstGRa-4YckPZ9S1z22jb6Y_uoGLjA6IkSz6C6T_d7Ai9Vr7wJPiSpTgEgeVliYQieo5fWJZJxbpAEyOoeEioif5Ug=w800-h868-no?authuser=0" alt="Juan Pablo Tello" />
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
