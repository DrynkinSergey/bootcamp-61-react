import React from 'react'

export const Tailwind = () => {
	const active = false
	return (
		<div className='px-4 py-20'>
			<h1 className='text-3xl  text-[#cd1818] font-bold text-center border-black border-2 py-4 my-4'>Tailwind</h1>
			<div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 font-bold text-2xl'>
				<p
					className={`${active ? 'text-4xl ' : 'text-2xl '}text-black
         sm:text-red-500
         md:text-green-600
         xl:text-cyan-500
         xl:italic
         `}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam enim eligendi assumenda modi rerum
					sapiente nobis ratione voluptates eius nemo incidunt voluptatem dolores, nam impedit exercitationem quo,
					facilis quasi eaque!
				</p>
				<p className='bigText hover:text-blue-500 transition duration-500'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam enim eligendi assumenda modi rerum
					sapiente nobis ratione voluptates eius nemo incidunt voluptatem dolores, nam impedit exercitationem quo,
					facilis quasi eaque!
				</p>
				<p className='text-main'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam enim eligendi assumenda modi rerum
					sapiente nobis ratione voluptates eius nemo incidunt voluptatem dolores, nam impedit exercitationem quo,
					facilis quasi eaque!
				</p>
			</div>
			<div className='flex justify-center flex-row md:flex-col py-4 gap-4'>
				<button className='button'>Click me!</button>
				<button className='border-2 border-red-500 px-10 py-1 hover:bg-red-500 hover:text-white transition duration-300 rounded-xl shadow-xl block sm:hidden'>
					Login!
				</button>
			</div>
			<div className='flex gap-1'>
				<div className='w-1/5 h-[300px] bg-red-200'></div>
				<div className='w-2/5 h-[300px] bg-red-300'></div>
				<div className='w-[10%] h-[300px] bg-red-400'></div>
				<div className='w-[10%] h-[300px] bg-red-500'></div>
				<div className='w-1/5 h-[300px] bg-red-600'></div>
			</div>

			<div className='my-10 h-[500px] bg-gradient-to-r from-blue-500  to-black flex justify-center items-center'>
				<h2 className='text-white font-bold text-8xl underline tracking-[12px]'>Text</h2>
			</div>
		</div>
	)
}
