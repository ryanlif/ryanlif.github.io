import {NextPage} from 'next';

import About from '../components/About';
import PublicationList from '../components/PublicationList';
import News from '../components/News';
import Education from '../components/Education';


const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <PublicationList/>
        <News/>
        <Education/>
    </>
);

export default Index;
