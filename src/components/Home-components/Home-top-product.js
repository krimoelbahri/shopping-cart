import React, { useState, useEffect } from "react";
import { TopProductsImages } from "../data/Products";
function TopProducts() {
	const [index, setIndex] = useState(0);
	const [topImage, setTopImage] = useState(TopProductsImages[index]);
	const [isActive, setIsActive] = useState(index);

	const changeImg = (e) => {
		if (e) {
			setIndex(Number(e.target.id));
			setIsActive(Number(e.target.id));
			setTopImage(TopProductsImages[Number(e.target.id)]);
			return;
		}
		if (index < 3) {
			setIndex((index) => index + 1);
			setIsActive(index);
			setTopImage(TopProductsImages[index]);
		} else {
			setIndex(0);
			setIsActive(index);
			setTopImage(TopProductsImages[index]);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			changeImg();
		}, 3000);
		return () => clearInterval(interval);
	});
	return (
		<div id='top-products' className='flex-c'>
			<div className='image-slider'>
				<img src={topImage} alt='Product' />
			</div>
			<div className='flex-r image-bullets'>
				<i
					onClick={changeImg}
					id='0'
					className={`far fa-circle ${isActive === 0 ? "on" : null}`}></i>
				<i
					onClick={changeImg}
					id='1'
					className={`far fa-circle ${isActive === 1 ? "on" : null}`}></i>
				<i
					onClick={changeImg}
					id='2'
					className={`far fa-circle ${isActive === 2 ? "on" : null}`}></i>
				<i
					onClick={changeImg}
					id='3'
					className={`far fa-circle ${isActive === 3 ? "on" : null}`}></i>
			</div>
		</div>
	);
}
export { TopProducts };
