import { Typography } from 'antd';
import { Line } from '@ant-design/charts';
import shoppingListApi from '../api/shoppingListApi';

const { Title } = Typography;

const ShoppingChart = () => {
  const data = shoppingListApi.map((item) => ({
    date: item.date,
    total: `${item.prix_total} €`,
  }));

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
