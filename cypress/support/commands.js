// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click();
    cy.get('#mail').type(email);
    cy.get('#pass').type(password);
    cy.contains('Submit').click();
})

Cypress.Commands.add('createBook', (title, description, author, favorite = false) => {
    cy.contains('Add new').click();
    cy.get('[name="title"]').type(title);
    cy.get('#description').type(description);
    cy.get('[name="authors"]').type(author);
    if (favorite) {
        cy.get('[name="favorite"]').check();
    }
    cy.get('button.ml-2.btn-success').click();
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })