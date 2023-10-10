describe('Ticket Detail Page', () => {
  beforeEach(() => {
    cy.visit('/courses/liste-des-courses');
  });

  it('should visit the Ticket Detail page on click on Link détail', () => {
    // comportement utilisateur, il arrive sur la page puis clique sur détail
    cy.wait(2000);

    cy.get('table')
      .find('tr')
      .eq(1) // Sélectionne le 2ème <tr> (l'index commence à 0)
      // optionnel
      .find('td') // Sélectionne les cellules <td> dans le 2ème <tr>
      .contains('détail')
      .click();

    // test sur un ticket
    cy.url().should('include', '/ticket/2cb115c8-e6a2-49e7-8086-ce1c1436f7d8');
  });
});
