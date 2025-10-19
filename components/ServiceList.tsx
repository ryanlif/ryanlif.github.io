const ServiceList = (): JSX.Element => {
    
    return (
        <section className="grid w-full" id="service">
            <h2 className="text-xl font-bold mt-12 mb-4">Journal and Conference Reviewers</h2>
            <div>
              <ul className="text-base font-normal text-gray-700 dark:text-gray-200 list-disc ml-6">
                <li>IEEE Transactions on Automation Science and Engineering (TASE), INFORMS Journal on Data Science (JDS), IISE Transactions on Healthcare Systems Engineering, IEEE Transactions on Artificial Intelligence (TAI), Computers & Industrial Engineering, IEEE Transactions on Emerging Topics in Computing Intelligence (TETC), IEEE Transactions on Neural Networks and Learning Systems (TNNLS)</li>
                <li>ISMB/ECCB 2021</li>
              </ul>
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Conference Organizing Activities</h2>
            <div>
            <ul className="text-base font-normal text-gray-700 dark:text-gray-200 list-disc ml-6">
              <li><i>Session Chair</i>, “Integration of Human, Knowledge and Systems for Quality and Personalized Decision-making”, INFORMS Annual Meeting, 2025.</li>
                <li><i>Session Co-Chair</i>, “Data-Driven vs. Rule-Based: Bridging the Gap for Real-World Applications”, INFORMS Annual Meeting, 2025.</li>
                <li><i>Session Chair</i>, “Integration of Human, Knowledge and Systems for Quality”, INFORMS Annual Meeting, 2024.</li>
                <li><i>General Chair</i>, China R Conference (Hefei), 2017</li>
                <li><i>Program Committee Member</i>, International Workshop on Nature Inspired Computation Applications, Hefei, 2017</li>
            </ul>

            
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Membership</h2>
            <div>
              <ul className="text-base font-normal text-gray-700 dark:text-gray-200 list-disc ml-6">
                <li>Institute for Operation Research and the Management Sciences (INFORMS)</li>
                  <ul className="list-[circle] ml-6">
                      <li>Quality, Statistics, and Reliability (QSR) Section</li>
                      <li>Data Mining (DM) Society</li>
                  </ul>
                <li>Institute of Industrial and Systems Engineers (IISE)</li>
                <li>American Statistical Association (ASA) </li>
                <li>Institute of Electrical and Electronics Engineers (IEEE)</li>
              </ul>
            </div>
        </section>

    );
};



export default ServiceList;
