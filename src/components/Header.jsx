import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import moni from '../assets/moni.svg';

const { Header } = Layout;

const HeaderApp = () => {
  return (
    <Header
      className="header"
      style={{
        height: '50px',
        background:
          'linear-gradient(90deg, rgba(88,168,249,1) 0%, rgba(203,140,240,1) 100%)',
      }}
    >
      <Link to="/dashboard">
        <img src={moni} alt="Moni Logo" className="logo" />
      </Link>

      <div className="responsive-header">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/courses/liste-des-courses">Liste des courses</Link>
        <Link to="/courses/total-courses-annee">Total des courses</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </Header>
  );
};

export default HeaderApp;
