// import moment from 'moment';

const columns = [
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
    title: 'Ticket',
    dataIndex: 'uuid',
    key: 'uuid',
    render: () => (
      <a href="#" style={{ color: '#1E90FF' }}>
        détail
      </a>
    ),
  },
];

export default columns;
