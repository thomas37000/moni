import { useState, useEffect } from 'react';
import { Table, Typography } from 'antd';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { supabase } from '../api/supabase';
import columnsMonthTotal from './Columns/ColumnsMonthTotal';
// import './ShoppingList.css';

const { Title } = Typography;

const ShoppingYearTotal = () => {
  const [shopLists, setShopLists] = useState([]);
  const [totalSumYear, setTotalSumYear] = useState(0);
  const [totalSumMonth, setTotalSumMonth] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTotalShopLists();
  }, []);

  useEffect(() => {
    if (shopLists.length > 0) {
      const totalByMonth = shopLists.reduce((acc, shop) => {
        const monthYear = format(new Date(shop.created_at), 'MMMM yyyy', {
          locale: fr,
        });
        acc[monthYear] = (acc[monthYear] || 0) + shop.total;
        return acc;
      }, {});

      setTotalSumMonth(totalByMonth);
    }

    if (shopLists.length > 0) {
      const totalDesCourses = shopLists.reduce(
        (acc, shop) => acc + shop.total,
        0
      );
      setTotalSumYear(totalDesCourses);
    }
  }, [shopLists]);

  async function getTotalShopLists() {
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

  if (loading) return <p>Loading ...</p>;
  if (error !== null) return <p>Problème avec l`&apos;`Api...</p>;

  return (
    <>
      <Title level={4}>
        {/* toFixed(2) pour ne pas avoir 13 décimales après la virgule */}
        {/* exemple :  totalSumYear.toFixed(2) ? 741,30 € : 741.3000000000001 € */}
        Total des courses sur l&apos; année : {totalSumYear.toFixed(2)} €
      </Title>

      <Table
        columns={columnsMonthTotal}
        dataSource={Object.entries(totalSumMonth).map(([monthYear, total]) => ({
          mois: monthYear.charAt(0).toUpperCase() + monthYear.slice(1),
          total,
        }))}
      />
    </>
  );
};

export default ShoppingYearTotal;
