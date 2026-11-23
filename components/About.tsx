import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import SupportingBox from './SupportingBox';
import personalInfo from './data/personalInfo.json'

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			{/* Two columns on wider screens: the name sits above the text column, so the photo lines up with the first line of the bio. */}
			<div className="md:grid md:grid-cols-[auto_minmax(0,36rem)] md:gap-x-8">
				<h1 className="text-4xl font-bold pb-8 md:pb-4 md:col-start-2">{personalInfo.name}</h1>
				<div className="hidden md:block md:col-start-1 md:row-start-2 rounded-md">
					<ProfileImage></ProfileImage>
					<p className="text-base mt-4 font-bold text-gray-700 dark:text-gray-200 hover:underline"><span>Email:</span> <a href={`mailto:${personalInfo.about.email}`} className="text-base font-normal text-gray-700 dark:text-gray-200">{personalInfo.about.email}</a> </p>
					<p className="text-base mt-1 font-bold text-gray-700 dark:text-gray-200">Phone: <span className="text-base font-normal text-gray-700 dark:text-gray-200">+1 (662) 325-7624</span></p>
					<p className="text-base mt-1 font-bold text-gray-700 dark:text-gray-200">Lab: <a href={personalInfo.about.lab.link} target="_blank" rel="noopener noreferrer" className="text-base text-[#a70e1b] dark:text-[#ef4444] font-semibold hover:underline">{personalInfo.about.lab.name}</a></p>
					<div className="mt-4">
						<SupportingBox/>
					</div>
				</div>
				<div className="flex flex-col w-full md:col-start-2 md:row-start-2">
					<p>
						I am currently an Assistant Professor in the Department of <ExtLink href= {personalInfo.about.department.link}>{personalInfo.about.department.name} </ExtLink>
						at <ExtLink href= {personalInfo.about.college.link}>{personalInfo.about.college.name}</ExtLink>. I obtained my Ph.D. degree in <ExtLink href= {personalInfo.about.phddepartment.link}>{personalInfo.about.phddepartment.name} </ExtLink> 
						from <ExtLink href= {personalInfo.about.phdcollege.link}>{personalInfo.about.phdcollege.name}</ExtLink> in 2026, and I am fortunate to have Dr. <ExtLink href={personalInfo.about.advisor.link}>{personalInfo.about.advisor.name}</ExtLink> as my advisor. 
						Prior to this, I received my B.S. degrees in Statistics and Computer Science (dual degree) in 2017 and M.S. degree in Computer Science in 2020 from the University of Science and Technology of China (USTC).  
					</p>
					<p className = "text-xl font-bold text-gray-600 dark:text-gray-200 mt-4"> Research Interest: </p>
					<p className = "text-base text-gray-500 dark:text-gray-100 mt-1">{personalInfo.about.interest.summary}</p>
					<p className = "text-base italic text-gray-500 dark:text-gray-100 mt-2">Please see my lab website <ExtLink href={personalInfo.about.lab.link}><span className="text-[#a70e1b] dark:text-[#ef4444] font-semibold">{personalInfo.about.lab.name}</span></ExtLink> for more information.</p>
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
