import ExtLink from './ExtLink';

interface Props {
    teaching: any;
    index: number;
}

const TeachingItem = ({teaching, index}: Props): JSX.Element => {
    return (
        <div className = "mt-4 mb-8">
            <p className = "text-base text-gray-700 dark:text-gray-100">
                [{index}] {teaching.course} &nbsp;&nbsp;&nbsp;<b>{teaching.responsibility}</b><br/>
            </p>
            <p className = "text-base text-gray-700 dark:text-gray-200"><i>{teaching.period}</i></p>
            <p className = "text-base">{teaching.description}</p>
            <p className = "text-base text-gray-700 dark:text-gray-300 flex justify-end bold">
                {teaching.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
                ))}                
            </p>
            
        </div>

    );
};

export default TeachingItem;
