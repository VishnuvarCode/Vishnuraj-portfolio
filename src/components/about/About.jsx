import React, { useEffect } from "react";
import "./About.css";
import Image from "../../assets/my.png";
import Resume from "../../assets/Vishnuraj_FullStack_Resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  useEffect(() => {
    const animateProgress = () => {
      const skills = document.querySelectorAll(".skills__data");

      skills.forEach((skill) => {
        const progressBar = skill.querySelector(".skills__percentage");
        const percentage = parseInt(skill.querySelector(".skills__number").innerText);

        let count = 0;
        const increment = () => {
          if (count <= percentage) {
            progressBar.style.width = `${count}%`;
            count++;
            requestAnimationFrame(increment);
          }
        };

        increment();
      });
    };

    animateProgress();
  }, []);

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Experienced Full-Stack .NET & React Developer with 2 years of
              expertise in building modern web applications using HTML, CSS,
              JavaScript, Bootstrap, jQuery, React.js, Redux, and React Router.
              Skilled in integrating RESTful APIs, managing state with Redux,
              and using tools like npm and Git. Proficient in creating
              responsive, cross-browser compatible designs and optimizing web
              performance. On the backend, experienced in developing robust
              applications with ASP.NET, SQL Server, and C#. A collaborative
              team player committed to delivering high-quality software and
              staying current with development trends.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>ASP.NET</li>
              <li>SQL Server</li>
              <li>C#</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
              <li>Postman</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>
          </div>
          <br />

          {/* <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
