// import { supabase } from '../../src/api/supabase';

// describe('CurrentMonth.cy.jsx', () => {
//   it('should fetch data for the current month', () => {
//     const apiUrl = `${supabase}`;

//     cy.request({
//       method: 'GET',
//       url: apiUrl,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//     });
//   });
// });

import ShoppingList from '../../src/components/ShoppingList';

it('contains 2 tickets', () => {
  const tickets = [
    {
      adresse: 'ront point de Vannes',
      departement: 44100,
      nom_magasin: 'Carrefour Market',
      nombre_articles: 18,
      total: 48.27,
      ville: 'Nantes',
      created_at: '2023-10-04T11:07:52+00:00',
      id: '16e03ec5-02b9-415f-8c57-9227657af3c7',
    },
    {
      adresse: '2 rue du Calvaire',
      departement: 44000,
      nom_magasin: 'Monoprix',
      nombre_articles: 6,
      total: 18.1,
      ville: 'Nantes',
      created_at: '2023-10-06T15:11:58+00:00',
      id: '2cb115c8-e6a2-49e7-8086-ce1c1436f7d8',
    },
  ];

  cy.mount(<ShoppingList tickets={tickets} />); // Utilisez mount pour monter le composant

  // Utilisez le sélecteur CSS pour sélectionner les éléments de ticket
  cy.get('.ticket').should('have.length', tickets.length);
});
