import { MainProducts } from "./Shop-components/Main-products";
import { SideBar } from "./Shop-components/Side-bar";

function Shop() {
	return (
		<div id='shop' className='flex-r'>
			<SideBar />
			<MainProducts />
		</div>
	);
}
export default Shop;
