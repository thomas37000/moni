import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import moni from '../assets/moni.svg';

const { Header } = Layout;

const HeaderApp = () => {
  return (
    <Header className="header" style={{ height: '50px' }}>
      <Link to="/">
        <img src={moni} alt="Moni Logo" className="logo" />
      </Link>
    </Header>
  );
};

export default HeaderApp;
