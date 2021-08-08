import { MainProducts } from "./Shop-components/Main-products";
import { SideBar } from "./Shop-components/Side-bar";

function Shop(props) {
	return (
		<div id='shop' className='flex-r'>
			<SideBar />
			<MainProducts handleCartItems={props.handleCartItems} />
		</div>
	);
}
export default Shop;
