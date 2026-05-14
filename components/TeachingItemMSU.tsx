import ExtLink from './ExtLink';

interface Props {
    teaching: any;
    index: number;
}

const TeachingItemMSU = ({teaching, index}: Props): JSX.Element => {
    const mainTextClass = teaching.active
        ? 'text-black dark:text-white'
        : 'text-gray-400 dark:text-gray-600';
    
    const subTextClass = teaching.active
        ? 'text-gray-900 dark:text-gray-50'
        : 'text-gray-400 dark:text-gray-600';

    return (
        <div className = "mt-4 mb-8">
            <p className={`text-base ${mainTextClass}`}>
                [{index}] <b>{teaching.course}</b> &nbsp;&nbsp;&nbsp;<br/>
            </p>
            <p className={`text-base ${mainTextClass}`}><i>{teaching.period}</i></p>
            <p className={`text-base ${subTextClass}`}>{teaching.description}</p>
            <p className={`text-base ${subTextClass} flex justify-end bold`}>
                {teaching.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
                ))}                
            </p>
            
        </div>

    );
};

export default TeachingItemMSU;
