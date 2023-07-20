describe('Transfer Funds Test', () => {
    before(() => {
      cy.visit('https://parabank.parasoft.com/');
      cy.get('[name="username"]').type('jassmaan');
      cy.get('[name="password"]').type('12345678');
      cy.get('[value="Log In"]').click();
      cy.url().should('include', 'overview.htm');
    });
  
    it('Completes transfer of funds', () => {
      cy.contains('Transfer Funds').click();
      cy.wait(2000);
      cy.contains('Amount').next().type('100');
      cy.get('[value="Transfer"]').click();
      cy.contains('Transfer Complete!').should('be.visible');
    });
  });
  