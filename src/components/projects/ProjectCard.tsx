import Image from "next/image";
import classes from "./ProjectCard.module.css";
import { Project } from "@/util/types";
import Link from "next/link";

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
          {project.url && (
            <a href={project.url || "/coming-soon"} target="_blank">
              Launch
            </a>
          )}
          {!project.url && (
            <Link
              href={"/coming-soon"}
              className={classes.disabled}
              onClick={(e) => e.preventDefault()}
            >
              Launch
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
