import React, { useState, useEffect, useContext } from 'react';
import {getInterest} from '../services/cvService';
import { UserContext } from '../context/UserContext';

export const Interests = () => {
    
    const { lang } = useContext(UserContext);

    const [interests, setInterests] = useState([])

    useEffect(() => {
        setInterests(getInterest(lang))
    }, [lang])


    return (
        <div>
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">{lang === 'es' ? 'Intereses' : 'Interests' }</h2>
                    {
                        interests.map(interest => {
                            return (
                                <div key={interest.id}>
                                    <p>{interest.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
