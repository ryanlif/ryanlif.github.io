const ServiceList = (): JSX.Element => {
    
    return (
        <section className="grid w-full" id="service">
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-accent dark:after:bg-accent-glow dark:after:shadow-glow">Journal and Conference Reviewers</h2>
            <div>
              <ul className="text-base font-normal text-gray-700 dark:text-gray-200 list-[square] ml-6 marker:text-highlight dark:marker:text-highlight-glow">
                <li><span className="font-bold">Journal:</span> INFORMS Journal on Data Science (IJDS), IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), IEEE Transactions on Automation Science and Engineering (TASE), IISE Transactions, IISE Transactions on Healthcare Systems Engineering, IEEE Transactions on Artificial Intelligence (TAI), IEEE Transactions on Neural Networks and Learning Systems (TNNLS), IEEE Transactions on Emerging Topics in Computing (TETC), Computers & Industrial Engineering</li>
                <li><span className="font-bold">Conference:</span> ISMB/ECCB 2021, IEEE Intelligent Vehicles Symposium (IV) 2026, NeurIPS 2026, INFORMS Workshop on Data Mining and Decision Analytics 2026</li>
              </ul>
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-accent dark:after:bg-accent-glow dark:after:shadow-glow">Conference Organizing Activities</h2>
            <div>
            <ul className="text-base font-normal text-gray-700 dark:text-gray-200 list-[square] ml-6 marker:text-highlight dark:marker:text-highlight-glow">
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
              <ul className="text-base font-normal text-gray-700 dark:text-gray-200 list-[square] ml-6 marker:text-highlight dark:marker:text-highlight-glow">
                <li>Institute for Operations Research and the Management Sciences (INFORMS)
                  {/* Hollow circles drawn with a thicker cyan ring; the browser's built-in hollow bullet is a hairline that looked almost white. */}
                  <ul className="list-none ml-3">
                      {['Quality, Statistics, and Reliability (QSR) Section', 'Data Mining (DM) Society', 'Health Applications Society'].map((item) => (
                          <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:w-[7px] before:h-[7px] before:rounded-full before:border-[1.5px] before:border-highlight dark:before:border-highlight-glow">{item}</li>
                      ))}
                  </ul>
                </li>
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
