import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="m-auto max-w-7xl p-4 ">
        <Outlet /> 
      </main>
    </>
  );
};

export default MainLayout;