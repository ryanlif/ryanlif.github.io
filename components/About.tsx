import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
					<p className="text-base mt-4 font-bold dark:text-gray-100 hover:underline">Email: </p><a href={`mailto:${personalInfo.about.email}`} className="text-sm">{personalInfo.about.email}</a>
					<br/> <p className="text-base mt-4 font-bold dark:text-gray-100 hover:underline">Phone: </p><p>+1 (206)-321-8275</p>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					<p>
						I am currently a PhD candidate in the Department of <ExtLink href= {personalInfo.about.department.link}>{personalInfo.about.department.name} </ExtLink>
						at <ExtLink href= {personalInfo.about.college.link}>{personalInfo.about.college.name} </ExtLink> 
						advised by Dr. <ExtLink href={personalInfo.about.advisor.link}> {personalInfo.about.advisor.name}</ExtLink>. 
						Prior to starting my journey at UW, I received my B.S. degree in Statistics (double degree in Computer Science) 
						and M.S. degree in Computer Science from the University of Science and Technology of China in 2007.  
						 <br/>
					</p>
					<p className = "text-sm text-gray-600">
						Research Interest: {personalInfo.about.interest}
					</p>
					<p className = "text-sm text-gray-400">
						Under construction......<br/>
						Re-architecting this site with some modern web technologies.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
