import { Layout, Menu } from 'antd';
import {
  DollarOutlined,
  FileOutlined,
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
          icon={<UserOutlined style={{ fontSize: '23px' }} />}
          title="User"
        >
          <Menu.Item key="1" title="Thomas">
            Thomas
          </Menu.Item>
          <Menu.Item key="2" disabled title="Julie">
            Julie
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          key="6"
          icon={<ShoppingCartOutlined style={{ fontSize: '23px' }} />}
          title="Courses"
        >
          Courses
        </Menu.Item>
        <Menu.Item
          disabled
          key="7"
          icon={<DollarOutlined style={{ fontSize: '23px' }} />}
          title="Loyer"
        >
          Loyer
        </Menu.Item>
        <Menu.Item
          disabled
          key="8"
          icon={<FileOutlined style={{ fontSize: '23px' }} />}
          title="Autre"
        >
          Autre
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderApp;
