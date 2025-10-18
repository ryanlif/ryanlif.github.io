import ExtLink from './ExtLink';

interface Props {
    teaching: any;
    index: number;
}

const TeachingItem = ({teaching, index}: Props): JSX.Element => {
    return (
        <div className = "mt-4 mb-8">
            <p className = "text-base text-gray-700">
                [{index}] {teaching.course} <b><i>{teaching.responsibility}</i></b><br/>
            </p>
            <p className = "text-sm">{teaching.description}</p>
            <p className = "text-gray-700 flex justify-end text-sm bold">
                {teaching.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
                ))}                
            </p>
            
        </div>

    );
};

export default TeachingItem;
