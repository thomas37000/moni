describe('404 Page', () => {
  it('should visit the 404 page and redirect to the dashboard page', () => {
    cy.visit('http://localhost:5173/*');

    cy.wait(2000);
    cy.contains('Accueil').click();

    cy.url().should('include', '/dashboard');
  });
});
