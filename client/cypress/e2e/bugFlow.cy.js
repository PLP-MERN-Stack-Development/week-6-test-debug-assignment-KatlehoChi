describe('Bug Tracker Flow', () => {
  it('creates a bug', () => {
    cy.visit('/');
    cy.get('input').type('New Bug');
    cy.get('button').click();
    cy.contains('New Bug');
  });
});