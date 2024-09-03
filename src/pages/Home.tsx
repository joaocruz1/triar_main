import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegação
import Navbar from "../components/Navbar";
import CardServices from "../components/CardServices";
import EmblaCarousel from "../components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';
import '../styles/base.css';
import '../styles/embla.css';
import '../styles/main.css';
import '../styles/home.css'; // Importa o arquivo CSS

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Home = () => {
    const navigate = useNavigate(); // Hook para navegação
    const titleContainerRef = useRef(null);

    const handleTitleClick = () => {
        navigate('/sertriar'); // Redireciona para a URL desejada
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.3, // O quanto do elemento precisa estar visível para ativar
            }
        );

        if (titleContainerRef.current) {
            observer.observe(titleContainerRef.current);
        }

        return () => {
            if (titleContainerRef.current) {
                observer.unobserve(titleContainerRef.current);
            }
        };
    }, []);

    return (
        <>
            <Navbar />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <div className="title-container" ref={titleContainerRef}>
                <h1 className="main-title" onClick={handleTitleClick}>
                    Seja <span className="highlighted-title">Triar</span>
                </h1>
                <h2 className="subtitle">Conheça nossos serviços</h2>
            </div>
            <CardServices />
        </>
    );
}

export default Home;
