import React from 'react';
import HomeComponent from "../Components/Home/HomeComponent";
import {AppShell} from "@mantine/core";

const data = {
	"data": [
		{
			"title": "Revenue",
			"icon": 'receipt',
			"value": "13,456",
			"diff": 34
		},
		{
			"title": "Profit",
			"icon": 'coin',
			"value": "4,145",
			"diff": -13
		},
		{
			"title": "Coupons usage",
			"icon": 'discount',
			"value": "745",
			"diff": 18
		},
		{
			"title": "New customers",
			"icon": 'user',
			"value": "188",
			"diff": -30
		}
	]
}
const Home = () => {
	return (
		<>
			<h1>MIS FINANZAS</h1>
			<HomeComponent data={data.data}/>
		</>
	);
}




export default Home;
