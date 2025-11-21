import { Link } from 'react-router-dom'

const ProductCard = ({ id, image, category }) => {
	return (
		<div className='w-full max-w-sm rounded-[10px] overflow-hidden shadow-md relative'>
			{/* Фон с картинкой и затемнением */}
			<div className='h-[280px] relative'>
				<img
					src={image}
					alt={category}
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-black/50'></div>

				{/* Надпись поверх */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<h2 className='text-4xl md:text-5xl font-bold text-white'>
						{category}
					</h2>
				</div>
			</div>

			{/* Только кнопка по центру */}
			<div className='flex justify-center px-6 py-4 bg-gray-50'>
				<Link
					to={`/product/${id}`}
					className='text-sm text-white whitespace-nowrap bg-blue-500 hover:bg-blue-600 px-5 py-1 rounded-md transition'
				>
					ПОДРОБНЕЕ
				</Link>
			</div>
		</div>
	)
}

export default ProductCard
