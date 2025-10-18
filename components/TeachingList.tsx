import TeachingItem from './TeachingItem'
import data from './data/teaching.json'

const TeachingList = (): JSX.Element => {
    return (
        <section className="grid w-full" id="teaching">
            <h2 className="text-xl font-bold mt-12 mb-4">Teaching Vision</h2>
            <div>
              <p>My vision is to create a collaborative learning environment where my students and I can grow and thrive together 
              in such an ever-changing and challenging world. I strive to foster a learning community that embraces a broad 
              spectrum of experiences or perspectives, ensuring that students from diverse backgrounds feel respected, 
              supported, and experience a profound sense of meaning and belonging. Together, we explore, use, and reflect on 
              advanced technologies in a friendly, collaborative environment to improve quality of life and make a meaningful impact on society.</p>
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Teaching Philosophy</h2>
            <div> 
              <p>My teaching philosophy is rooted in Confucius' saying: ``When three people walk together, I am sure to find my teacher 
                among them." This belief shapes my view of <b>teaching as a collaborative and reciprocal process</b> where both students 
                and instructors learn from each other. To maximize this mutual benefit, it is necessary to embrace differences and 
                I believe <b>teaching should be personalized</b> to accommodate students' varied academic needs, prior knowledge 
                and learning styles, rather than relying on a one-size-fits-all approach. I design course materials and assessments
                 that are flexible and responsive, enabling students to engage with course content in ways that align with their 
                 personal goals and strengths. I also value the importance of <b>connecting theory to practice</b>. When theoretical 
                 concepts are illustrated through real-world examples, students not only grasp complex ideas more effectively, but also 
                 develop the confidence and ability to apply what they learn in real-world situations.</p>
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Courses Taught</h2>
            <div> 
              {data.map((teaching, index) => (
                <TeachingItem teaching={teaching} index={index} key={index}/>
              ))}
            </div>

        </section>
    );
};



export default TeachingList;
