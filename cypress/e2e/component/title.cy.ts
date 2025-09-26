import { i } from "vite/dist/node/types.d-aGj9QkWt";

describe('Home', () => { 
 
  it('Check title', () => {
    cy.visit('/');
    cy.get('h1').should('exist');
    cy.get('h1').should('contain.text','Gerenciador de tarefas');    
  });

  it('Include new task and check ul list', () => {
    cy.visit('/');
    cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
    cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
    cy.get('button').should('contain.text','Adicionar').click();
    cy.get('li').should('have.length',1);
    cy.get('li').should('contain.text','Estudar React');
  });

  it('Check task details', () => {
    cy.visit('/');
    cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
    cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
    cy.get('button').should('contain.text','Adicionar').click();
    cy.get('li').should('have.length',1);
    cy.get('ul.space-y-4 > .flex > :nth-child(2)').click();
    cy.get('p').should('contain.text','Estudar os principais conceitos do React');
  });

  it('Delete task', () => {
    cy.visit('/');
    cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
    cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
    cy.get('button').should('contain.text','Adicionar').click();
    cy.get('li').should('have.length',1);
    cy.get('li').should('contain.text','Estudar React');
    cy.get('ul.space-y-4 > .flex > :nth-child(3)').click();
    cy.get('li').should('have.length',0);
  });

  it('Check tasks details and return to home', () => {  
    cy.visit('/');
    cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
    cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
    cy.get('button').should('contain.text','Adicionar').click();
    cy.get('li').should('have.length',1);
    cy.get('ul.space-y-4 > .flex > :nth-child(2)').click();
    cy.get('p').should('contain.text','Estudar os principais conceitos do React');
    cy.get('.absolute').click();
    cy.get('li').should('have.length',1);
  });

  it('Verify content on local storage', () => {  
    cy.visit('/');
    cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
    cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
    cy.get('button').should('contain.text','Adicionar').click();
    cy.get('li').should('have.length',1);
    cy.window().then((win) => {
      const tasks = JSON.parse(win.localStorage.getItem('tasks') || '[]');
      expect(tasks).to.have.length(1);
      expect(tasks[0]).to.include({
        title: 'Estudar React',
        description: 'Estudar os principais conceitos do React'
      });
    });
  }); 
})