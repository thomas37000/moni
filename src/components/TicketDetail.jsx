import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Card, Divider, List, Typography } from 'antd';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { supabase } from '../api/supabase';
import './ShoppingList.css';

const { Text, Title } = Typography;

const TicketDetail = () => {
  const { id } = useParams();

  const [ticketDetail, setTicketDetail] = useState(null);
  console.log('ticketDetail', ticketDetail);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTicketDetail();
  }, [id]);

  async function getTicketDetail() {
    try {
      const { data, error } = await supabase
        .from('shopping_list')
        .select(
          `*,
          alcools(*), 
          boucherie_traiteur(*), 
          epicerie_boissons(*), 
          fruits_legumes(*), 
          hygiene_sante(*),
          patisserie_viennoiserie(*), 
          surgeles_produits_frais(*)`
        )
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
            <Card
              className="card_detail"
              title={detail.nom_magasin}
              extra={
                <>
                  <Text type="secondary">
                    {detail.adresse} - {detail.ville} - {detail.departement}
                  </Text>
                </>
              }
            >
              {detail?.boucherie_traiteur.length > 0 && (
                <Divider orientation="left">
                  <Text type="secondary">Boucherie / Traiteur</Text>
                </Divider>
              )}

              {detail?.boucherie_traiteur.map((item) => (
                <div key={item.id}>
                  {item?.item_name} - {item?.total} €
                </div>
              ))}

              {detail?.epicerie_boissons.length > 0 && (
                <Divider orientation="left">
                  <Text type="secondary">Epicerie / Boissons</Text>
                </Divider>
              )}

              {detail?.epicerie_boissons.map((item) => (
                <div key={item.id}>
                  {item.item_name} - {item.total} €
                </div>
              ))}

              {detail?.fruits_legumes.length > 0 && (
                <Divider orientation="left">
                  <Text type="secondary">Fruits / Légumes</Text>
                </Divider>
              )}

              {detail?.fruits_legumes.map((item) => (
                <div key={item.id}>
                  {item?.item_name} - {item?.total} €
                </div>
              ))}

              {detail?.surgeles_produits_frais.length > 0 && (
                <Divider orientation="left">
                  <Text type="secondary">Surgelés / Produits Frais</Text>
                </Divider>
              )}

              {detail?.surgeles_produits_frais.map((item) => (
                <div key={item.id}>
                  {item.item_name} - {item.total} €
                </div>
              ))}

              {detail?.alcools.length > 0 && (
                <Divider orientation="left">
                  <Text type="secondary">Alcools</Text>
                </Divider>
              )}

              {detail?.alcools.map((item) => (
                <div key={item.id}>
                  {item.item_name} - {item.total} €
                </div>
              ))}

              {detail?.hygiene_sante.length > 0 && (
                <Divider orientation="left">
                  <Text type="secondary">Hygiène / Santé</Text>
                </Divider>
              )}

              {detail?.hygiene_sante.map((item) => (
                <div key={item.id}>
                  {item.item_name} - {item.total} €
                </div>
              ))}

              <Divider />
              <div>
                Total: <Text strong>{detail.total} €</Text>
              </div>

              <Divider />

              <div>
                {format(
                  new Date(detail.created_at),
                  'dd MMMM yyyy - HH:mm:ss',
                  {
                    locale: fr,
                  }
                )}
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TicketDetail;
