import {NextPage} from 'next';

import INDE310 from '../components/INDE310';
import INDE412 from '../components/INDE412';


const Style={
    height: 498,
    width: 680,
    frameborder: 0
}

const Teaching: NextPage<unknown> = () => (
    <>
        <INDE310/>
        <INDE412/>
    </>
);

export default Teaching;
