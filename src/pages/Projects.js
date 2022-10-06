import React from "react";
import s from "./projects.module.css";
import projectsData from "../projectsData";
import LanguageIcon from "@mui/icons-material/Language";

const projects = () => {
  return (
    <div className={s.bigContainer}>
      <div className={s.secContainer}>
        <div className={s.header}>
          <h1>Projects</h1>
          <h4>
            My projects I have contributed on are a way to keep track of my
            growth as a developer.
          </h4>
        </div>
        {projectsData.map((projects) => (
          <div className={s.projContainer}>
            <div className={s.projTextContainer}>
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
                {"    "}
                {projects.live}
              </a>
            </div>
            <img src={projects.picture} alt="dasd"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
