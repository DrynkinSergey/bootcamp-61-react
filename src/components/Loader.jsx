import React from 'react'

const Loader = () => {
	return (
		<div className='min-h-screen grid place-content-center'>
			<div className='flex flex-col justify-center'>
				<span className='flex justify-center w-full text-2xl  loading loading-ring loading-lg'></span>
				<h2 className='text-4xl'>Loading...</h2>
			</div>
		</div>
	)
}

export default Loader
