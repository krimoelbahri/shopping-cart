import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AllProducts } from "../data/Products";

function MainProducts(props) {
	const [productsArray, setProductsArray] = useState([]);

	const handleAddToCart = (e) => {
		let val = Number(
			e.target.parentNode.previousSibling.childNodes[1].value
		);
		if (val !== 0) {
			let item = AllProducts[e.target.id];
			props.handleCartItems(val, item);
			e.target.parentNode.previousSibling.childNodes[1].value = 1;
		}
	};

	const handlePlus = (e) => {
		e.target.previousSibling.value++;
	};
	const handleMinus = (e) => {
		let val = e.target.nextSibling.value;
		if (val !== "1") {
			e.target.nextSibling.value--;
		}
	};
	const handleBlur = (e) => {
		if (!e.target.value) {
			e.target.value = 1;
		}
	};

	useEffect(() => {
		setProductsArray(AllProducts);
	}, []);

	return (
		<div id='mainProducts' className='flex-r'>
			{productsArray.map((product, i) => {
				return (
					<div key={product.id} className='shop-product-container flex-c'>
						<div className='image-container'>
							<img src={product.url} alt='Product' />
						</div>
						<div className='product-name'>{product.title}</div>
						<div className='product-price'>Price: {product.price}$</div>
						<div className='quantity flex-r'>
							<i onClick={handleMinus} className='fas fa-minus'></i>
							<input
								className='quantity-input'
								onBlur={handleBlur}
								type='number'
								defaultValue={1}
							/>
							<i onClick={handlePlus} className='fas fa-plus'></i>
						</div>
						<div className='product-button-div flex-r'>
							<Link to={`/shop/${product.id}`}>
								<button className='product-button'>Details</button>
							</Link>
							<button
								id={i}
								onClick={handleAddToCart}
								className='product-button'>
								Add to cart
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export { MainProducts };
