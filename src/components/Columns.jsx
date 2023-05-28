const columns = [
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
    title: 'Ticket',
    dataIndex: 'ticket',
    key: 'ticket',
    // render: (detail) => <span>{detail} €</span>,
  },
];

export default columns;
