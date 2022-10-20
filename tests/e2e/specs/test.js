// https://docs.cypress.io/api/table-of-contents

describe('Search Morty - All Status', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#search').type('Morty')
    cy.get('#status').type(' ')
  })
})

describe('Search Morty - Dead Status', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#search').type('Morty')
    cy.get('#status').type('Dead')
  })
})

describe('Search Morty - Alive Status', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#search').type('Morty')
    cy.get('#status').type('Alive')
  })
})
describe('Search Morty - Unknown Status', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#search').type('Morty')
    cy.get('#status').type('Unknown')
  })
})

describe('Search Rick - All Status', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#search').type('Rick')
    cy.get('#status').type(' ')
  })
})

describe('Search Rick - Dead Status', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#search').type('Rick')
    cy.get('#status').type('Dead')
  })
})

describe('Search Rick - Alive Status', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#search').type('Rick')
    cy.get('#status').type('Alive')
  })
})
describe('Search Rick - Unknown Status', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('#search').type('Rick')
    cy.get('#status').type('Unknown')
  })
})

