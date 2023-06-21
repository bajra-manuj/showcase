import Project from './Project';

export default function Projects({ user }) {
  return (
    <div className="my-24 px-8 h-full" id="projects">
      <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-br  from-fuchsia-500 to-pink-500">
        Projects
      </h3>
      {/* <div className='flex items-center flex-wrap gap-8'> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {'projects' in user &&
          user.projects.map((project) => <Project project={project} />)}
      </div>
    </div>
  );
}
