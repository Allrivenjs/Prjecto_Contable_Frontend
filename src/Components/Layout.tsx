import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import {NavbarComponent} from "./Navbar";
import {AppShell} from "@mantine/core";

const Layout = () => {
	return (
		<>
		<AppShell
			navbar={<NavbarComponent />}
		>
			<Outlet/>
		</AppShell>
		</>
	);
};



export default Layout;
