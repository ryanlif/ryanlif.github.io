import {NextPage} from 'next';

import TeachingList from '../components/TeachingList';
import Inde310 from '../components/INDE310';
import Inde412 from '../components/INDE412';

const Teaching: NextPage<unknown> = () => (
    <>
        <TeachingList/>
        <Inde310/>
        <Inde412/>
    </>
);

export default Teaching;
