export const getAbout = (lang) => {
    let data;
    if (lang === 'es') {
        data = {
            aboutMe: `Tengo experiencia en aprovechar marcos ágiles para proporcionar focalización de problemas y proponer soluciones vistas generales de alto nivel. Los enfoques iterativos de la estrategia corporativa fomentan el pensamiento colaborativo para promover la propuesta de valor general.`,
        };
    } else {
        data = {
            aboutMe: `I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`,
        };
    }

    data = {
        ...data,
        facebook: 'https://www.facebook.com/jpablotello',
        twitter: 'https://twitter.com/pablojuantello',
        github: 'https://github.com/jpablosrv',
        linkedin: 'https://www.linkedin.com/in/juan-pablo-tello-ba829187/',
        name: 'Juan Pablo',
        lastName: 'Tello',
        age: 37,
        birthday: '01/12/1982',
        address: 'Balcarce 1059',
        city: 'Merlo',
        zipCode: '1722',
        cell: '011 15 32305442',
        email: 'tello.jpablo@gamil.com',
    };
    return data;
};

export const getEducation = (lang) => {
    const data = [
        {
            id: 5,
            instute: 'ESBA',
            city: 'Barrio Norte',
            title: 'Tecnicatura Superior en Análisis de Sistemas',
            since: '2020',
            to: lang === 'es' ? 'Presente' : 'Present',
            status: lang === 'es' ? 'Completo' : 'Complete'
        },
        {
            id: 4,
            instute: 'Educacion IT',
            city: 'Buenos Aires',
            title: 'Carrera de C#.Net',
            since: '2014',
            to: '2014',
            status: lang === 'es' ? 'Completo' : 'Complete'
        },
        {
            id: 3,
            instute: 'U.T.N',
            city: 'Facultad Regional Buenos Aires',
            title: 'Diplomatura en Programación en Java',
            since: '2012',
            to: '2013',
            status: lang === 'es' ? 'Completo' : 'Complete'
        },
        {
            id: 2,
            instute: 'U.T.N',
            city: 'Facultad Regional Haedo',
            title: 'Ingenieria en Electrónica',
            since: '2002',
            to: '2006',
            status: lang === 'es' ? 'Completo hasta 3º Año' : 'Completed until 3rd year'
        },
        {
            id: 1,
            instute: 'E.E.T.Nº 1',
            city: 'Merlo, Pcia Buenos Aires',
            title: 'Técnico En Electrónica',
            since: '1996',
            to: '2001',
            status: lang === 'es' ? 'Completo' : 'Complete'
        },
    ];

    return data;
};

export const getExperience = (lang) => {
    const data = [
        {
            id: 1,
            title: 'React Native Sr developer',
            company: 'Swiss Medical Seguros',
            description:
                lang === 'es'
                    ? `-Mantención de diversas aplicaciones desarrolladas en React Native
-Planeamiento de estrategias de mejoras propuestas, y aplicación de las mismas usando buenas prácticas en el desarrollo y procesos para generar código de calidad y mantenible
-Mantención, administración y actualización de las aplicaciones en los stores, tanto de IOs (App Store), como de Android (Google Play)
-Ayuda y soporte en aplicaciones Web desarrolladas en React js`
                    : `-Maintenance of various applications developed in React Native
-Planning of proposed improvement strategies, and their application using good development practices and processes to generate quality and maintainable code
-Maintenance, administration and updating of applications in stores, both IOs (App Store) and Android (Google Play)
-Help and support in Web applications developed in React js`,
            since: '02/2020',
            to: lang === 'es' ? 'Actualmente' : 'Present',
        },
        {
            id: 2,
            title: '.NET Fullstack Web Developer',
            company: 'Huenei S.A.',
            description: lang === 'es'
            ? `Desarrollo de soluciones y mejoras a varios proyectos, usando diversas tecnologías, como ser : C#.Net, Asp.net, Asp.net MVC, Sql Server, Angular y Amgular js`
            : `Development of solutions and improvements to various projects, using various technologies, such as: C # .Net, Asp.net, Asp.net MVC, Sql Server, Angular and Amgular js`,
            since: '03/2019',
            to: '01/2020',
        },
        {
            id: 3,
            title: 'Freelance',
            company: 'Freelance',
            description: lang === 'es' ? `Desarrollo de soluciones a medida de diversos rubros y necesidades.
-Experiencia en desarrollos webs con: Java, .Net, React js, Angular, T-Sql, Pl-Sql
-Experiencia en desarrollos de electrónica a medida
-Experiencia de desarrollos de apps mobiles con React Native, Android Nativo` 
: 
`Development of solutions adapted to various areas and needs.
-Experience in web development with: Java, .Net, React js, Angular
-Experience in custom electronics developments
-Mobile app development experience with React Native, Android Native`,
            since: '01/2016',
            to: lang === 'es' ? 'Actualmente' : 'Present',
        },
        {
            id: 4,
            title: lang === 'es' ? 'Desarrollo' : 'Development Department',
            company: 'Vial Control S.A.',
            description: lang === 'es' ? `Desarrollo de Software de equipos de Foto multas Viales en Java y C#.Net. Desarrollo de Hardware, Firmware y PCB de placas con micros 8 bits Atmel y Arm de 32 bits en C/C++ y Altium`
            : `Software development of Photo fines road equipment in Java and C # .Net. Hardware, Firmware and PCB development of boards with 8-bit Atmel and 32-bit Arm micros in C / C ++ and Altium`,
            since: '08/2016',
            to: '10/2018',
        },
        {
            id: 5,
            title: lang === 'es' ? 'Instalador de alarmas independiente' : 'Self Employed Installer',
            company: lang === 'es' ? 'Independiente' : 'Indepent',
            description: lang === 'es' ? 
                    'Instalador independiente de sistemas de seguridad de Residencia y Vehículos, Instalacion de CCTV.' 
                : 
                    'Independent installer of home and vehicle security systems, CCTV installation.',
            since: '02/2010',
            to: '01/2016',
        },
        {
            id: 6,
            title: lang === 'es' ? 'Servicio Técnico Sr' : '',
            company: 'X-28 Alarmas',
            description: lang === 'es' ? 'Servicio de Asistencia Técnica. Reparación de centrales de alarmas y sensores a nivel componente. Asistencia al cliente.' 
            : 'Technical assistance service. Repair of alarm centers and sensors at component level. Customer assistance.',
            since: '11/2006',
            to: '02/2016',
        },
    ];

    return data;
};

export const getInterest = (lang) => {
    const data = [
            {
                id: 1,
                description: lang === 'es' ? 
                `Además de ser desarrollador, disfruto mucho de la música a traves de mi guitarra. Cada vez que puedo, me hago escapes a la naturaleza. Soy amante de las matemáticas, la física y trato de estar al día de las novedades.`
                :
                `In addition to being a developer, I really enjoy music through my guitar. Whenever I can, I escape to nature. I am a lover of mathematics, physics and try to stay up to date with news.`
            },
            {
                id: 2,
                description: lang === 'es' ? 
                `Soy padre de gemelos, con los cuales disfrutamos de los juegos multijugadores. Me gustan las series y peliculas en las cuales cuentan historias interesantes, más allá de que sean fantasticas o no. No miro televisión` 
                :
                `I am the father of twins, with whom we enjoy multiplayer games. I like series and movies in which they tell interesting stories, regardless of whether they are fantastic or not. I don't watch television`
            }
        ]

    return data;
};

export const getSkills = (lang) => {
    const data = [
        {
            id: 1,
            description: lang === 'es' ? 'Mobile-First, Responsive Design' : 'Mobile-First, Responsive Design'
        },
        {
            id: 2,
            description: 'Cross Browser Testing & Debugging'
        },
        {
            id: 3,
            description: 'Cross Functional Teams'
        },
        {
            id: 4,
            description: lang === 'es' ? 'Desarrollo usando metodologías Agiles y Scrum' :'Agile Development & Scrum'
        },
        {
            id: 5,
            description: lang === 'es' ? 'Gran capacidad de aprendizaje y adaptación' : 'Great ability to learn and adapt to challenges'
        },
        {
            id: 6,
            description: lang === 'es' ? 'Respetuoso y muy social' : 'Respectful and very social'
        }
    ];

    return data;
};
