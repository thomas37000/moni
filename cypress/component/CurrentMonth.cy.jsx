import { supabase } from '../../src/api/supabase';

describe('CurrentMonth.cy.jsx', () => {
  it('should fetch data for the current month', () => {
    const apiUrl = `${supabase}`;

    cy.request({
      method: 'GET',
      url: apiUrl,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
