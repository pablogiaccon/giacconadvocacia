import React from 'react';

import {
  Container,
  AboutOffice,
  OccupationText,
  OccupationItem,
} from './styles';

import Layout from '../../components/Layout';

import Img1 from '../../assets/OccupationArea1.svg';
import Img2 from '../../assets/OccupationArea2.svg';
import Img3 from '../../assets/OccupationArea3.svg';
import Img4 from '../../assets/OccupationArea4.svg';
import Img5 from '../../assets/OccupationArea5.svg';
import Img6 from '../../assets/OccupationArea6.svg';

const OccupationArea = () => (
  <Layout>
    <Container>

      <AboutOffice>
        <img src={Img1} alt="Office" />
        <p>
          Nosso escritório atua com exclusividade para o setor imobiliário. Em
          um mercado saturado de advogados generalistas, atuantes em todas as
          areas do direito, seja do ramo do direito privado ou público, nosso
          escritório oferece a prestação de serviços especializada. Acompanhamos
          as variações do mercado imobiliário, lançamentos, escrituras,
          registros, legislação e, ainda, as decisoes recentes dos tribunais
          superiores, com o fim exclusivo de auxiliar nossos clientes a
          solucionar e previner eventuais impasses de forma extratégica e
          benéfica. Além do disposto, nosso escritório tem como princípio inovar
          com frequencia a prestação dos serviços, buscando especialização nos
          mais diversos ramos do direito imobiliário, tudo com o intento de
          melhor atende-lo. O escritório oferta o atendimento online e
          presencial, sendo facultado aos clientes a modalidade que lhes serão
          ofertada.
        </p>
      </AboutOffice>

      <OccupationText>
        <div />
        <p>
          Conforme dito alhures, nosso escritório é especializado na prestação
          de serviços para o mercado imobiliário, todavia, atua principalmente
          com:
        </p>
        <div className="secundLine" />
      </OccupationText>

      <OccupationItem>
        <img src={Img2} alt="Contratos" />

        <p>
          <strong>CONTRATOS:</strong>
          {' '}
          o escritório possui uma ampla experiência
          no fornecimento de serviços relativos a elaboração de contratos de
          locação compra e venda, permuta, doação e compromisso de compra e
          venda. Sabemos que grande parte das pessoas não destinam a atenção
          devida aos presentes contratos, firmando a negociação juridica com
          simples modelo encontrado ao navegar pela internet. Porem, nossa
          experiencia e as jurisprudencias reiteradas dos tribunais superiores
          demonstram que a elaboração destes contratos devem ser firmadas com a
          devida cautela e atenção ao disposto na legislação, bem como no
          entendimento do tribunal de cada estado, com o fim de evitar eventuais
          empasses futuros.
        </p>
      </OccupationItem>

      <OccupationItem>
        <img src={Img3} alt="Incorporações Imobiliárias" />

        <p>
          <strong>INCORPORAÇÕES IMOBILIÁRIAS:</strong>
          {' '}
          o escritório oferece
          todos os serviços necessários do inicio ao fim da incorporação.
          Ofertamos a análise de risco da compra do imóvel, soluções
          tributárias, regularização da matrícula, elaboração do memorial de
          incorporação, convenção, discriminação das frações ideais do terreno,
          avaliação do custo global da obra, além de todos os documentos
          elencados no rol do artigo 32 da lei 4.591/1964.
        </p>
      </OccupationItem>

      <OccupationItem>
        <img src={Img4} alt="Contruções" />

        <p>
          <strong>CONTRUÇÕES:</strong>
          {' '}
          nosso escritório além de atuar na fase da
          incorporação imobiliária oferece todos os serviços necessários
          relativos ao principio e fim da construção. Ofertamos serviços
          preventivos com o fim de dissipar eventuais danos futuros. Procedemos
          a elaboração dos contratos necessários, avaliamos a viabiliadade
          juridica da obra, registramos as exigencias legais entre outros
          serviços necessários.
        </p>
      </OccupationItem>

      <OccupationItem>
        <img src={Img5} alt="Contromínios" />

        <p>
          <strong>CONDOMÍNIOS:</strong>
          {' '}
          nosso escritório oferta a prestação de
          serviços consultiva e judicial aos condomínios. Orientamos
          preventivamente os sindicos (as), conselhoreiros de administradores e
          funcionários. Elaborados notificações, convenções e regimentos
          internos. Presidimos assembléias de instalação, ordinárias e
          extraordinárias. Além disso, ofertamos a resolução das mais diversas
          questões divertentes entre os sindicos e moradores. Procedemos o
          acompanhamento de reuniões, ajuizamos e defendemos ações judiciais
          relativas a inadimplemento, arrependimento, rescisão contratual,
          despejo por falta de pagamento de áreas pertencentes ao condomínio,
          execuções de aluguéis, ações revisionais, entre outras.
        </p>
      </OccupationItem>

      <OccupationItem>
        <img src={Img6} alt="Duo Diligence" />

        <p>
          <strong>DUO DILIGENCE:</strong>
          {' '}
          ofertamos ainda serviços de due
          diligence imobiliária, realizando auditoria, analise preventiva,
          avaliação de documentos necessários, transações que objetivam a compra
          e venda, permuta, doação e locação de imóveis, buscamos todos os
          documentos neccessários junto as serventias de nossa comarca e região,
          dentre outros serviços que forem previamente solicitados.
        </p>
      </OccupationItem>
    </Container>
  </Layout>
);

export default OccupationArea;
