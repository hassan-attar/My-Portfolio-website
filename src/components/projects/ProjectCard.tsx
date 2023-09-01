import Image from "next/image";
import classes from "./ProjectCard.module.css";
import { Project } from "@/util/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={classes["project-card"]}>
      <div className={classes.img}>
        <Image
          src={`/${project.logo}`}
          height={150}
          width={150}
          alt={`${project.title} project logo`}
        />
      </div>
      <div className={classes.content}>
        <h5 className="smaller">{project.title}</h5>
        <div>
          <p className="smaller">{project.summary}</p>
          <ul className={classes.technologies}>
            {project.technologies.map((tech) => (
              <li className="smaller" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a href={project.github} target="_blank">
            Github
          </a>
          <a href={project.url || "/coming-soon"}>Launch</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
