import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import s from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <div className={s.container}>
        <Outlet />
      </div>
    </>
  );
}
