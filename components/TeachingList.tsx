import TeachingItem from './TeachingItem'
import data from './data/teaching.json'

const TeachingList = (): JSX.Element => {
    return (
        <section className="grid w-full" id="teaching">
            <h2 className="text-xl font-bold mt-12 mb-4">Teaching Vision</h2>
            <div>
              <p>My vision is to create a collaborative learning environment where my students and I can grow and thrive together 
              in such an ever-changing and challenging world. I strive to foster a learning community that embraces a broad 
              spectrum of experiences and perspectives, ensuring that students from diverse backgrounds feel respected, 
              supported, and experience a profound sense of meaning and belonging.</p>
            {/* </div>
            <div> */}
              {data.map((teaching, index) => (
                <TeachingItem teaching={teaching} index={index} key={index}/>
              ))}
            </div>

        </section>
    );
};



export default TeachingList;
