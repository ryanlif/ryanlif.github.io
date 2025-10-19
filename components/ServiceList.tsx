const ServiceList = (): JSX.Element => {
    
    return (
        <section className="grid w-full" id="service">
            <h2 className="text-xl font-bold mt-12 mb-4">Journal and Conference Reviewers</h2>
            <div>

            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Conference Organizing Activities</h2>
            <div>

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
