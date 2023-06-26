import { Route, Routes, useLocation } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import HeaderApp from '../components/Header';
import Dashboard from '../pages/Dashboard';
import TicketDetail from '../pages/TicketDetail';
import SiderApp from '../components/Sider';
import FooterApp from '../components/Footer';
import About from '../pages/About';

const { Content } = Layout;

const Routter = () => {
  const location = useLocation();

  const getbreadcrumbRoute = (pathname) => {
    if (pathname === '/') {
      return 'Accueil';
    } else if (pathname === '/about') {
      return 'À propos';
    } else if (pathname.startsWith('/ticket/')) {
      return 'Détail du ticket';
    } else {
      return '';
    }
  };

  const breadcrumbRoute = getbreadcrumbRoute(location.pathname);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderApp />
      <Layout>
        <SiderApp />
        <Layout style={{ padding: '0 12px 12px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 12,
              margin: 0,
              minHeight: 280,
              // backgroundColor: '#fff',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
                fontSize: 'small',
              }}
            >
              <Breadcrumb.Item>Thomas</Breadcrumb.Item>
              <Breadcrumb.Item>{breadcrumbRoute}</Breadcrumb.Item>
            </Breadcrumb>
            {/*  */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="about" element={<About />} />
              <Route path="ticket/:id" element={<TicketDetail />} />
            </Routes>
            {/*  */}
          </Content>
          <FooterApp />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Routter;
