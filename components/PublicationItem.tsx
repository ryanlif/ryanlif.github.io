import { useEffect, useRef } from 'react';
import ExtLink from './ExtLink';

interface Props {
    publication: any;
    index: number;
}

declare global {
  interface Window {
    MathJax?: any;
  }
}

const PublicationItem = ({publication, index}: Props): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // When MathJax is loaded and this component renders, typeset LaTeX
        const render = () => {
        if (window.MathJax && ref.current) {
                window.MathJax.typesetPromise([ref.current]).catch((err: any) => console.error('MathJax render error:', err));
            }
        };
        setTimeout(render, 200);
    }, [publication.author, publication.title]);

    return (
        <div className = "mt-4 mb-8">
            <p className = "text-base text-gray-600 dark:text-gray-100">
                [{index}] <span dangerouslySetInnerHTML={{ __html: publication.author }}/>{', '} <b>{publication.title}</b><br/>
                <a className = "text-base"><i>{publication.conference}</i></a>{', '}<a className="text-sm">{',' && publication.year}</a>
            </p>
            <p className = "text-base text-gray-600 dark:text-gray-200 flex justify-end text-sm bold">
                <span className = "text-base bold ">{publication.note}</span>
                {publication.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
                ))}                
            </p>
            
        </div>

    );
};

export default PublicationItem;
