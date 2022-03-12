import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import {NavbarComponent} from "./Navbar";
import {AppShell, Card, createStyles} from "@mantine/core";
const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		alignItems: "center",
		marginTop: (theme.spacing.lg + 2) * 2
	},
}));

const Layout = () => {
	const { classes, theme } = useStyles();
	return (
		<>
		<AppShell
			navbar={<NavbarComponent />}
		>
			<Card withBorder radius="md" className={classes.card}>
				<Outlet/>
			</Card>
		</AppShell>
		</>
	);
};



export default Layout;
