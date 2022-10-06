import innovxImg from "./images/innovx.png";
import veelancingImg from "./images/veelancing.png";

const projects = [
  {
    name: "InnovX-BCR",
    key: 1,
    aboutProject: `A business accelerator which makes easier communication between startups and investors.`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "GIT, ", "JIRA"],
    live: "https://innovationexchange.eu/",
    picture: innovxImg,
    github: "",
  },
  {
    name: "Veelancing",
    key: 2,
    aboutProject: `
        Veelancing is an innovative decentralized marketplace for freelancers, 
        designed for all those who need to get a job done efficiently, 
        without the current hassles of the industry.`,
    techs: ["React, ", "Semantic UI, ", "HTML, ", "CSS, ", "GIT, ", "JIRA"],
    live: "https://veelancing.io/",
    picture: veelancingImg,
    github: "",
  },
];

export default projects;
