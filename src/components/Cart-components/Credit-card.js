function CreditCard(props) {
	return (
		<div id='creditCard' className='flex-c'>
			<h5 className='pd-10px mrg-10px'>Card Details</h5>
			<div className='card-image-div'>
				<i className='fas fa-credit-card'></i>
			</div>
			<div id='addressContainer' className='flex-c  mrg-10px'>
				<div className='form-div flex-c'>
					<label className='pd-5px' htmlFor='cardName'>
						Name On Card
					</label>
					<input className='address-input' id='cardName' type='text' />
				</div>
				<div className='form-div flex-c '>
					<label className='pd-5px' htmlFor='cardNumber'>
						Card Number{" "}
					</label>
					<input className='address-input' id='cardNumber' type='number' />
				</div>
				<div className='form-div flex-r '>
					<div className='sub-form-div flex-c '>
						<label className='pd-5px' htmlFor='expiration'>
							Expiration Date
						</label>
						<div className='flex-r '>
							<input
								className='address-input mrg-5px'
								id='expiration-day'
								type='text'
							/>
							<input
								className='address-input mrg-5px'
								id='expiration-month'
								type='text'
							/>
						</div>
					</div>
					<div className='sub-form-div flex-c '>
						<label className='pd-5px' htmlFor='cvv'>
							CVV
						</label>
						<input className='address-input' id='cvv' type='text' />
					</div>
				</div>
				<button id='checkOutButton'>Check Out</button>
			</div>
		</div>
	);
}
export { CreditCard };
