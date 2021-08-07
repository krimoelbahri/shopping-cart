import React from "react";
import { HomeInfo } from "./Home-components/Home-info";
import { TopProducts } from "./Home-components/Home-top-product";

function Home() {
	return (
		<div id='home' className='flex-r'>
			<div id='homeContainer' className='flex-r'>
				<HomeInfo />
				<TopProducts />
			</div>
		</div>
	);
}
export default Home;
