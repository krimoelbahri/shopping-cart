import { MainProducts } from "./Shop-components/Main-products";

function Shop(props) {
	return (
		<div id='shop' className='flex-r'>
			<MainProducts handleCartItems={props.handleCartItems} />
		</div>
	);
}
export default Shop;
