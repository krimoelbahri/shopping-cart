function CartItems(props) {
	return (
		<div id='cartItems' className='flex-c'>
			<h5 className='pd-10px mrg-10px'>SHOPPING CART</h5>
			<div id='cartItemsContainer' className='flex-c  mrg-10px'>
				{props.cartItems.map((product, i) => {
					return (
						<div key={i} className='cart-product-container flex-r mrg-10px'>
							<div className='cart-image-container'>
								<img src={product.url} alt='Product' />
							</div>
							<div className='flex-c'>
								<div className='product-name'>Product{i}</div>
								<div className='product-price'>Price: {i}$</div>
								<div className='product-quantity'>
									Quantity: {product.quantity}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export { CartItems };
