import {NextPage} from 'next';

import About from '../components/About';
import Research from '../components/Research';
import News from '../components/News';


const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <Research>
        <News/>
    </>
);

export default Index;
