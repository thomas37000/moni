import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import moni from '../assets/moni.svg';

const { Header } = Layout;

const HeaderApp = () => {
  return (
    <Header className="header">
      <Link to="/">
        <img src={moni} alt="Moni Logo" className="logo" />
      </Link>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        {/* <Menu.Item key="1" title="Nav 1" items="Nav 1">
          Nav 1
        </Menu.Item>
        <Menu.Item key="2" title="Nav 2" items="Nav 2">
          Nav 2
        </Menu.Item>
        <Menu.Item key="3" title="Nav 3" items="Nav 3">
          Nav 3
        </Menu.Item> */}
      </Menu>
    </Header>
  );
};

export default HeaderApp;
