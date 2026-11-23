import personalInfo from './data/personalInfo.json'

const Research = (): JSX.Element => {
    return (
        <section className="grid w-full" id="research"> 
            <h2 className="text-xl font-bold mt-12 mb-4">Honors and Awards</h2>
            <div className="text-base ml-4 text-gray-700 dark:text-gray-300">
                <ul className="list-disc">
                    {personalInfo.honors.map((honor, index) => (
                        <li key={index} className="mb-1">
                            <span className="dark:text-white"><b>{honor.award}</b></span>
                            {honor.detail && <>, {honor.detail}</>}{' '}
                            <span className="text-gray-500 dark:text-gray-400">({honor.date})</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};


export default Research;
