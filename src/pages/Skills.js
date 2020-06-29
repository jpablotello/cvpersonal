import React, {useState, useContext, useEffect} from 'react';
import { getSkills } from '../services/cvService';
import { UserContext } from '../context/UserContext';

export const Skills = () => {

    const { lang } = useContext(UserContext);

    const [skills, setSkills] = useState([])

    useEffect(() => {
        setSkills(getSkills(lang))
    }, [lang])

    return (
        <div>
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        {/* <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className='fab fa-java'></i></li>
                        <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                        <li className="list-inline-item"><i className="fab fa-less"></i></li>
                        <li className="list-inline-item"><i className="fab fa-"></i></li>
                        <li className="list-inline-item"><i className="fab fa-gulp"></i></li>
                        <li className="list-inline-item"><i className="fab fa-grunt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li> */}

                        <li className="list-inline-item"><i className="devicon-android-plain-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-angularjs-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-angularjs-plain-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-babel-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-bootstrap-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-c-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-cplusplus-line-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-csharp-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-css3-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-oracle-original colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-docker-plain-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-dot-net-plain-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-git-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-gradle-plain-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-html5-plain-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-ionic-original-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-javascript-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-linux-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-mongodb-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-mysql-plain-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-nodejs-plain colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-react-original-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-swift-plain-wordmark colored"></i></li>
                        <li className="list-inline-item"><i className="devicon-typescript-plain colored"></i></li>

                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                    {
                        skills && skills.map( skill => {
                            return (<li key={skill.id}>
                                <span className="fa-li"><i className="fas fa-check"></i></span>{skill.description}
                            </li>)
                        })
                    }
                    </ul>
                </div>
            </section>
        </div>
    )
}
