import { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { Pie } from '@ant-design/charts';
import { supabase } from '../../api/supabase';

const { Title } = Typography;

const categories = [
  'alcools',
  'boucherie_traiteur',
  'epicerie_boissons',
  'fruits_legumes',
  'hygiene_sante',
  'patisserie_viennoiserie',
  'surgeles_produits_frais',
];

const ShoppingPieChart = () => {
  const [shopLists, setShopLists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const categoryTotals = {};

  shopLists.forEach((ticket) => {
    categories.forEach((category) => {
      if (ticket[category]) {
        ticket[category].forEach((item) => {
          if (categoryTotals[category]) {
            categoryTotals[category] += item.total;
          } else {
            categoryTotals[category] = item.total;
          }
        });
      }
    });
  });

  useEffect(() => {
    getShopListDetail();
  }, []);

  const chartData = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
  }));

  async function getShopListDetail() {
    try {
      const { data, error } = await supabase
        .from('shopping_list')
        .select(
          `*,
          ${categories.map((category) => `${category}(*)`).join(', ')}`
        )
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

  if (loading) return <p>Loading ...</p>;
  if (error !== null) return <p>Problème avec l`&apos;`Api...</p>;

  const config = {
    data: chartData,
    angleField: 'value',
    colorField: 'name',
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '-30%',
      style: {
        textAlign: 'center',
      },
      formatter: (value) => `${value.value.toFixed(2).replace('.', ',')} €`,
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <>
      <Title level={4} type="secondary">
        Total des dépenses par catégories
      </Title>

      <Pie {...config} />
    </>
  );
};

export default ShoppingPieChart;
