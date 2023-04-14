import projectList from "./components/ProjectList";
import { PortfolioSect, PortfolioTitle, PortfolioImg, PortfolioName, PortfolioList } from "./styles/styles";
import { ProjectType } from "./types/ProjectListTypes";

const Portfolio = () => {
  return (
    <>
      <PortfolioSect>
        <PortfolioTitle>
          Portfolio
        </PortfolioTitle>
        <PortfolioList>
          {
            projectList.map((project: ProjectType) => (
              <div key={project.id}>
                <PortfolioImg src={project.imgSrc} />
                <PortfolioName>
                  {project.name}
                </PortfolioName>
              </div>
            ))
          }
        </PortfolioList>
        
      </PortfolioSect>
    </>
  );
};

export default Portfolio;