const columnsDetail = [
  {
    title: 'Supermarché',
    dataIndex: 'nom_magasin',
    key: 'nom_magasin',
  },
  {
    title: 'Date',
    dataIndex: 'created_at',
    key: 'created_at',
    // render: (date) => (
    //   <span>
    //     {moment(date.created_at, 'YYYY-MM-DDTHH:mm:ssZ').format(
    //       'DD/MM/YYYY'
    //     )}
    //   </span>
    // ),
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (prix) => <span>{prix} €</span>,
  },
  {
    title: 'Ville',
    dataIndex: 'ville',
    key: 'ville',
  },
  {
    title: 'Adresse',
    dataIndex: 'adresse',
    key: 'adresse',
  },
  {
    title: 'Département',
    dataIndex: 'departement',
    key: 'departement',
  },
  // {
  //   title: 'Catégorie',
  //   dataIndex: 'categorie',
  //   key: 'categorie',
  //   render: (text, record) => (
  //     <ul>
  //       {record.categories.map((category) => (
  //         <li key={category.id}>
  //           <h4>{category.nom}</h4>
  //           <ul>
  //             {category.ingredients.map((ingredient) => (
  //               <li key={ingredient.id}>
  //                 {ingredient.nom} - {ingredient.quantite} - {ingredient.prix} €
  //               </li>
  //             ))}
  //           </ul>
  //         </li>
  //       ))}
  //     </ul>
  //   ),
  // },
];

export default columnsDetail;
