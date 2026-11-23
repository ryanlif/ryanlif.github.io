import ExtLink from './ExtLink'
import data from './data/personalInfo.json'

const Education = (): JSX.Element => {
    return (
        <section className="grid" id="education">
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-accent dark:after:bg-accent-glow dark:after:shadow-glow">Education</h2>
            <p className = "text-base ml-4 text-gray-300">
                🐸 &nbsp;was at &nbsp;
                {
                    data.education.map((education, index) => {
                        if (index == 0){
                            return <ExtLink href={education.link} key={index}>{education.name}</ExtLink>
                        }else{
                            return <ExtLink href={education.link} key={index}>, {education.name}</ExtLink>
                        }
                    })
                }
            </p>
        </section>
    );
};



export default Education;
