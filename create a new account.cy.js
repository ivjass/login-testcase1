describe('Open New Account Test', () => {
  before(() => {
    cy.visit('https://parabank.parasoft.com/');
    cy.get('[name="username"]').type('jassmaan');
    cy.get('[name="password"]').type('12345678');
    cy.get('[value="Log In"]').click();
    cy.url().should('include', 'overview.htm');
  });

  it('Opens a new savings account', () => {
    cy.contains('Open New Account').click();
    cy.get('[data-testid="account-type-select"]').select('SAVINGS');
    cy.get('[value="OPEN NEW ACCOUNT"]').click();
    cy.contains('ACCOUNT OPENED!').should('be.visible');
  });
});
