import ExtLink from './ExtLink';

interface Props {
    project: any;
    index: number;
}

const ProjectItem = ({project, index}: Props): JSX.Element => {
    return (
      // Every card has the same size; each figure is shown whole inside an equal-size white frame.
      <div className="shadow-lg mb-8 mx-auto lg:w-11/12 rounded-lg overflow-hidden flex flex-col lg:flex-row lg:h-[21rem]">
        <div className="bg-white flex items-center justify-center h-56 lg:h-full lg:w-5/12 shrink-0 p-4">
          <img className="max-h-full max-w-full object-contain" src={project.img} alt={project.title} />
        </div>
        <div className="w-full bg-gray-50 p-6 lg:p-8 flex flex-col">
          <h2 className="text-gray-700 font-semibold">{project.title}</h2>
          <p className="text-sm text-gray-500 mt-4">{project.description}</p>
          <p className = "text-gray-700 flex justify-end text-sm bold mt-auto pt-4">
                {project.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
                ))} 
          </p>
        </div>
      </div>
    )
};

export default ProjectItem;
