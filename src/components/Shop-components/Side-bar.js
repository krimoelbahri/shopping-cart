function SideBar() {
	return (
		<div id='sideBar' className='flex-c'>
			<h3 className='pd-10px'> CATEGORIES</h3>
			<div id='catagories' className='flex-c '>
				<h4 className='pd-5px' style={{ fontWeight: "bold" }}>
					All
				</h4>
				<h4 className='pd-5px'>Hiking</h4>
				<h4 className='pd-5px'>School</h4>
				<h4 className='pd-5px'>men</h4>
				<h4 className='pd-5px'>Women</h4>
				<h4 className='pd-5px'>Kids</h4>
			</div>
		</div>
	);
}
export { SideBar };
