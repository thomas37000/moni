import { Col, Row, Typography } from 'antd';
import ShoppingList from './ShoppingList';
import ShoppingChart from './Charts/ShoppingChart';

const { Title } = Typography;

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;
