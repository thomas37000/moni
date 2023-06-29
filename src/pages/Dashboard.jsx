import { Typography } from 'antd';
import ShoppingList from '../components/ShoppingList';
import ShoppingChart from '../components/Charts/ShoppingChart';
import ShoppingPieChart from '../components/Charts/ShoppingPieChart';

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Title level={1}>
        Courses
      </Title>

      <div className='shoppingList'>
        <ShoppingList />
      </div>

      <div className='shoppingChart'>
        <ShoppingChart />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <ShoppingPieChart />
      </div>
    </div>
  );
};

export default Dashboard;
