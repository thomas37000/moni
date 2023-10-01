const columnsMonthTotal = [
  {
    title: 'Mois',
    dataIndex: 'mois',
    key: 'mois',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (total) => <span>{total.toFixed(2)} €</span>,
  },
];

export default columnsMonthTotal;
