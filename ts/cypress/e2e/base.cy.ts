describe('Testes da página SLACA 2019', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('Verifica se o título do trabalho existe e é correto', () => {
    cy.get('.topico .elementos_topico').contains('Anais do Simpósio Latino Americano de Ciências de Alimentos');
    cy.get('.topico .elementos_topico').contains('Anais do 13º Simpósio Latino Americano de Ciência de Alimentos');
    cy.get('.topico .elementos_topico').contains('ISSN: 1234-5678');
  });

  it('Verifica se o botão de expandir resumo existe e contém o texto correto', () => {
    cy.get('.btn-show-more').contains('ver mais');
  });

  it('Verifica se o botão de criar tópico existe e contém o texto correto', () => {
    cy.get('.btn-create-topic').contains('criar tópico');
  });

  it('Verifica se é possível expandir um tópico', () => {
    cy.get('.answered-topic .ops-topic-subject').click();
    cy.get('.comments-container').should('exist');
  });

  it('Verifica se ao clicar em `criar tópico` exibe o formulário corretamente', () => {
    cy.get('.btn-create-topic').click();
    cy.get('button').contains('Enviar');
    cy.get('form').contains('Assunto');
    cy.get('form').contains('Conteúdo');
    cy.get('input.subject').should('have.attr', 'placeholder', 'Defina um tópico sucinto para notificar os autores...');
  });

  it('Verifica se é possível enviar o formulário e exibir mensagem de sucesso', () => {
    cy.get('.btn-create-topic').click();
    cy.get('button').click();
    cy.contains('Aguardando feedback dos autores');
  });

});
