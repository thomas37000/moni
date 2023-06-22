import { Col, Layout, Row, Typography } from 'antd';
import ShoppingList from './ShoppingList';
import ShoppingChart from './Charts/ShoppingChart';
// import HeaderApp from './Header';
import SiderApp from './Sider';

const { Content } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
     
      <Layout>
        <SiderApp />
        <Layout style={{ padding: '0 12px 12px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Title level={1}>Courses</Title>
            <Row
              style={{
                justifyContent: 'space-around',
                background: 'white',
                borderRadius: '15px',
              }}
            >
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
              >
                <ShoppingList />
              </Col>
              <Col
                xs={{
                  span: 11,
                  offset: 1,
                }}
                lg={{
                  span: 6,
                  offset: 2,
                }}
              >
                <ShoppingChart />
              </Col>
            </Row>
            <div
              style={{
                justifyContent: 'space-around',
                marginTop: '1rem',
                background: 'white',
                borderRadius: '15px',
              }}
            >
              {/* <ShoppingPieChart /> */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
