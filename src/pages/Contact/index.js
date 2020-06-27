import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import Layout from '../../components/Layout';

import ContactForm from '../../components/ContactForm';
import ContactMedia from '../../components/ContactMedia';
import SEO from '../../components/SEO';
import Map from '../../components/Map';

import {
  Container, MapContainer, WhereWeAre, FindUs,
} from './styles';

const Contact = () => (
  <>
    <SEO />
    <Layout>
      <Container>
        <ContactForm />

        <section>
          <WhereWeAre>
            <h3>Onde estamos!</h3>
            <MapContainer>
              <Map />
            </MapContainer>
          </WhereWeAre>
          <FindUs>
            <h1>Nos encontre nas redes sociais</h1>
            <ContactMedia colorTheme="#ccc" />

            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp color="#ccc" size={40} />

              <h3>
                Se preferir, clique aqui e envie uma mensagem pelo WhatsApp!
              </h3>
            </a>
          </FindUs>
        </section>
      </Container>
    </Layout>
  </>
);

export default Contact;
