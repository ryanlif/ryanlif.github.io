import { useEffect, useRef } from 'react';
import ExtLink from './ExtLink';

interface Props {
    publication: any;
    index: number;
    prefix?: string;
}

declare global {
  interface Window {
    MathJax?: any;
  }
}

const PublicationItem = ({publication, index, prefix = ''}: Props): JSX.Element => {
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
            <p className = "text-base text-gray-700 dark:text-gray-200">
                [{prefix}{index + 1}] <span dangerouslySetInnerHTML={{ __html: publication.author }}/>{', '} <b><span dangerouslySetInnerHTML={{ __html: publication.title }}/></b><br/>
                <span className = "text-base">{publication.status}<i>{publication.conference}</i>{publication.year && ', '}<span className="text-base">{publication.year}</span></span>
            </p>
            <p className = "text-base bold text-gray-700 dark:text-gray-200 flex justify-between items-center">
                <span className = "text-sky-600"><span dangerouslySetInnerHTML={{ __html: publication.note }}/></span>
                <span className = "text-base text-gray-600 dark:text-gray-300">
                {publication.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
                ))}</span>
            </p>
            
        </div>

    );
};

export default PublicationItem;
