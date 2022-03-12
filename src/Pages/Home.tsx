import React from 'react';
import HomeComponent from "../Components/Home/HomeComponent";
import {createStyles, Group, Text, useMantineTheme} from "@mantine/core";


const data = {
	"data": [
		{
			"title": "VALOR CONTRATADO",
			"icon": 'receipt',
			"value": "0",
			"diff": 0
		},
		{
			"title": "VALOR  PAGADO",
			"icon": 'coin',
			"value": "0",
			"diff": 0
		},
		{
			"title": "VALOR POR PAGAR",
			"icon": 'discount',
			"value": "0",
			"diff": 0
		},
		{
			"title": "VALOR POR CONTRATAR",
			"icon": 'user',
			"value": "80,000",
			"diff": 40
		}
	]
}
const data2 = {
	"data": [
		{
			"title": "PRESTACION DE SERVICIOS",
			"icon": 'receipt',
			"value": "80,000",
			"diff": 10
		},
		{
			"title": "VALOR DE INGRESO",
			"icon": 'coin',
			"value": "80,000",
			"diff": 5
		},
	]
}

const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: theme.spacing.xl * 4,
		paddingBottom: theme.spacing.xl * 4,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		fontSize: 35,
		marginBottom: theme.spacing.md,
		textAlign: 'left',

		[theme.fn.smallerThan('sm')]: {
			fontSize: 28,
			textAlign: 'left',
		},
	},
	subtitle: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 800,
		fontSize: 28,
		marginBottom: theme.spacing.md,
		paddingTop: theme.spacing.xs,
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			fontSize: 28,
			textAlign: 'left',
		},
	},

	description: {
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			textAlign: 'left',
		},
	},

}));


const Home = () => {
	const theme = useMantineTheme();
	const { classes } = useStyles();
	return (
		<>
			<Text className={classes.title}>MIS FINANZAS</Text>
			<Text className={classes.subtitle}>GASTOS</Text>
			<HomeComponent data={data.data}/>
			<Text className={classes.subtitle}>Recaudos</Text>
			<HomeComponent data={data2.data}/>
		</>
	);
}




export default Home;
