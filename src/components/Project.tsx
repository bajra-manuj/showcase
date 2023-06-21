export default function Project({ project }) {
  return (
    <div className="flex flex-col gap-3 text-center rounded px-4 my-4 border-2 border-gray-100 hover:shadow">
      <h2>{project.name}</h2>

      <p className="leading-7">{project.description}</p>

      <div className="flex items-center justify-center flex-wrap gap-2 ">
        {'tags' in project &&
          project.tags.map((tag: string) => (
            <div className="px-3 py-2 bg-gray-200 rounded-md text-xs  cursor-pointer hover:bg-gradient-to-br hover:text-white hover:border-transparent  hover:from-fuchsia-500 hover:to-pink-500">
              {tag}
            </div>
          ))}
      </div>

      <div className="flex items-center justify-center gap-4 w-full">
        <a
          className="cursor-pointer text-lg visited:text-inherit hover:text-fuchsia-500"
          href={project.link}
        >
          github
          <i className="fa-brands fa-github"></i>
        </a>
        <button className="cursor-pointer text-sm visited:text-inherit hover:text-fuchsia-500">
          <i className="fa-solid fa-up-right-from-square"></i>{' '}
        </button>
      </div>
    </div>
  );
}
