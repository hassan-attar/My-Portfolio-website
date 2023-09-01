import classes from "./PortfolioSection.module.css";
import Wrapper from "../layout-elements/Wrapper";
import ProjectCard from "../projects/ProjectCard";
import { MouseEventHandler, useState } from "react";
import Icon from "../icons/Icon";
import { Project } from "@/util/types";
import { useNav } from "../hooks/useNav";

const PortfolioSection = ({ projects }: { projects: Project[] }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const numOfPages = Math.ceil(projects.length / 3);
  const ref = useNav("Portfolio");

  const onChangePage: MouseEventHandler<HTMLDivElement> = (e) => {
    const command = (e.target as HTMLDivElement)!.dataset!.value;
    if (!command) return;
    switch (command) {
      case "previous":
        setPage((prevPage) => {
          if (prevPage <= 1) return prevPage;
          else return prevPage - 1;
        });
        break;
      case "next":
        setPage((prevPage) => {
          if (prevPage >= numOfPages) return prevPage;
          else return prevPage + 1;
        });
        break;
      default:
        setPage(+command);
    }
  };

  return (
    <section className={classes.portfolio} id={"portfolio"} ref={ref}>
      <Wrapper>
        <div>
          <div>
            <h2>My Portfolio</h2>
            <h3>Projects</h3>
          </div>
          <div className={classes.projects}>
            {projects
              .filter(
                (project) =>
                  project.id > (page - 1) * limit && project.id <= page * limit
              )
              .map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
          </div>
        </div>
        <div className={classes.pagination} onClick={onChangePage}>
          <button className={classes["page-change-btn"]}>
            <Icon name="previous" dataset={{ "data-value": "previous" }} />
          </button>
          {Array(numOfPages)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                data-value={i + 1 + ""}
                className={page == i + 1 ? classes["active-page"] : ""}
              >
                {i + 1}
              </button>
            ))}
          <button className={classes["page-change-btn"]}>
            <Icon name="next" dataset={{ "data-value": "next" }} />
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default PortfolioSection;
