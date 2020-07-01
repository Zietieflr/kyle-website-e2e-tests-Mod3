describe('kylecoberly.com', () => {
  it('works', () => {
    expect(true).to.equal(true)
  })
})

describe('kylecoberly.com', () => {
  beforeEach(() => {
    cy.visit('https://kylecoberly.com')
  })
  it('has Kyle Coberly in the header', () => {
    cy.get('h1').should('have.text', 'Kyle Coberly')
    cy.get('h1').contains('Kyle Coberly')
    cy.contains('Kyle').should('have.length', 1)
  })
  it('has 3 navigation links', () => {
    // cy.get('nav li').should('have.length', 3)
    // if you are hyper specific you can do some future proofing 
    cy.get('#home header nav a').should('have.length', 3)
    // cy.get('h1').should('not.have.text', 'Kyle Coberly')
  })
  it('submits contact information', () => {
    cy.get('#contact-form').as('form')
    cy.get('@form').find('[name=email]').type('lrmcguire93@gmail.com')
    cy.get('@form').find('[name=message]').type('Here is a message for you.')
    // cy.get('@form').find('[type=submit]').click()
  })
})