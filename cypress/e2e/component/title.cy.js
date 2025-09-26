"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('Home', function () {
    it('Check title', function () {
        cy.visit('/');
        cy.get('h1').should('exist');
        cy.get('h1').should('contain.text', 'Gerenciador de tarefas');
    });
    it('Include new task and check ul list', function () {
        cy.visit('/');
        cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
        cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
        cy.get('button').should('contain.text', 'Adicionar').click();
        cy.get('li').should('have.length', 1);
        cy.get('li').should('contain.text', 'Estudar React');
    });
    it('Check task details', function () {
        cy.visit('/');
        cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
        cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
        cy.get('button').should('contain.text', 'Adicionar').click();
        cy.get('li').should('have.length', 1);
        cy.get('ul.space-y-4 > .flex > :nth-child(2)').click();
        cy.get('p').should('contain.text', 'Estudar os principais conceitos do React');
    });
    it('Delete task', function () {
        cy.visit('/');
        cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
        cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
        cy.get('button').should('contain.text', 'Adicionar').click();
        cy.get('li').should('have.length', 1);
        cy.get('li').should('contain.text', 'Estudar React');
        cy.get('ul.space-y-4 > .flex > :nth-child(3)').click();
        cy.get('li').should('have.length', 0);
    });
    it('Check tasks details and return to home', function () {
        cy.visit('/');
        cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
        cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
        cy.get('button').should('contain.text', 'Adicionar').click();
        cy.get('li').should('have.length', 1);
        cy.get('ul.space-y-4 > .flex > :nth-child(2)').click();
        cy.get('p').should('contain.text', 'Estudar os principais conceitos do React');
        cy.get('.absolute').click();
        cy.get('li').should('have.length', 1);
    });
    it('Verify content on local storage', function () {
        cy.visit('/');
        cy.get('input[placeholder="Nova tarefa"]').type('Estudar React{enter}');
        cy.get('input[placeholder="Nova descrição"]').type('Estudar os principais conceitos do React{enter}');
        cy.get('button').should('contain.text', 'Adicionar').click();
        cy.get('li').should('have.length', 1);
        cy.window().then(function (win) {
            var tasks = JSON.parse(win.localStorage.getItem('tasks') || '[]');
            expect(tasks).to.have.length(1);
            expect(tasks[0]).to.include({
                title: 'Estudar React',
                description: 'Estudar os principais conceitos do React'
            });
        });
    });
});
