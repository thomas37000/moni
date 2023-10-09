describe('Ticket Detail Page', () => {
  it('should visit the Ticket Detail page on click on Link détail', () => {
    // Vérifiez que la page contient le link "détail"
    cy.visit('http://localhost:5173/courses/liste-des-courses');

    cy.contains('détail').click();

    // test sur un ticket
    cy.url().should('include', '/ticket/2cb115c8-e6a2-49e7-8086-ce1c1436f7d8');
  });
});
