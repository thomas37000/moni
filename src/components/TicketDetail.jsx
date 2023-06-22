import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card, List, Typography } from 'antd';
import { supabase } from '../api/supabase';
import './ShoppingList.css';

const { Text, Title } = Typography;

const TicketDetail = () => {
  const { id } = useParams();

  const [ticketDetail, setTicketDetail] = useState(null);
 // console.log('ticketDetail', ticketDetail);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTicketDetail();
  }, [id]);

  async function getTicketDetail() {
    try {
      const { data, error } = await supabase
        .from('shopping_list')
        .select('*, boucherie_traiteur(*)')
        .eq('id', id)
        .single();

      // .eq() méthode de filtrage dans Supabase Query Builder
      // .single() méthode de Supabase qui est utilisée pour exécuter une requête SQL et récupérer un seul résultat.

      if (error) {
        console.error(error);
        setError(error);
      } else {
        setTicketDetail(data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  }

  if (loading) return <p>Loading ...</p>;
  if (error !== null) return <p>Problème avec l`&apos;`Api...</p>;

  return (
    <div className="table-wrapper">
      <Title level={3} type="secondary">
        Ticket détaillé
      </Title>

      <List
        dataSource={[ticketDetail]}
        renderItem={(detail) => (
          <List.Item>
            <Card title={detail.nom_magasin}>
              <Text type="secondary">
                {detail.adresse} - {detail.ville} - {detail.departement}
              </Text>
              <div>{detail.created_at}</div>

              {detail.boucherie_traiteur.map((item) => (
                <div key={item.id}>
                  {item.item_name} - {item.total} €
                </div>
              ))}
              <div>
                Total: <Text strong>{detail.total} €</Text>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TicketDetail;
