import { Col, Row, Typography } from 'antd';
import ShoppingList from '../components/ShoppingList';
import ShoppingChart from '../components/Charts/ShoppingChart';

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: "1rem" }}>
      <Title level={1} style={{ textAlign: 'center' }}>
        Courses
      </Title>

      <Row>
        <Col span={12}>
          <ShoppingList />
        </Col>
        <Col span={12}>
          <ShoppingChart />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
