import data from './data/news.json'

const News = (): JSX.Element => {
    return (
        <section className="grid" id="news">
            <h2 className="text-xl font-bold mt-12 mb-4">News</h2>
            <div className="text-base ml-4 text-gray-700 dark:text-white">
                <ul className="list-disc">
                  {data.map((updateInfo) => (
                     <li> <b>{updateInfo.date}:</b> {updateInfo.description}</li>
                  ))}
                </ul>
            </div>

        </section>
    );
};



export default News;
