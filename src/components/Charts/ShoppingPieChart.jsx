// import { Typography } from 'antd';
import { Pie } from '@ant-design/charts';
import shoppingListApi from '../../api/shoppingListApi';

// const { Title } = Typography;

const ShoppingPieChart = () => {
  const categoryData = [];

  shoppingListApi.forEach((item) => {
    item.categories.forEach((category) => {
      let categoryTotal = 0;
      category.ingredients.forEach((ingredient) => {
        categoryTotal += ingredient.prix;
      });

      categoryData.push({
        type: category.nom,
        value: categoryTotal,
      });
    });
  });

  const config = {
    data: categoryData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
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
      <Pie {...config} />
    </>
  );
};

export default ShoppingPieChart;
