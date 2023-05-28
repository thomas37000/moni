import { useState, useEffect } from 'react';
import { Table } from 'antd';
import shoppingListApi from '../api/shoppingListApi';
import columns from './Columns';
import './ShoppingList.css';

const ShoppingList = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    setCourseList(shoppingListApi);
  }, []);

  return (
    <div className="table-wrapper">
      <Table
        columns={columns}
        dataSource={courseList.map((item) => ({ ...item, key: item.ticket }))}
      />
      <div className="scroll-bar" />
    </div>
  );
};

export default ShoppingList;
