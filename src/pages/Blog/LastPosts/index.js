import React from 'react';

import { Container, PostContainer, Title } from './styles';

import Img1 from '../../../assets/post1.svg';
import Img2 from '../../../assets/post2.svg';
import Img3 from '../../../assets/post3.svg';
import Img4 from '../../../assets/post4.svg';

const LastPosts = () => (
  <Container>
    <Title>
      ÚLTIMAS POSTAGENS
      <div />
    </Title>
    <PostContainer>
      <div className="content">
        <img src={Img1} alt="Post 1" width="100%" />
        <div className="description">
          <p className="title">“Salve o que é seu”</p>
          <p className="text">
            Você sabia que até 45% dos seus gastos operacionais poderiam ser
            evitados? Um estudo da Universidade de São Paulo avaliou o
            balancete de 124 construtoras e descobriu falhas incomuns.
          </p>
        </div>
      </div>
      <button type="button">Saiba mais</button>
    </PostContainer>

    <PostContainer>
      <div className="content">
        <img src={Img2} alt="Post 1" />
        <div className="description">
          <p className="title">“Como síndico, você precisa entender isso”</p>
          <p className="text">
            Sempre que está diante de alguém, suas pernas tremem e sente um
            desconforto? Você sabia que existem técnicas para que isso não
            seja um problema.
          </p>
        </div>
      </div>
      <button type="button">Saiba mais</button>
    </PostContainer>

    <PostContainer>
      <div className="content">
        <img src={Img3} alt="Post 1" />
        <div className="description">
          <p className="title">
            “Saiba lidar com problemas entre os condôminos”
          </p>
          <p className="text">
            Você como síndico precisa estar ciente de todos os problemas entre
            os condôminos, e ter nas mãos respostas e estratégias para as mais
            variadas situações. Resolva tudo com algumas respostas chaves para
            as mais diversas situações.
          </p>
        </div>
      </div>
      <button type="button">Saiba mais</button>
    </PostContainer>

    <PostContainer>
      <div className="content">
        <img src={Img4} alt="Post 1" />
        <div className="description">
          <p className="title">
            “Tenha controle no seu corpo administrativo”
          </p>
          <p className="text">
            Uma equipe bem preparada consegue lidar com mais facilidade os
            eventos inesperados. Mas como saber se sua equipe possui
            habilidades suficientes para isso? Analise cada membro em 10
            estapas.
          </p>
        </div>
      </div>
      <button type="button">Saiba mais</button>
    </PostContainer>
  </Container>
);

export default LastPosts;
