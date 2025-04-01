import {NextPage} from 'next';

import TeachingList from '../components/TeachingList';
import INDE310 from '../components/INDE310';
import INDE412 from '../components/INDE412';

const Teaching: NextPage<unknown> = () => (
    <>
        <TeachingList/>
        <INDE310/>
        <INDE412/>
    </>
);

export default Teaching;
