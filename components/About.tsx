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
					<p className="text-base mt-4 font-bold text-gray-700 dark:text-gray-200 hover:underline"><span>Email:</span> <a href={`mailto:${personalInfo.about.email}`} className="text-base text-gray-700 dark:text-gray-200">{personalInfo.about.email}</a> </p>
					<p className="text-base mt-1 font-bold text-gray-700 dark:text-gray-200">Phone: <span className="text-base font-normal text-gray-700 dark:text-gray-200">+1 (206)-321-8275</span></p>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					<p>
						I am currently a PhD candidate in the Department of <ExtLink href= {personalInfo.about.department.link}>{personalInfo.about.department.name} </ExtLink>
						at <ExtLink href= {personalInfo.about.college.link}>{personalInfo.about.college.name} </ExtLink> 
						advised by Dr. <ExtLink href={personalInfo.about.advisor.link}> {personalInfo.about.advisor.name}</ExtLink>. 
						Prior to this, I received my B.S. degree in <ExtLink href={personalInfo.about.bsdeg.link}> {personalInfo.about.bsdeg.name}</ExtLink> and M.S. degree in <ExtLink href={personalInfo.about.msdeg.link}> {personalInfo.about.msdeg.name}</ExtLink> from the <ExtLink href={personalInfo.about.mluniversity.link}> {personalInfo.about.mluniversity.name}</ExtLink> in 2007.  
						 <br/>
					</p>
					<p className = "text-xl font-bold text-gray-600 dark:text-gray-200"> Research Interest: </p>
					<p className = "text-base font-bold text-gray-500 dark:text-gray-100"> Methodologies: <span className="font-normal">{personalInfo.about.interest.methodology}</span></p>
					<p className = "text-base font-bold text-gray-500 dark:text-gray-100"> Applications: <span className="font-normal">{personalInfo.about.interest.application}</span></p>
					{/* <p className = "text-sm text-gray-400">
						Under construction......<br/>
						Re-architecting this site with some modern web technologies.
					</p> */}
				</div>
			</div>
		</section>
	);
};

export default About;
