const columnsDetail = [
    {
      title: 'Supermarché',
      dataIndex: 'supermarche',
      key: 'supermarche',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Total',
      dataIndex: 'prix_total',
      key: 'prix_total',
      render: (prix) => <span>{prix} €</span>,
    },
    {
      title: 'Catégorie',
      dataIndex: 'categorie',
      key: 'categorie',
      render: (text, record) => (
        <ul>
          {record.categories.map((category) => (
            <li key={category.id}>
              <h4>{category.nom}</h4>
              <ul>
                {category.ingredients.map((ingredient) => (
                  <li key={ingredient.id}>
                    {ingredient.nom} - {ingredient.quantite} - {ingredient.prix} €
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ),
    },
  ];
  
  export default columnsDetail;
  