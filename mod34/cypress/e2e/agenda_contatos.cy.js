describe('Testes da Agenda de Contatos', () => {
  const url = 'https://agenda-contatos-react.vercel.app/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('Deve adicionar um contato', () => {
    cy.get('input[placeholder="Nome"]').type('Maria Silva');
    cy.get('input[placeholder="E-mail"]').type('maria@email.com');
    cy.get('input[placeholder="Telefone"]').type('11999999999');
    cy.contains('button', /adicionar|salvar/i).click();
    cy.contains('Maria Silva').should('exist');
  });

  it('Deve editar um contato', () => {
    cy.contains('Maria Silva')
      .parents('.contato') // sobe até o div com a classe "contato"
      .find('button.edit') // encontra o botão de editar dentro desse bloco
      .click();

    cy.get('input[placeholder="Nome"]').clear().type('Maria Silva Editada');
    cy.get('input[placeholder="E-mail"]').clear().type('mariaeditada@email.com');
    cy.get('input[placeholder="Telefone"]').clear().type('11888888888');
    cy.contains('button', /salvar|adicionar/i).click();

    cy.contains('Maria Silva Editada').should('exist');
  });

  it('Deve remover um contato', () => {
    cy.contains('Maria Silva Editada')
      .parents('.contato') // sobe até o bloco do contato
      .find('button.delete') // clica no botão de deletar
      .click();

    cy.contains('Maria Silva Editada').should('not.exist');
  });
});

