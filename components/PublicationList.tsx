import PublicationItem from './PublicationItem'
import data from './data/publications.json'

const PublicationList = (): JSX.Element => {
    return (
        <section className="grid w-full" id="publication">
            <h2 className="text-xl font-bold mt-12 mb-4">Publications</h2>
            <embed src="https://drive.google.com/drive/u/0/folders/1y5ehRojt5HjUX5yVzIazTgfslXClS73Z" width="500" height="500" />
            <div>
              {data.map((publication, index) => (
                <PublicationItem publication={publication} index={index} key={index}/>
              ))}
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Working Papers</h2>
            <div>
              {data.map((publication, index) => (
                <PublicationItem publication={publication} index={index} key={index}/>
              ))}
            </div>
        </section>

    );
};



export default PublicationList;
