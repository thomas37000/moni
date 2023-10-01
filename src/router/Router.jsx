import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import HeaderApp from '../components/Header';
import SiderApp from '../components/Sider';
import FooterApp from '../components/Footer';
import ShoppingList from '../components/ShoppingList';
import ShoppingYearTotal from '../components/ShoppingYearTotal';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';
import TicketDetail from '../pages/TicketDetail';

const { Content } = Layout;

const Routter = () => {
  const location = useLocation();

  const getbreadcrumbRoute = (pathname) => {
    if (pathname === '/dashboard') {
      return 'Dashboard';
    } else if (pathname === '/about') {
      return 'À propos';
    } else if (pathname.startsWith('/courses/liste-des-courses')) {
      return 'Liste des courses';
    } else if (pathname.startsWith('/courses/total-courses-annee')) {
      return "Total des courses sur l' année";
    } else if (pathname.startsWith('/courses/ticket/')) {
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
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="dashboard/" element={<Dashboard />}></Route>
              <Route path="about" element={<About />} />
              <Route path="courses">
                <Route>
                  <Route path="liste-des-courses" element={<ShoppingList />} />
                  <Route
                    path="total-courses-annee"
                    element={<ShoppingYearTotal />}
                  />
                </Route>
                <Route path="ticket/:id" element={<TicketDetail />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
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
