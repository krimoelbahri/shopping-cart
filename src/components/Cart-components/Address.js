function Address() {
	return (
		<div id='address' className='flex-c'>
			<h5 className='pd-10px mrg-10px'>Address Details</h5>
			<div id='addressContainer' className='flex-c  mrg-10px'>
				<div className='form-div flex-c'>
					<label className='pd-5px' htmlFor='fullName'>
						Full Name
					</label>
					<input className='address-input' id='fullName' type='text' />
				</div>
				<div className='form-div flex-c '>
					<label className='pd-5px' htmlFor='phoneNumber'>
						Phone Number{" "}
					</label>
					<input
						className='address-input'
						id='phoneNumber'
						type='number'
					/>
				</div>
				<div className='form-div flex-c '>
					<label className='pd-5px' htmlFor='email'>
						Email Address
					</label>
					<input className='address-input' id='email' type='email' />
				</div>
				<div className='form-div flex-r '>
					<div className='sub-form-div flex-c '>
						<label className='pd-5px' htmlFor='state'>
							State
						</label>
						<input className='address-input' id='state' type='text' />
					</div>
					<div className='sub-form-div flex-c '>
						<label className='pd-5px' htmlFor='city'>
							City
						</label>
						<input className='address-input' id='city' type='text' />
					</div>
				</div>
				<div className='form-div flex-c '>
					<label className='pd-5px' htmlFor='addressForm'>
						{" "}
						Address
					</label>
					<input className='address-input' id='addressForm' type='text' />
				</div>
			</div>
		</div>
	);
}
export { Address };
