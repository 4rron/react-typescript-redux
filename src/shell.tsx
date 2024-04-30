import { Outlet } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';

export default function Shell() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}
