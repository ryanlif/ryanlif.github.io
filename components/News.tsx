import data from './data/news.json'


const News = (): JSX.Element => {
    return (
        <section className="grid" id="news">
            <h2 className="text-xl font-bold mt-12 mb-4">News</h2>
            <div className="text-base ml-4 text-gray-700 dark:text-gray-300">
                {/* <ul className="list-disc">
                  {data.map((updateInfo) => (
                     <li> <span className="dark:text-white"><b>{updateInfo.date}:</b></span> {updateInfo.description}</li>
                  ))}
                </ul> */}
                <ul className="list-disc">
                    {data.slice(0, 8).map((updateInfo, index) => (
                        <li key={index}>
                        <span className="dark:text-white"><b>{updateInfo.date}:</b></span> {updateInfo.description}
                        </li>
                    ))}
                </ul>

                {data.length > 8 && (
                    <details className="mt-4">
                    <summary className="cursor-pointer text-base font-medium text-gray-500 dark:text-gray-400">
                            Old News
                    </summary>

                    <ul className="list-disc mt-3">
                    {data.slice(8).map((updateInfo, index) => (
                        <li key={index}>
                        <span className="dark:text-white"><b>{updateInfo.date}:</b></span> {updateInfo.description}
                        </li>
                    ))}
                    </ul>
                    </details>
                )} 
            </div>

        </section>
    );
};



export default News;
