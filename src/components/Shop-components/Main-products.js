import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TopImages } from "../data/Top-images";

function MainProducts(props) {
	const [productsArray, setProductsArray] = useState([]);

	const handleAddToCart = (e) => {
		let val = Number(
			e.target.parentNode.previousSibling.childNodes[1].value
		);
		if (val !== 0) {
			let item = TopImages[e.target.id];
			props.handleCartItems(val, item);
			e.target.parentNode.previousSibling.childNodes[1].value = 0;
		}
	};

	const handlePlus = (e) => {
		e.target.previousSibling.value++;
	};
	const handleMinus = (e) => {
		let val = e.target.nextSibling.value;
		if (val !== "0") {
			e.target.nextSibling.value--;
		}
	};
	const handleBlur = (e) => {
		if (!e.target.value) {
			e.target.value = 0;
		}
	};

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
							<i onClick={handleMinus} className='fas fa-minus'></i>
							<input onBlur={handleBlur} type='number' defaultValue={0} />
							<i onClick={handlePlus} className='fas fa-plus'></i>
						</div>
						<div className='product-button-div flex-r'>
							<Link to={`/shop/${i}`}>
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
