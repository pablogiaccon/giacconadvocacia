import React, { useState, useEffect } from 'react';

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

import config from '../../../config/metadata';


import { Container } from './styles';

const ContactMedia = ({ colorTheme }) => {
  const [color, setColor] = useState('#414141');

  useEffect(() => {
    if (colorTheme) {
      setColor(colorTheme);
    }
  }, [colorTheme]);
  return (
    <Container>
      <a href={config.social[0].url} target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color={color} />
      </a>
      <a href={config.social[1].url} target="_blank" rel="noopener noreferrer">
        <FaFacebookF size={30} color={color} />
      </a>
      <a href={config.social[2].url} target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn size={30} color={color} />
      </a>
      <a href={config.social[3].url} target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} color={color} />
      </a>

    </Container>

  );
};

export default ContactMedia;
