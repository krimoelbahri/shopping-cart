import { useEffect, useState } from "react";
import { TopImages } from "../data/Top-images";

function MainProducts() {
	const [productsArray, setProductsArray] = useState([]);
	useEffect(() => {
		setProductsArray(TopImages);
	}, []);
	return (
		<div id='mainProducts' className='flex-r'>
			{productsArray.map((product, i) => {
				return (
					<div key={i} className='shop-product-container flex-c'>
						<div className='image-container'>
							<img src={product} alt='Product' />
						</div>
						<div className='product-name'>Product{i}</div>
						<div className='product-price'>Price: {i}$</div>
						<div className='quantity flex-r'>
							<i className='fas fa-minus'></i>
							<input type='number' value={0} />
							<i className='fas fa-plus'></i>
						</div>
						<div className='product-button-div flex-r'>
							<button className='product-button'>Details</button>
							<button className='product-button'>Add to cart</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export { MainProducts };
