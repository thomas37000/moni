import { useState, useEffect } from 'react';
import { Table, Typography } from 'antd';
import shoppingListApi from '../api/shoppingListApi';
import columns from './Columns/Columns';
import './ShoppingList.css';

const { Title } = Typography;

const ShoppingList = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    setCourseList(shoppingListApi);
  }, []);

  return (
    <>
      <Title level={4} type="secondary">Liste de courses</Title >
      <Table
        columns={columns}
        dataSource={courseList.map((item) => ({ ...item, key: item.ticket }))}
      />
    </>
  );
};

export default ShoppingList;
