import { Layout, Menu } from 'antd';
import {
    DollarOutlined,
  PieChartOutlined,
  FileOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import moni from '../assets/moni.svg';
import ShoppingList from './ShoppingList';

const { Header, Content, Sider } = Layout;

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
            <Menu.SubMenu key="sub1" icon={<UserOutlined style={{ fontSize: '23px' }}/>} title="User">
              <Menu.Item key="1">Thomas</Menu.Item>
              <Menu.Item key="2">Julie</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="6" icon={<ShoppingCartOutlined style={{ fontSize: '23px' }}/>}>
              Courses
            </Menu.Item>
            <Menu.Item key="7" icon={<DollarOutlined style={{ fontSize: '23px' }}/>}>
              Loyer
            </Menu.Item>
            <Menu.Item key="8" icon={<FileOutlined style={{ fontSize: '23px' }}/>}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <ShoppingList />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
