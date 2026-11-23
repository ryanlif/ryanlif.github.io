const ServiceList = (): JSX.Element => {
    
    return (
        <section className="grid w-full" id="service">
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-accent dark:after:bg-accent-glow dark:after:shadow-glow">Journal and Conference Reviewers</h2>
            <div>
              <ul className="text-base font-normal text-gray-700 dark:text-gray-200 list-disc ml-6 marker:text-highlight dark:marker:text-highlight-glow">
                <li><span className="font-bold">Journal:</span> INFORMS Journal on Data Science (IJDS), IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), IEEE Transactions on Automation Science and Engineering (TASE), IISE Transactions, IISE Transactions on Healthcare Systems Engineering, IEEE Transactions on Artificial Intelligence (TAI), IEEE Transactions on Neural Networks and Learning Systems (TNNLS), IEEE Transactions on Emerging Topics in Computing (TETC), Computers & Industrial Engineering</li>
                <li><span className="font-bold">Conference:</span> ISMB/ECCB 2021, IEEE Intelligent Vehicles Symposium (IV) 2026, NeurIPS 2026, INFORMS Workshop on Data Mining and Decision Analytics 2026</li>
              </ul>
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-accent dark:after:bg-accent-glow dark:after:shadow-glow">Conference Organizing Activities</h2>
            <div>
            <ul className="text-base font-normal text-gray-700 dark:text-gray-200 list-disc ml-6 marker:text-highlight dark:marker:text-highlight-glow">
              <li><i>Session Chair</i>, “Integration of Human, Knowledge and Systems for Quality”, INFORMS Annual Meeting, 2026.</li>
              <li><i>Session Chair</i>, “Integration of Human, Knowledge and Systems for Quality and Personalized Decision-making”, INFORMS Annual Meeting, 2025.</li>
                <li><i>Session Co-Chair</i>, “Data-Driven vs. Rule-Based: Bridging the Gap for Real-World Applications”, INFORMS Annual Meeting, 2025.</li>
                <li><i>Session Chair</i>, “Integration of Human, Knowledge and Systems for Quality”, INFORMS Annual Meeting, 2024.</li>
                <li><i>General Chair</i>, China R Conference (Hefei), 2017</li>
                <li><i>Program Committee Member</i>, International Workshop on Nature Inspired Computation Applications, Hefei, 2017</li>
            </ul>

            
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-accent dark:after:bg-accent-glow dark:after:shadow-glow">Membership</h2>
            <div>
              <ul className="text-base font-normal text-gray-700 dark:text-gray-200 list-disc ml-6 marker:text-highlight dark:marker:text-highlight-glow">
                <li>Institute for Operations Research and the Management Sciences (INFORMS)</li>
                  <ul className="list-[circle] ml-6">
                      <li>Quality, Statistics, and Reliability (QSR) Section</li>
                      <li>Data Mining (DM) Society</li>
                      <li>Health Applications Society</li>
                  </ul>
                <li>Institute of Industrial and Systems Engineers (IISE)</li>
                <li>Institute of Electrical and Electronics Engineers (IEEE)</li>
                <li>American Statistical Association (ASA) </li>
                <li>Association for Computing Machinery (ACM)</li>
              </ul>
            </div>
        </section>

    );
};



export default ServiceList;
