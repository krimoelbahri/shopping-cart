import { Link } from "react-router-dom";

function HomeInfo() {
	return (
		<div id='homeInfo' className='flex-c'>
			<div className='logo flex-r'>
				<h1 className='pd-10px mrg-10px'>ELBAHRI</h1>
			</div>
			<div className='flex-c'>
				<p>Going for an adventure!</p>
				<p>Going back to school!</p>
				<p>Come pick your styled backpack at the best store ever </p>
			</div>
			<Link to='/shop'>
				<button className='logo flex-r'>
					<h1 className='pd-5px mrg-5px'>Shop NOW</h1>
				</button>
			</Link>
		</div>
	);
}
export { HomeInfo };
