import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, editContact } from './redux/contactsSlice';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  background: #fff0f6;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0 10px pink;
  font-family: 'Open Sans', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #ff69b4;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ffb6c1;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #ff85c1;
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  background: #ffd6e8;
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const SmallButton = styled.button`
  background: #ff85c1;
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:hover {
    background: #ffaad3;
  }
`;

function App() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [editId, setEditId] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return alert('Preencha todos os campos');

    if (editId) {
      dispatch(editContact({ id: editId, data: form }));
      setEditId(null);
    } else {
      dispatch(addContact({ ...form, id: uuidv4() }));
    }
    setForm({ name: '', email: '', phone: '' });
  };

  const handleEdit = contact => {
    setForm({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
    setEditId(contact.id);
  };

  const handleRemove = id => {
    dispatch(removeContact(id));
  };

  return (
    <Container>
      <Title>Lista de Contatos</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Nome Completo"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          name="phone"
          placeholder="Telefone"
          value={form.phone}
          onChange={handleChange}
        />
        <Button type="submit">{editId ? 'Editar Contato' : 'Adicionar Contato'}</Button>
      </Form>

      <ContactList>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            <ContactInfo>
              <strong>{contact.name}</strong><br />
              {contact.email} <br />
              {contact.phone}
            </ContactInfo>
            <ActionButtons>
              <SmallButton onClick={() => handleEdit(contact)}>Editar</SmallButton>
              <SmallButton onClick={() => handleRemove(contact.id)}>Remover</SmallButton>
            </ActionButtons>
          </ContactItem>
        ))}
      </ContactList>
    </Container>
  );
}

export default App;
