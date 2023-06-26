import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DollarOutlined,
  FileOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SiderApp = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.SubMenu
          key="sub1"
          icon={<UserOutlined style={{ fontSize: '20px' }} />}
          title="User"
        >
          <Menu.Item key="1" title="Thomas">
          <Link to="/">Thomas</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          key="6"
          icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />}
          title="Courses"
        >
          <Link to="/">Courses</Link>
        </Menu.Item>
        <Menu.Item
          disabled
          key="7"
          icon={<DollarOutlined style={{ fontSize: '20px' }} />}
          title="Loyer"
        >
          Loyer
        </Menu.Item>
        <Menu.Item
          disabled
          key="8"
          icon={<FileOutlined style={{ fontSize: '20px' }} />}
          title="Autre"
        >
          Autre
        </Menu.Item>
        <Menu.Item
          key="9"
          icon={<QuestionCircleOutlined style={{ fontSize: '20px' }} />}
          title="about"
        >
          <Link to="/about">A propos</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderApp;
