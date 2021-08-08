import { Address } from "./Cart-components/Address";
import { CartItems } from "./Cart-components/Cart-items";
import { CreditCard } from "./Cart-components/Credit-card";

function ShopCart(props) {
	return (
		<div id='shopCart' className='flex-r'>
			<div id='shopCartContainer' className='flex-r'>
				<CartItems cartItems={props.cartItems} />
				<Address />
				<CreditCard />
			</div>
		</div>
	);
}
export default ShopCart;
