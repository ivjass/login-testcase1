describe('Register and Login Test', () => {
    it('Registers a new user and logs in', () => {
      cy.visit('https://parabank.parasoft.com/');
      cy.contains('Register').click();
      cy.get('[name="customer.firstName"]').type('Jasdeep');
      cy.get('[name="customer.lastName"]').type('Singh');
      cy.get('[name="customer.address.street"]').type('123 St. Catherine Street');
      cy.get('[name="customer.address.city"]').type('Montreal');
      cy.get('[name="customer.address.state"]').type('NY');
      cy.get('[name="customer.address.zipCode"]').type('10001');
      cy.get('[name="customer.phoneNumber"]').type('1234567890');
      cy.get('[name="customer.ssn"]').type('123456789');
      cy.get('[name="customer.username"]').type('jassmaan');
      cy.get('[name="customer.password"]').type('12345678');
      cy.get('[name="repeatedPassword"]').type('12345678');
      cy.get('[value="Register"]').click();
      cy.wait(4000);
      cy.contains('Log Out').click();
      cy.get('[name="username"]:visible').type('jassmaan');
      cy.get('[name="password"]:visible').type('12345678');
      cy.get('[value="Log In"]').click();
      cy.url().should('include', 'overview.htm');
      cy.contains('Welcome Jasdeep Singh').should('be.visible');
    });
  });
  
