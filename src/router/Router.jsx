import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderApp from '../components/Header';
import Dashboard from '../components/Dashboard';
import TicketDetail from '../components/TicketDetail';


const Routter = () => {
  return (
    <BrowserRouter>
      <HeaderApp />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="ticket/:id" element={<TicketDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Routter;
