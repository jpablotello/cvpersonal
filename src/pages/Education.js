import React, { useState, useEffect, useContext } from 'react';
import { getEducation } from '../services/cvService';
import { UserContext } from '../context/UserContext';

export const Education = () => {

    const { lang } = useContext(UserContext);

    const [education, setEducation] = useState([]);

    useEffect(() => {
        setEducation(getEducation(lang));
    }, [lang]);

    return (
        <div>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    {
                        education.map( (educ, index)=> {
                            return (
                                <div key={educ.id} className="mb-5">
                                    <div className="d-flex flex-column flex-md-row justify-content-between">
                                        <div className="flex-grow-1">
                                            <h3 className="mb-0">{educ.instute}</h3>
                                            <div className="subheading mb-3">{educ.title}</div>
                                            <p>{lang === 'es' ? 'Estado : ' : 'State :' }{educ.status}</p>
                                        </div>
                                        <div className="flex-shrink-0"><span className="text-primary">{educ.since} - {educ.to}</span></div>
                                    </div>
                                    <hr className="m-0" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

