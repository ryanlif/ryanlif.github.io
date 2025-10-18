import PublicationItem from './PublicationItem'
import data from './data/pubjournal.json'
import datb from './data/pubconf.json'
import datc from './data/pubworking.json'

const PublicationList = (): JSX.Element => {
    useEffect(() => {
            // When MathJax is loaded and this component renders, typeset LaTeX
            const render = () => {
            if (window.MathJax && ref.current) {
                    window.MathJax.typesetPromise([ref.current]).catch((err: any) => console.error('MathJax render error:', err));
                }
            };
            setTimeout(render, 200);
        }, []);
    
    return (
        <section className="grid w-full" id="publication">
            {/* <div>
              <p>In the list below, I indiciate with:</p>
              <p>$\\dagger$ &nbsp;&nbsp; equal contribution</p>
              <p>$(\\star)$ &nbsp;&nbsp; graduate students I mentor as co-authors</p>
            </div> */}
            <h2 className="text-xl font-bold mt-12 mb-4">Refereed Journal Paper</h2>
            <div>
              {data.map((publication, index) => (
                <PublicationItem publication={publication} index={index} key={index}/>
              ))}
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Peer-Reviewed Conference Papers</h2>
            <div>
              {datb.map((publication, index) => (
                <PublicationItem publication={publication} index={index} key={index}/>
              ))}
            </div>
            <h2 className="text-xl font-bold mt-12 mb-4">Working Papers</h2>
            <div>
              {datc.map((publication, index) => (
                <PublicationItem publication={publication} index={index} key={index}/>
              ))}
            </div>
        </section>

    );
};



export default PublicationList;
