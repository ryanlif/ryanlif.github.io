import TeachingItem from './PublicationItem'
import data from './data/teaching.json'

const TeachingList = (): JSX.Element => {
    return (
        <section className="grid w-full" id="teaching">
            <h2 className="text-xl font-bold mt-12 mb-4">Teaching</h2>
            <div>
              {data.map((teaching, index) => (
                <TeachingItem teaching={teaching} index={index} key={index}/>
              ))}
            </div>

        </section>
    );
};



export default TeachingList;
