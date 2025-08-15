import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div className={`bg-[url('/src/assets/background.png')] bg-cover bg-center bg-fixed min-h-screen`}>
      <Navbar />
      <main className="m-auto max-w-7xl p-4 ">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
