import React from 'react';

import Layout from '../../components/Layout';

import Img from '../../assets/about-me.jpg';

import {
  Container, Description, Title, Text,
} from './styles';

const About = () => (
  <Layout>

    <Container>
      <Description>
        <Title>SHIRLEY CAROLINA GIACCON</Title>
        <Text>
          Já percebeu que muitas pessoas vem ao seu encontro e lhe passa
          diversos conselhos pedindo para fazer algo ou, dizendo para não
          fazer porque não é o momento certo? . Comigo já aconteceu várias
          vezes. Ainda quando menina sonhava em fazer um intercâmbio nos EUA
          com o fim de aprender inglês, muitos me disseram que não era o
          momento certo. Eu simplesmente desisti de tudo, sem lutar. . Passado
          algum tempo me surgiu o mesmo desejo. Desta vez de fazer algo mais
          rápido para não atrapalhar a faculdade. Novamente, muitos me
          disseram que não era o tempo certo. Para minha sorte, não me
          importei, arrumei as minhas malas e parti para a Colômbia. Passei 45
          dias em Bogotá, sozinha. Foi minha primeira experiência de viajar de
          avião e também de viajar sozinha. . POSSO DIZER UMA COISA? Foi
          sensacional. A melhor experiência de minha vida. E se eu não tivesse
          ido por ter acreditado que não era o tempo? Por certo não teria
          tantas histórias e experiências para compartilhar. . O que quero
          dizer com isso é que se formos parar para pensar, ninguém sabe a
          hora certa de nada. Jamais estaremos 100% prontos para fazer nada em
          nossa vida. . Por este motivo acredito que se temos vontade de fazer
          algo, devemos analisar somente as circunstâncias, se for possível,
          apenas faça. Você somente irá saber se é o momento certo se tentar.
          . Pra tudo tem uma primeira vez, um começo. Não deixe apagarem seus
          sonhos. Escreva sua própria história. Seja a protagonista da sua
          vida. . ATENÇÃO: isso não significa que devemos fazer tudo que vem a
          cabeça. Planejamento e cuidado é tudo.
        </Text>
      </Description>
      <img src={Img} alt="Shirley Carolina Giaccon" />
    </Container>
  </Layout>
);

export default About;
