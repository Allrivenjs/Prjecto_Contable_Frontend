import React from 'react';
import { Navbar, Group, Code, ScrollArea, createStyles } from '@mantine/core';

import { UserButton } from './UserButton/UserButton';
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import  Logo  from '../Assets/svg/MantineLogo.svg';

import {
	AiFillContainer,
	AiOutlineHome, } from "react-icons/ai";
import { BsCashCoin,
	BsTextParagraph, } from "react-icons/bs";
import { MdOutlineRequestPage, MdSplitscreen } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";

import { HiOutlineDocumentReport } from "react-icons/hi";
const mockdata = [
	{ label: 'Inicio', icon: AiOutlineHome },
	{
		label: 'Presupuesto',
		icon: BsCashCoin,
		initiallyOpened: true,
		links: [
			{ label: 'Rubros', link: '/' },
			// { label: 'Forecasts', link: '/' },
			// { label: 'Outlook', link: '/' },
			// { label: 'Real time', link: '/' },
		],
	},
	{
		label: 'Solicitudes',
		icon: MdOutlineRequestPage ,
		links: [
			{ label: 'SCDP', link: '/' },
			{ label: 'CDP', link: '/' },
			{ label: 'Registro Presupuestal', link: '/' },
		],
	},
	{ label: 'Procesos', icon: VscServerProcess,
		links: [
			{ label: 'Recibo de Satisfaccion', link: '/'},
			{ label: 'Causacion', link: '/'},
			{ label: 'Egreso', link: '/'},
			{ label: 'Egreso Dian', link: '/'},
			{ label: 'Liberaciones', link: '/'},
			{ label: 'Modificaciones', link: '/'},
		]
	},
	{ label: 'Contables', icon: AiFillContainer,
		links: [
			{label: 'Cuentas Contables', link: '/'},
			{label: 'Ingresos', link: '/'},
			{label: 'Bancos', link: '/'},
			{label: 'Depreciaciones', link: '/'},
			{label: 'Reportes Contables', link: '/'},
		]
	},
	{ label: 'Parametros', icon: BsTextParagraph,
		links: [
			{ label: 'Terceros', link: '/'},
			{ label: 'Retenciones', link: '/'},
			{ label: 'Datos Instituciones', link: '/'},
			{ label: 'Entidades Bancarias', link: '/'},
		]
	},
	{
		label: 'Informes',
		icon: HiOutlineDocumentReport,
		links: [
			{ label: 'Reportes Presupuestales', link: '/' },
			{ label: 'Reportes Contables', link: '/' },
			{ label: 'Reportes Sia Contraloria', link: '/' },
		],
	},
	{
		label: 'Cosas',
		icon: MdSplitscreen,

	},
];

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		paddingBottom: 0,
	},

	header: {
		padding: theme.spacing.md,
		paddingTop: 0,
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottom: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	links: {
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
	},

	linksInner: {
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
	},

	footer: {
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},
}));


export function NavbarComponent() {
	const { classes } = useStyles();
	const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

	return (
		<>
		<Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
			<Navbar.Section className={classes.header}>
				<Group position="apart">
					<img src={Logo} alt="logo"/>
					<Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
				</Group>
			</Navbar.Section>

			<Navbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<UserButton
					image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
					name="Ann Nullpointer"
					email="anullpointer@yahoo.com"
				/>
			</Navbar.Section>
		</Navbar>

		</>
	);
}