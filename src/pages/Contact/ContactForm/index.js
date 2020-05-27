import React from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../../components/Input';

import { Container, Title } from './styles';

const ContactForm = () => (
  <Container>
    <Title>
      CONTATO
      <div />
    </Title>

    <Form onSubmit={() => {}}>
      <div className="inputgroup">
        <Input name="name" type="text" placeholder="Nome *" />
        <Input name="lastName" type="text" placeholder="Sobrenome *" />
      </div>
      <div className="inputgroup">
        <Input name="email" type="email" placeholder="E-mail *" />
        <Input name="fone" type="text" placeholder="(00) 9 0000-0000 *" />
      </div>
      <textarea placeholder="Digite sua mensagem aqui... *" />

      <button type="submit">ENVIAR</button>
    </Form>
  </Container>
);

export default ContactForm;
