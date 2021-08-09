import { Link } from "react-router-dom";

function Nav(props) {
	return (
		<nav id='nav' className='flex-r s-between'>
			<div id='left-nav' className='flex-r'>
				<Link id='logo-link' to='/shopping-cart'>
					<div id='logo' className='flex-r'>
						<h1 className='pd-10px mrg-10px'>ELBAHRI</h1>
					</div>
				</Link>
				<ul className='list flex-r pd-5px mrg-5px'>
					<Link to='/shopping-cart'>
						<li>Home</li>
					</Link>
					<Link to='/shop'>
						<li>Shop</li>
					</Link>
				</ul>
			</div>

			<ul id='right-nav' className='flex-r pd-5px'>
				<li>
					<p className='cart-items-number'>{props.itemsNumber}</p>
				</li>
				<Link to='/shop-cart'>
					<li>
						<i className='fas fa-shopping-cart'></i>
					</li>
				</Link>
				<Link to='/shopping-cart'>
					<li>
						<i className='fas fa-user-circle'></i>
					</li>
				</Link>
			</ul>
		</nav>
	);
}
export default Nav;
