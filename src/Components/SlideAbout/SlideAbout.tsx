import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'

const SlideAbout: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.init({
                duration: 3000,
            });
        }, 300)
    }, []);

    return (
        <>
            <Box data-aos="fade-left" data-aos-easing="ease-in-out">
                <Typography  gutterBottom sx={{color: 'white'}}>
                    Olá! Meu nome é Fabio Freitas, e eu nasci em Vespasiano-MG, Brasil. Desde cedo, sempre tive uma grande curiosidade e paixão por tecnologia, o que me levou a explorar e aprender cada vez mais sobre este fascinante universo.
                    Formação Acadêmica
                    Estou cursando full Stack Python na Ebac, com especialização em JavaScript e Python. Durante meus estudos, aprendi fundamentos importantes de programação e desenvolvi minhas habilidades em diversas linguagens e ferramentas tecnológicas.
                    Experiência Profissional
                    Ao longo da minha carreira, tive a oportunidade de trabalhar em diferentes projetos e adquirir experiência prática. Como estudante fiz diversos projetos com varias tecnologias distintas na Ebac, Alura, e na Dio, onde desenvolvi projetos incriveis como lojas, home Pajes, Galerias etc... Esses projetos me permitiram aprimorar minhas competências técnicas e trabalhar em equipe, enfrentando desafios e buscando sempre as melhores soluções.
                    Habilidades
                    Minhas principais habilidades incluem:
                    JavaScript: Desenvolvimento de aplicações dinâmicas e interativas.
                    React: Criação de interfaces de usuário modernas e responsivas.
                    TypeScript: Programação com tipos para maior segurança e manutenção do código.
                    Vue.js: Desenvolvimento de interfaces de usuário reativas.
                    Material-UI: Estilização de aplicações com componentes prontos e personalizáveis.
                    Grunt: Automatização de tarefas no desenvolvimento front-end.
                    Less: Pré-processador CSS para escrita de estilos de forma mais eficiente e organizada.
                    Sass: Outro pré-processador CSS para escrita de estilos com maior flexibilidade e funções avançadas.
                    Interesses e Hobbies
                    Além de programar, gosto de passar meu tempo livre explorando novas tecnologias e tendências no mundo da programação. Sou apaixonado por aprender e melhorar constantemente minhas habilidades. Também gosto de cultivar legumes verduras e frutas, o que me ajuda a manter um bom equilíbrio entre trabalho e lazer.
                    Objetivos Futuros
                    Estou entusiasmado com a possibilidade de ingressar na área de programação e contribuir com meu conhecimento e experiência para novos projetos. Meu objetivo é continuar crescendo profissionalmente, enfrentando novos desafios e colaborando com equipes talentosas para criar soluções inovadoras e impactantes.
                </Typography>
            </Box>
        </>
    );
};

export default SlideAbout;
