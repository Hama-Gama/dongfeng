import { Link } from 'react-router-dom'

const ProductCard = ({ id, image, title }) => {
	return (
		<div className='w-full max-w-sm rounded-lg overflow-hidden shadow-md bg-white'>
			{/* Фото товара */}
			<div className='h-[280px]'>
				<img src={image} alt={title} className='w-full h-full object-cover' />
			</div>

			{/* Название и кнопка */}
			<div className='flex items-center justify-between px-6 py-4 bg-gray-50'>
				<h3 className='text-lg font-semibold text-gray-800 truncate'>
					{title}
				</h3>
				<Link
					to={`/product/${id}`}
					className='text-sm text-white whitespace-nowrap bg-blue-500 hover:bg-blue-600 px-6 py-1 rounded-md transition'
				>
					ПОДРОБНЕЕ
				</Link>
			</div>
		</div>
	)
}

export default ProductCard
