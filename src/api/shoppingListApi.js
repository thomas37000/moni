const shoppingListApi = [
  {
    ticket: 1,
    date: '02/05/2023',
    supermarche: 'Lidleul',
    categories: [
      {
        id: 1,
        nom: 'Produits laitiers',
        ingredients: [
          {
            id: 1,
            nom: 'Lait',
            quantite: '1 litre',
            prix: 2.5,
          },
          {
            id: 2,
            nom: 'Fromage',
            quantite: '200 grammes',
            prix: 3.5,
          },
        ],
      },
      {
        id: 2,
        nom: 'Boulangerie',
        ingredients: [
          {
            id: 3,
            nom: 'Pain',
            quantite: '1 paquet',
            prix: 2.0,
          },
          {
            id: 4,
            nom: 'Croissants',
            quantite: '6',
            prix: 4.5,
          },
        ],
      },
      {
        id: 3,
        nom: 'Fruits et légumes',
        ingredients: [
          {
            id: 5,
            nom: 'Pommes',
            quantite: '1 kilogramme',
            prix: 3.0,
          },
          {
            id: 6,
            nom: 'Carottes',
            quantite: '500 grammes',
            prix: 1.5,
          },
        ],
      },
      {
        id: 4,
        nom: 'Alcools',
        ingredients: [
          {
            id: 7,
            nom: 'Château du Louis 14',
            quantite: '1',
            prix: 7.0,
          },
          {
            id: 7,
            nom: 'Côtes du Rhône',
            quantite: '1',
            prix: 9.0,
          },
          {
            id: 8,
            nom: 'Guyness',
            quantite: '2',
            prix: 4.0,
          },
        ],
      },
    ],
    prix_total: 27.0,
  },
  {
    ticket: 2,
    date: '15/05/2023',
    supermarche: 'CarreFourre',
    categories: [
      {
        id: 1,
        nom: 'Produits laitiers',
        ingredients: [
          {
            id: 1,
            nom: 'Lait',
            quantite: '1 litre',
            prix: 2.5,
          },
          {
            id: 2,
            nom: 'Fromage',
            quantite: '200 grammes',
            prix: 3.5,
          },
        ],
      },
      {
        id: 2,
        nom: 'Boulangerie',
        ingredients: [
          {
            id: 3,
            nom: 'Pain',
            quantite: '1 paquet',
            prix: 2.0,
          },
          {
            id: 4,
            nom: 'Croissants',
            quantite: '6',
            prix: 4.5,
          },
        ],
      },
      {
        id: 3,
        nom: 'Fruits et légumes',
        ingredients: [
          {
            id: 5,
            nom: 'Pommes',
            quantite: '1 kilogramme',
            prix: 3.0,
          },
          {
            id: 6,
            nom: 'Carottes',
            quantite: '500 grammes',
            prix: 1.5,
          },
        ],
      },
      {
        id: 4,
        nom: 'Alcools',
        ingredients: [
          {
            id: 7,
            nom: 'Kronenbeurg',
            quantite: '4',
            prix: 5.0,
          },
          {
            id: 8,
            nom: 'Beaujolais',
            quantite: '1',
            prix: 5.0,
          },
        ],
      },
    ],
    prix_total: 21.0,
  },
  {
    ticket: 3,
    date: '18/05/2023',
    supermarche: 'Monoprice',
    categories: [
      {
        id: 1,
        nom: 'Produits laitiers',
        ingredients: [
          {
            id: 1,
            nom: 'Lait',
            quantite: '1 litre',
            prix: 2.5,
          },
          {
            id: 2,
            nom: 'Fromage',
            quantite: '200 grammes',
            prix: 3.5,
          },
        ],
      },
      {
        id: 2,
        nom: 'Boulangerie',
        ingredients: [
          {
            id: 3,
            nom: 'Pain',
            quantite: '1 paquet',
            prix: 2.0,
          },
          {
            id: 4,
            nom: 'Croissants',
            quantite: '6',
            prix: 4.5,
          },
        ],
      },
      {
        id: 3,
        nom: 'Fruits et légumes',
        ingredients: [
          {
            id: 5,
            nom: 'Pommes',
            quantite: '1 kilogramme',
            prix: 3.0,
          },
          {
            id: 6,
            nom: 'Carottes',
            quantite: '500 grammes',
            prix: 1.5,
          },
        ],
      },
      {
        id: 4,
        nom: 'Alcools',
        ingredients: [
          {
            id: 7,
            nom: 'pack de 6 bières 1666',
            quantite: '6',
            prix: 4.5,
          },
          {
            id: 8,
            nom: 'Beaujolais nouveau 2023',
            quantite: '1',
            prix: 5.0,
          },
          {
            id: 9,
            nom: 'Champagne',
            quantite: '1',
            prix: 15.0,
          },
        ],
      },
    ],
    prix_total: 34.5,
  },
  {
    ticket: 4,
    date: '27/05/2023',
    supermarche: 'Super UH',
    categories: [
      {
        id: 1,
        nom: 'Produits laitiers',
        ingredients: [
          {
            id: 1,
            nom: 'Lait',
            quantite: '1 litre',
            prix: 2.5,
          },
          {
            id: 2,
            nom: 'Fromage',
            quantite: '200 grammes',
            prix: 3.5,
          },
        ],
      },
      {
        id: 2,
        nom: 'Boulangerie',
        ingredients: [
          {
            id: 3,
            nom: 'Pain',
            quantite: '1 paquet',
            prix: 2.0,
          },
          {
            id: 4,
            nom: 'Croissants',
            quantite: '6',
            prix: 4.5,
          },
        ],
      },
      {
        id: 3,
        nom: 'Fruits et légumes',
        ingredients: [
          {
            id: 5,
            nom: 'Pommes',
            quantite: '1 kilogramme',
            prix: 3.0,
          },
          {
            id: 6,
            nom: 'Carottes',
            quantite: '500 grammes',
            prix: 1.5,
          },
        ],
      },
      {
        id: 4,
        nom: 'Alcools',
        ingredients: [
          {
            id: 7,
            nom: 'pack de 6 bières Grimborguen',
            quantite: '6',
            prix: 6.5,
          },
          {
            id: 8,
            nom: 'vignes du Luberon',
            quantite: '1',
            prix: 8.0,
          },
          {
            id: 9,
            nom: 'Vodka',
            quantite: '1',
            prix: 10.0,
          },
        ],
      },
    ],
    prix_total: 43.5,
  },
];

export default shoppingListApi;
