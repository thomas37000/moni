import { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { Line } from '@ant-design/charts';
import { supabase } from '../../api/supabase';

const { Title } = Typography;

const ShoppingChart = () => {
  const [shopLists, setShopLists] = useState([]);

  console.log("CHART", shopLists);

  useEffect(() => {
    getShopLists();
  }, []);

  async function getShopLists() {
    const { data } = await supabase.from('shopping_list').select();
    setShopLists(data);
  }

  const data = shopLists.map((item) => ({
    date: item.created_at,
    total: item.total,
  }));


  // Configurations du graphique
  const config = {
    data,
    xField: 'date',
    yField: 'total',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
    yAxis: {
      title: {
        text: 'Prix',
      },
      formatter: (value) => `${value} €`,
    },
  };

  return (
    <>
      <Title level={4} type="secondary">
        Prix total des tickets sur l&apos; année
      </Title>
      <Line {...config} />
    </>
  );
};

export default ShoppingChart;
