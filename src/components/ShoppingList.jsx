import { useState, useEffect } from 'react';
import { Table, Typography, Skeleton } from 'antd';
import { supabase } from '../api/supabase';
import columns from './Columns/Columns';
// import './ShoppingList.css';

const { Title } = Typography;

const ShoppingList = () => {
  const [shopLists, setShopLists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShopLists();
  }, []);

  async function getShopLists() {
    try {
      const { data, error } = await supabase
        .from('shopping_list')
        .select()
        .order('created_at', { ascending: false });

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

  if (loading) return <Skeleton active />;
  if (error !== null) return <p>Problème avec l`&apos;`Api...</p>;

  return (
    <>
      <Title level={4} type="secondary">
        Liste de courses
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

export default ShoppingList;
