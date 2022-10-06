import React from "react";
import projectsData from "../projectsData";
import pdf from "../resume.pdf";
import s from "./home.module.css";
import b from "./projects.module.css";
import LanguageIcon from "@mui/icons-material/Language";

const home = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.aboutMe}>
          <h3>Hi there,</h3>
          <h2>
            I am <span>Razvan</span>
          </h2>
          <p>
            I love building beautiful, accessible and useful applications to the
            world wide. Thank you for stopping by! I am glad you are here!
          </p>
          <a
            href={pdf}
            target="_blank"
            className={s.resumeButton}
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
        <div className={s.projectsForHome}>
          <h2>My Projects</h2>
          {projectsData.slice(0, 2).map((projects) => (
            <div className={b.projContainer} style={{ maxWidth: "1170px" }}>
              <div className={b.projTextContainer}>
                <h2>{projects.name}</h2>
                <p>{projects.aboutProject}</p>
                <p>
                  Techs: <span> {projects.techs} </span>
                </p>
                <a href={projects.live}>
                  <LanguageIcon
                    sx={{
                      color: "#e4cb58",
                      width: "25px",
                      height: "25px",
                      ":hover": { color: "#ff8922", cursor: "pointer" },
                    }}
                  />
                  {projects.live}
                </a>
              </div>
              <img src={projects.picture} alt="dasd"></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default home;
