import PublicationItem from './PublicationItem'
import data from './data/pubjournal.json'
import datb from './data/pubconf.json'
import datc from './data/pubworking.json'
import datr from './data/pubreview.json'
import { useEffect } from "react";

declare global {
  interface Window {
    MathJax?: any;
  }
}

const PublicationList = (): JSX.Element => {
    useEffect(() => {
            // When MathJax is loaded and this component renders, typeset LaTeX
            const render = () => {
              if (window.MathJax && window.MathJax.typesetPromise) {window.MathJax.typesetPromise();};
            }
              setTimeout(render, 200);
            }, []);
    
    return (
        <section className="grid w-full" id="publication">
            <div>
              <p>In the list below, I indicate with:</p>
              $\dagger$ &nbsp;&nbsp; equal contribution
              <br />$(\star)$ &nbsp;&nbsp; students I mentor as co-authors
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-[#a70e1b] dark:after:bg-[#ef4444]">Refereed Journal Papers</h2>
            <div>
              {data.map((publication, index) => (
                <PublicationItem publication={publication} index={index} prefix="J" key={index}/>
              ))}
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-[#a70e1b] dark:after:bg-[#ef4444]">Peer-Reviewed Conference Papers</h2>
            <div>
              {datb.map((publication, index) => (
                <PublicationItem publication={publication} index={index} prefix="C" key={index}/>
              ))}
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-[#a70e1b] dark:after:bg-[#ef4444]">Papers under Review and Preprints</h2>
            <div>
              {datr.map((publication, index) => (
                <PublicationItem publication={publication} index={index} key={index}/>
              ))}
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4 after:block after:w-10 after:h-[3px] after:mt-2 after:rounded-full after:bg-[#a70e1b] dark:after:bg-[#ef4444]">Working Papers<span className="text-base text-lg text-gray-500 dark:text-gray-300"><i>&nbsp;&nbsp;(Full preprints coming soon.)</i></span></h2>
            <div>
              {datc.map((publication, index) => (
                <PublicationItem publication={publication} index={index} key={index}/>
              ))}
            </div>
        </section>

    );
};



export default PublicationList;
