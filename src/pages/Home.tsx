import Navbar from "../components/Navbar";

import EmblaCarousel from "../components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import '../styles/base.css'
import '../styles/sandbox.css'
import '../styles/embla.css'


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Home = () => {
    return (
        <>
            <Navbar />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </>
    );
}

export default Home;