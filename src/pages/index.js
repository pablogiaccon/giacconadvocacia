import React from 'react';
import { navigate } from 'gatsby';
import { AiOutlineEye, AiOutlineStar } from 'react-icons/ai';
import { GiTargetArrows } from 'react-icons/gi';

import Layout from '../components/Layout';
import LastPost from '../components/Posts/LastPosts';
import ContactForm from '../components/ContactForm';

import ImgPrincipal from '../assets/imgHomePrincipal.jpg';
import ImgSecund from '../assets/city.jpg';
import ImgShirley from '../assets/fotoHome.jpg';

import { Container } from './styles';

export default function Home() {
  return (
    <Layout>
      <Container>

        <section className="imageFirst">
          <img src={ImgPrincipal} alt="Buildings" width="100%" />
        </section>

        <section className="aboutMe">
          <div className="description">
            <span className="title">SHIRLEY CAROLINA GIACCON</span>
            <span className="text">
              Me faltam palavras para expressar todo sentimento que me toma neste
              momento! Finalmente, após cinco anos de muito luta, garra e
              determinação, me tornei advogada, devidamente inscrita na Ordem dos
              Advogados do Brasil!
              <br />
              <br />
              Melhor colocação que o termo de compromisso não há, para expressar a
              beleza desta profissão, desta forma, o transcrevo
            </span>
            <button type="button" onClick={() => navigate('Contact')}>Fale Comigo</button>
          </div>
          <section className="imgDescription">
            <img src={ImgShirley} alt="Shirley Carolina Giaccon" width="80%" />
          </section>
        </section>

        <section className="imageSecond">
          <span className="backgroudImage">
            <img src={ImgSecund} alt="City" />
          </span>
        </section>

        <section className="mission">
          <span className="one">
            <GiTargetArrows className="icons" size={140} color="#ccc" />
            <p className="title">Missão</p>
            <p>
              Trazer soluções a problemas ainda não solucionados, criar vinculos com
              nossos clientes, fornecendo apoio na realização de seus negócios
              materiais e particulares, prestando a advocacia com a máxima ética,
              responsabilidade e excelência.
            </p>
            <span className="line">
              <div className="linee" />
            </span>
          </span>

          <span className="two">
            <AiOutlineEye className="icons" size={140} color="#ccc" />
            <p className="title">Visão</p>
            <p>
              Tornar referência na advocacia humanizada, consensual e extrajudicial,
              desempenhando o trabalho por meio do Home Office e o atendimento olho
              no olho.
            </p>
            <span className="line">
              <div className="linee" />
            </span>
          </span>

          <span className="three">
            <AiOutlineStar className="icons" size={140} color="#ccc" />
            <p className="title">Valores</p>
            <p>
              Exercer a advocacia com base na ética, responsabilidade, integridade,
              paixão, compromisso, qualidade, empatia e por último, porem não menos
              importante, em memória aos meus pais.
            </p>
            <span className="line">
              <div className="linee" />
            </span>
          </span>
        </section>

        <LastPost />

        <ContactForm />

      </Container>
    </Layout>
  );
}
