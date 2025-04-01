import {NextPage} from 'next';

import TeachingList from '../components/TeachingList';
import LP from '../components/INDE310';
import IPDP from '../components/INDE412';

const Teaching: NextPage<unknown> = () => (
    <>
        <TeachingList/>
        <LP/>
        <IPDP/>
    </>
);

export default Teaching;
