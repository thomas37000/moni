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
  const [totalSums, setTotalSums] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTotalShopLists();
  }, []);

  useEffect(() => {
    if (shopLists.length > 0) {
      const totalsByYear = shopLists.reduce((acc, shop) => {
        const year = format(new Date(shop.created_at), 'yyyy');
        const monthYear = format(new Date(shop.created_at), 'MMMM yyyy', {
          locale: fr,
        });

        // Initialiser la structure pour l'année si elle n'existe pas encore
        acc[year] = acc[year] || {
          totalSumYear: 0,
          totalSumMonth: {},
        };

        // Accumuler le total pour l'année
        acc[year].totalSumYear += shop.total;
        // Accumuler le total par mois pour l'année
        acc[year].totalSumMonth[monthYear] =
          (acc[year].totalSumMonth[monthYear] || 0) + shop.total;

        return acc;
      }, {});

      setTotalSums(totalsByYear);
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

  const sortedYears = Object.keys(totalSums).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <>
      {sortedYears.map((year) => {
        const { totalSumYear, totalSumMonth } = totalSums[year];
        return (
          <div key={year}>
            <Title level={4} type="secondary" style={{ marginTop: '2Opx' }}>
              Total des courses sur l&apos; année {year}:{' '}
              <span style={{ color: '#000' }}>{totalSumYear.toFixed(2)} €</span>
            </Title>

            <Table
              columns={columnsMonthTotal}
              dataSource={Object.entries(totalSumMonth).map(
                ([monthYear, total]) => ({
                  mois: monthYear.charAt(0).toUpperCase() + monthYear.slice(1),
                  total,
                })
              )}
              pagination={false}
            />
            <div style={{ color: 'transparent', marginTop: '16px' }}>
              div qui remplace la pagination pour faire un margin top de 16px{' '}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShoppingYearTotal;
