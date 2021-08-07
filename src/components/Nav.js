import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav id='nav' className='flex-r s-between'>
			<div id='left-nav' className='flex-r'>
				<Link id='logo-link' to='/'>
					<div id='logo' className='flex-r'>
						<h1 className='pd-10px mrg-10px'>ELBAHRI</h1>
					</div>
				</Link>
				<ul className='list flex-r pd-5px mrg-5px'>
					<Link to='/'>
						<li>Home</li>
					</Link>
					<Link to='/shop'>
						<li>Shop</li>
					</Link>
					<Link to='/contact'>
						<li>Contact</li>
					</Link>
				</ul>
			</div>

			<ul id='right-nav' className='flex-r pd-5px'>
				<Link to='/shop-cart'>
					<li>Cart</li>
				</Link>
				<Link to='/'>
					<li>My Account</li>
				</Link>
			</ul>
		</nav>
	);
}
export default Nav;
