import { useState, useEffect } from 'react';
import { Table, Typography } from 'antd';
import { supabase } from '../api/supabase';
import columns from './Columns/Columns';
// import './ShoppingList.css';

const { Title } = Typography;

const ShoppingList = () => {
  const [shopLists, setShopLists] = useState([]);
  // console.log(shopLists);

  useEffect(() => {
    getShopLists();
  }, []);

  async function getShopLists() {
    const { data } = await supabase
      .from('shopping_list')
      .select();
    setShopLists(data);
  }

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
