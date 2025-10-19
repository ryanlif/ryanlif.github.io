import research from './data/research.json'

const Research = (): JSX.Element => {
    return (
        <section className="grid w-full" id="research"> 
            <h2 className="text-xl font-bold mt-12 mb-4">Research Vision</h2>
            <div>
              <p>My long-term research vision is to develop a generic methodological framework to build personalized digital twins 
                for many real-world applications where individual heterogeneity is crucial, such as healthcare, transportation, 
                and business. To realize this vision, there are three essential pillars: <b>1) Human-centric AI.</b> Humans, as core 
                participants who contribute data and define the success of personalized digital twins, introduce significant variation
                 and uncertainty with their heterogeneous nature. It is essential for AI to understand human behaviors and foster 
                 effective interaction. I have led a research team developing a novel framework called CrowdLLM that builds on Large 
                 Language Models and generative AI, and can incorporate human behavior models. I have also developed models to 
                 characterize how human interact with AI systems and how rewards can be personalized to incentivize behavioral 
                 changes for improving individual well-being and system-wide performance. <b>2) Domain knowledge.</b> While domain 
                 knowledge offers a stable foundation grounded in human experience and scientific discovery, the key challenge lies 
                 in extracting, representing and operationalizing such knowledge to effectively inform personalized digital twins. 
                 Addressing this challenge is essential for enhancing their realism, interpretability, and 
                 controllability. <b>3) AI systems</b>. As digital twins are envisioned to be high-fidelity virtual representation of 
                 the physical twin, there are many methodological gaps in machine learning and AI model that range from modeling, to 
                 uncertainty quantification, and calibration, etc. My research have been focusing on these three pillars and a synergistic 
                 cycle among these three is the main drive of my research.</p>
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Research Accomplishments</h2>
            <div>
              <p>My research is interdisciplinary and lies at the intersection of <b>artificial intelligence (AI)</b>, <b>statistics</b>, and <b>quality science</b>, 
                with applications spanning healthcare, medicine, transportation, marketing, etc. I have been collaborating with researchers from 
                both academia and industry across the United States, Europe, and Asia. I was also fortunate to work at Meta as a full-time AI 
                researcher for one year, supported by a generous Meta AI Fellowship, and gained precious experience of cutting-edge AI research 
                and their applications in the real-world. My research works that focused on AI model personalization, human diversity and behavior, 
                their relevance with LLMs and generative AI,  have been selected as finalists in the Best Paper Competition of INFORMS Quality, 
                Statistics, and Reliability (QSR) Section in 2023 and 2025. A summary of my research is demonstrated in the overview figure. </p>
              <img src="images/research.png" alt="" width="100%"/>
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Potential Funding Resources</h2>
            <div>
              <p>My research has been supported by a variety of funding sources including government agencies (e.g., NSF, DARPA), 
                non-profit organizations (e.g., Breakthrough T1D, formerly JDRF), and industry sponsors (e.g., Amazon, Meta). My research 
                also aligns well with the priorities of NSF programs such as SCH, FDT-BioTech, MATH-DT, Future CoRe (formerly SCC), etc., 
                ARPA-H initiatives including GIVE and THRIVE, as well as several NIH programs. In addition, agencies such as DARPA, USDOT, 
                or the U.S. Army regularly issue solicit research relevant to my expertise. I also intend to explore new partnerships with 
                industry (e.g., Microsoft, NVDIA) or non-profit organizations. Looking ahead, I will build a strong and sustainable research 
                program supported by these funding sources. </p>
            </div>
        </section>
    );
};


export default Research;
