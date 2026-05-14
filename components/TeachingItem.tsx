import ExtLink from './ExtLink';

interface Props {
    teaching: any;
    index: number;
}

const TeachingItem = ({teaching, index}: Props): JSX.Element => {
    const mainTextClass = teaching.active
        ? 'text-black dark:text-white'
        : 'text-gray-300 dark:text-gray-700';

    const subTextClass = teaching.active
        ? 'text-gray-900 dark:text-gray-50'
        : 'text-gray-100 dark:text-gray-900';
    return (
        <div className = "mt-4 mb-8">
            <p className={`text-base ${mainTextClass}`}>
                [{index}] {teaching.course} &nbsp;&nbsp;&nbsp;<b>{teaching.responsibility}</b><br/>
            </p>
            <p className={`text-base ${subTextClass}`}><i>{teaching.period}</i></p>
            <p className={`text-base ${subTextClass}`}>{teaching.description}</p>
            <p className={`text-base ${subTextClass} flex justify-end bold`}>
                {teaching.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
                ))}                
            </p>
            
        </div>

    );
};

export default TeachingItem;
