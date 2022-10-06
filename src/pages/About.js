import React from "react";
import s from "./about.module.css";
import me from "../images/meImg.png";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <div className={s.bigContainer}>
      <div className={s.container}>
        <h2>About me :D</h2>

        <div className={s.detailsConntainer}>
          <div className={s.details}>
            <img src={me} alt="Hi, I'm Razvan :D" className={s.meImg} />
            <h3>Guster Ravzn-Ionut</h3>
            <h3>Front End Developer</h3>
          </div>
          <div className={s.socialMContainer}>
            <a href="mailto:gusterrazvan@gmail.com">
              <EmailRoundedIcon className={s.socialIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/razvan-guster-786440215/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className={s.socialIcon} />
            </a>
          </div>
        </div>
        <div className={s.textes}>
          <p>
            I am a self taught developer based in Bucharest, Romania. I have
            experience designing and developing web applications, from simple
            landing pages to progressive web applications. What I like about
            programming is that you have always something new to learn, you
            never know enough, the technology is evolving so fast and you have
            to keep up the phase, so, in my opinion everyday you are a better
            version of yourself. I aspire towards a career that will allow me to
            help beginners learn, as I believe programming is not easy and it is
            a huge quality to know how to explaing complex terms with simple and
            concise words. When I am not coding, I like to spend my time playing
            video games, hanging out with friends, watching movies, playing
            football and hiking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
