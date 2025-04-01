import {NextPage} from 'next';

import TeachingList from '../components/TeachingList';
import TeachingItem from '../components/TeachingItem';
import Inde412 from '../components/Inde412';

const Teaching: NextPage<unknown> = () => (
    <>
        <TeachingList/>
        <Inde310/>
        <Inde412/>
    </>
);

export default Teaching;
