// import moment from 'moment';
import { Link } from 'react-router-dom';

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
    dataIndex: 'id',
    key: 'id',
    render: (text, record) => (
      <Link to={`/ticket/${record?.id}`} key={record?.id}>
        détail
      </Link>
    ),
  },
];

export default columns;
