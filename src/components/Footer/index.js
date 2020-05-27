import React from 'react';

import config from '../../../config/metadata';

import ContactMedia from '../ContactMedia';

import { Container } from './styles';

const Footer = () => (

  <Container>
    <div className="content">
      <div className="address">
        <span className="title">{config.title}</span>
        <span className="addressOffice">{config.address}</span>
      </div>
      <div className="contact">
        <span className="contactMedia">
          <ContactMedia colorTheme="#ccc" />
        </span>
        <span>{config.mail}</span>
        <span>{config.contacts[0].contact}</span>
        <span>{config.contacts[1].contact}</span>
      </div>
    </div>
  </Container>
);

export default Footer;
