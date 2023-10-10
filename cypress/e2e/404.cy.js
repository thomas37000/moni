describe('404 Page', () => {
  beforeEach(() => {
    cy.visit('/*');
  });
  
  it('should visit the 404 page and redirect to the dashboard page', () => {
    cy.wait(2000);
    cy.contains('Accueil').click();

    cy.url().should('include', '/dashboard');
  });
});
