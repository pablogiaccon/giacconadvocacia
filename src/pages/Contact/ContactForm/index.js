import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import { Container, Title } from './styles';

const ContactForm = () => {
  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Informe seu nome'),
        lastName: Yup.string().required('Informe seu último nome.'),
        email: Yup.string().email('E-mail inválido.').required('Informe seu e-mail.'),
        fone: Yup.string().min(9, 'Informe um número válido.').max(12, 'Máximo de 12 números'),
        text: Yup.string().required('Informe a sua mensagem.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);
      }
    }
  }, []);

  return (
    <Container>
      <Title>
        CONTATO
        <div />
      </Title>

      <Form onSubmit={handleSubmit}>
        <div className="inputgroup">
          <Input name="name" type="text" placeholder="Nome *" />
          <Input name="lastName" type="text" placeholder="Sobrenome *" />
        </div>
        <div className="inputgroup">
          <Input name="email" type="email" placeholder="E-mail *" />
          <Input name="fone" type="number" placeholder="(00) 9 0000-0000 *" />
        </div>
        <Textarea name="text" placeholder="Digite sua mensagem aqui... *" />

        <button type="submit">ENVIAR</button>
      </Form>
    </Container>
  );
};
export default ContactForm;
