function CartItems(props) {
	return (
		<div id='cartItems' className='flex-c'>
			<h5 className='pd-10px mrg-10px'>SHOPPING CART</h5>
			<div id='cartItemsContainer' className='flex-c '>
				{props.cartItems.map((product, i) => {
					return (
						<div
							key={product.id}
							className='cart-product-container flex-r mrg-10px'>
							<div className='cart-image-container'>
								<img src={product.url} alt='Product' />
							</div>
							<div className='flex-c'>
								<div className='product-name'>{product.title}</div>
								<div className='product-price'>Price: {product.price}$</div>
								<div className='product-quantity'>
									Quantity: {product.quantity}
								</div>
							</div>
							<div>
								<i
									className='far fa-trash-alt'
									id={i}
									onClick={props.deleteProduct}></i>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export { CartItems };
