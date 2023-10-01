import { useState, useEffect } from 'react';
import { Table, Typography } from 'antd';
import { supabase } from '../../api/supabase';
import columns from '../Columns/Columns';
// import './ShoppingList.css';

const { Title } = Typography;

const ShoppingCurrentMonth = () => {
  const [shopLists, setShopLists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const currentMonthString = new Date().toLocaleString('fr-FR', {
    month: 'long',
  });

  const monthYear =
    currentMonthString.charAt(0).toUpperCase() + currentMonthString.slice(1);

  useEffect(() => {
    getShopLists();
  }, []);

  async function getShopLists() {
    try {
      const { data, error } = await supabase
        .from('shopping_list')
        .select()
        .order('created_at', { ascending: false })
        .gte('created_at', `${currentYear}-${currentMonth}-01`)
        .lt('created_at', `${currentYear}-${currentMonth + 1}-01`); // Next month's 1° day

      if (error) {
        console.error(error);
        setError(error);
      } else {
        setShopLists(data);
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
    <>
      <Title level={4} type="secondary">
        Liste de courses sur le mois{' '}
        {monthYear === 'Avril' ||
        monthYear === 'Août' ||
        monthYear === 'Octobre'
          ? `d' ${monthYear} ${currentYear}`
          : `de ${monthYear} ${currentYear}`}
      </Title>

      <Table
        columns={columns}
        dataSource={
          shopLists &&
          shopLists.map((shop, index) => ({ ...shop, key: shop.uuid || index }))
        }
      />
    </>
  );
};

export default ShoppingCurrentMonth;
