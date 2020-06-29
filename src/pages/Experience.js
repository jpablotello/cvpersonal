import React, { useState, useEffect, useContext }from 'react';
import { getExperience } from '../services/cvService';
import { UserContext } from '../context/UserContext';

export const Experience = () => {

    const { lang } = useContext(UserContext);
    
    const [experiencias, setExperiencias] = useState([]);

    useEffect( () => {
        setExperiencias(getExperience(lang));
    }, [lang])

    return (
        <div>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    {
                        experiencias.map( (exp, index) => {
                            return (
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={exp.id}>
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{exp.title}</h3>
                                    <div className="subheading mb-3">{exp.company}</div>
                                    <p>{exp.description}</p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary"> { exp.since + ' - ' + exp.to}</span></div>
                            </div>)
                        })
                    }
                </div>
            </section>
        </div>
    )
}
