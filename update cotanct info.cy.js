describe('Update Contact Info Test', () => {
    before(() => {
      cy.visit('https://parabank.parasoft.com/');
      cy.get('[name="username"]').type('jass1');
      cy.get('[name="password"]').type('jass');
      cy.get('[value="Log In"]').click();
      cy.url().should('include', 'overview.htm');
    });
  
    it('Updates contact info and verifies profile update', () => {
      cy.contains('Update Contact Info').click();
      // Fill in the updated contact details (specifically Phone #) in the Update Profile section
      cy.get('[name="phoneArea"]').clear().type('555');
      cy.get('[name="phoneNumber"]').clear().type('1234567');
      cy.get('[value="Update Profile"]').click();
      cy.contains('Profile Updated Successfully').should('be.visible');
      cy.contains('Update Contact Info').click();
      cy.get('[name="phoneArea"]').should('have.value', '555');
      cy.get('[name="phoneNumber"]').should('have.value', '1234567');
    });
  });
  
  