import { Link } from "react-router-dom";

function Nav() {
	return (
		<ul id='nav'>
			<Link to='/'>
				<div id='logo' className='flex-r pd-5px mrg-5px'></div>
			</Link>
			<div className='flex-r pd-5px mrg-5px'>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/shop'>
					<li>Shop</li>
				</Link>
				<Link to='/shop-cart'>
					<li>Cart</li>
				</Link>
			</div>
		</ul>
	);
}
export default Nav;
