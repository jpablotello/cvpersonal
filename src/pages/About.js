import React, { useState, useEffect, useContext } from 'react';
import { getAbout } from '../services/cvService';
import { UserContext } from '../context/UserContext';

export const About = () => {

    const { lang } = useContext(UserContext);

    const [About, setAbout] = useState({})


    useEffect(() => {
        setAbout(getAbout(lang))
    }, [lang])

    const {
        name,
        lastName,
        age,
        birthday,
        address,
        city,
        zipCode,
        cell,
        aboutMe,
        email,
        facebook,
        twitter,
        linkedin,
        github
    } = About;

    return (
        
        
        <div>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">{name} <span className="text-primary">{lastName}</span></h1>
                    <div className="subheading mb-5"> {address} · { city},{lang === 'es' ? 'CP: ' + zipCode : 'Zip Code : ' + zipCode} · {birthday} ·{lang === 'es' ? 'Tel : ' : 'Phone : ' } {cell}· <a href={"mailto:" + email}>{email}</a></div>
                    <p className="lead mb-5">{aboutMe}</p>
                    <div className="social-icons">
                        <a className="social-icon" href={linkedin}><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href={github}><i className="fab fa-github"></i></a>
                        <a className="social-icon" href={twitter}><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href={facebook}><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
