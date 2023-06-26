import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderApp from '../components/Header';
import Dashboard from '../components/Dashboard';
import TicketDetail from '../components/TicketDetail';
import SiderApp from '../components/Sider';

const { Content } = Layout;

const Routter = () => {
  return (
    <BrowserRouter>
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
              }}
            >
              {/*  */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="ticket/:id" element={<TicketDetail />} />
              </Routes>
              {/*  */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Routter;
