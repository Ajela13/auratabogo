import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import background from '@/assets/background.png';

const MainLayout = () => {
  return (
    <div className={`bg-[url('${background}')] bg-cover bg-center bg-fixed min-h-screen`}>
      <Navbar />
      <main className="m-auto max-w-7xl p-4 ">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
