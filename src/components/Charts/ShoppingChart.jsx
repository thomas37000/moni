import { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { Line } from '@ant-design/charts';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { supabase } from '../../api/supabase';

const { Title } = Typography;

const ShoppingChart = () => {
  const [shopLists, setShopLists] = useState([]);

  useEffect(() => {
    getShopLists();
  }, []);

  async function getShopLists() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const { data } = await supabase
      .from('shopping_list')
      .select()
      .order('created_at', { ascending: true })
      .gte('created_at', `${currentYear}-01-01`) // >= au 1° janvier
      .lte('created_at', `${currentYear}-12-31`); // <= au 31 décembre

    setShopLists(data);
  }

  const data = shopLists.map((item) => ({
    date: format(new Date(item.created_at), 'dd MMMM yyyy', {
      locale: fr,
    }),
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
