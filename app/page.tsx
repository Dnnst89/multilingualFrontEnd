import WhyChooseUs from './components/WhyChooseUs';
import { getExpertsIn } from '../lib/getExpertsIn';

export default async function Home() {
    const data = await getExpertsIn();

    return <WhyChooseUs data={data} />;
}
