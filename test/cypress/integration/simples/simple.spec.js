it('Should save user', () => {
    cy.visit('http://localhost:4000/register');
    cy.get('#email').type('correo')
    cy.get('#password').type('password')
    cy.get('#register').click()
    cy.wait(3000)
    cy.get('#msg').contains('SAVED')
})

it('Should invalid parameters', () => {
    cy.visit('http://localhost:4000/register');
    cy.get('#email').type('correo')
    cy.get('#password').type('ss')
    cy.get('#register').click()
    cy.wait(3000)
    cy.get('#msg').contains('INVALID')
})

it('Should required parameters', () => {
    cy.visit('http://localhost:4000/register');
    cy.get('#email').type('correo')
    cy.get('#register').click()
    cy.wait(3000)
    cy.get('#msg').contains('REQUIREDS')
})