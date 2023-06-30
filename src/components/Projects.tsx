import { FC } from 'react';
import { ProjectProp } from '../global/types';
import Project from './Project';

type Projects = {
  projects: ProjectProp[];
};
const Projects: FC<Projects> = ({ projects }) => {
  return (
    <div className="my-24 px-8  border-fuchsia-500 border mx-4" id="projects">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
