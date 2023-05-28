import { Col, Layout, Menu, Row, Typography } from 'antd';
import {
  DollarOutlined,
  FileOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import moni from '../assets/moni.svg';
import ShoppingList from './ShoppingList';
import ShoppingChart from './Charts/ShoppingChart';
import ShoppingPieChart from './Charts/ShoppingPieChart';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <img src={moni} alt="Moni Logo" className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Nav 1</Menu.Item>
          <Menu.Item key="2">Nav 2</Menu.Item>
          <Menu.Item key="3">Nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.SubMenu
              key="sub1"
              icon={<UserOutlined style={{ fontSize: '23px' }} />}
              title="User"
            >
              <Menu.Item key="1">Thomas</Menu.Item>
              <Menu.Item key="2" disabled block>
                Julie
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item
              key="6"
              icon={<ShoppingCartOutlined style={{ fontSize: '23px' }} />}
            >
              Courses
            </Menu.Item>
            <Menu.Item
              disabled
              block="true"
              key="7"
              icon={<DollarOutlined style={{ fontSize: '23px' }} />}
            >
              Loyer
            </Menu.Item>
            <Menu.Item
              disabled
              block="true"
              key="8"
              icon={<FileOutlined style={{ fontSize: '23px' }} />}
            >
              Autre
            </Menu.Item>
          </Menu>
        </Sider>

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
              <ShoppingPieChart />{' '}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
