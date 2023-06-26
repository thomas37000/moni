import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';


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
    render: (created_at) => format(new Date(created_at), 'dd MMMM yyyy', { locale: fr }),
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
