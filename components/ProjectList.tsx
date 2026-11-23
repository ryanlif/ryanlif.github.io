import ProjectItem from './ProjectItem'
import data from './data/projects.json'

const ProjectList = (): JSX.Element => {
    return (
        <section className="grid" id="project">
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-[#a70e1b] dark:after:bg-[#ef4444]">Projects</h2>
            <div>
                {data.map((project, index) => (
                    <ProjectItem project={project} index={index} key={index}/>
                ))}
            </div>
        </section>
        
    );
};



export default ProjectList;
