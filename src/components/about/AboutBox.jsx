import React, { useEffect, useRef } from 'react';
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';
import { CountUp } from 'countup.js';

const AboutBox = () => {
    const experienceRef = useRef(null);
    const repositoriesRef = useRef(null);
    const projectsRef = useRef(null);
    const qualityRef = useRef(null);

    useEffect(() => {
        // Initialize CountUp instances for each number
        const experienceCount = new CountUp(experienceRef.current, 2);
        const repositoriesCount = new CountUp(repositoriesRef.current, 7);
        const projectsCount = new CountUp(projectsRef.current, 3);
        const qualityCount = new CountUp(qualityRef.current, 100);

        // Start counting animations
        experienceCount.start();
        repositoriesCount.start();
        projectsCount.start();
        qualityCount.start();
    }, []);

    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className="about__icon" />
                <div>
                    <h3 ref={experienceRef} className="about__title">0</h3>
                    <span className="about__subtitle">Years of Experience</span>
                </div>
            </div>

            <div className="about__box">
                <RiCupLine className="about__icon" />
                <div>
                    <h3 ref={repositoriesRef} className="about__title">0</h3>
                    <span className="about__subtitle">Github Repositories</span>
                </div>
            </div>

            <div className="about__box">
                <RiGroupLine className="about__icon" />
                <div>
                    <h3 ref={projectsRef} className="about__title">0</h3>
                    <span className="about__subtitle">Launched Projects</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className="about__icon" />
                <div>
                    <h3 ref={qualityRef} className="about__title">0</h3>
                    <span className="about__subtitle">Code Quality</span>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;


// import React from 'react'
// import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

// const AboutBox = () => {
//     return (
//         <div className="about__boxes grid">
//             <div className="about__box">
//                 <RiFireLine className='about__icon' />

//                 <div>
//                     <h3 className="about__title">2</h3>
//                     <span className="about__subtitle">Years of Experience</span>
//                 </div>
//             </div>

//             <div className="about__box">
//                 <RiCupLine className='about__icon' />

//                 <div>
//                     <h3 className="about__title">4</h3>
//                     <span className="about__subtitle">Github Repositories</span>
//                 </div>
//             </div>

//             <div className="about__box">
//                 <RiGroupLine className='about__icon' />

//                 <div>
//                     <h3 className="about__title">3</h3>
//                     <span className="about__subtitle">Launched Projects</span>
//                 </div>
//             </div>

//             <div className="about__box">
//                 <RiTrophyLine className='about__icon' />

//                 <div>
//                     <h3 className="about__title">100</h3>
//                     <span className="about__subtitle">Code Quality</span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AboutBox