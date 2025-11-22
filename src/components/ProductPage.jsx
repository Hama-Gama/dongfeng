import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import products from '../productsData'

const ProductPage = () => {
	const { id } = useParams()

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const product = products.find(p => p.id === Number(id))

	if (!product) {
		return <h2 className='text-center text-red-500'>Товар не найден</h2>
	}

	return (
		<section className='max-w-5xl mx-auto px-4 py-8'>
			{/* Заголовок */}
			<div className='mb-6 min-h-[120px]'>
				<h1 className='w-full text-5xl font-bold text-gray-800 text-center leading-tight'>
					{product.name}
				</h1>
				<h2 className='text-xl text-gray-600 text-center mt-2'>
					{product.model}
				</h2>
			</div>

			{/* Галерея */}
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
				{product.images.map((src, i) => (
					<img
						key={i}
						src={src}
						alt={`Фото ${i + 1}`}
						className='w-full h-64 object-cover rounded-md'
					/>
				))}
			</div>

			{/* Характеристики */}
			<div className='bg-gray-100 p-4 rounded-md'>
				<h2 className='text-xl font-semibold mb-2'>Характеристики</h2>
				<ul className='list-disc list-inside text-gray-700 space-y-1'>
					{Object.entries(product.specs).map(([key, value]) => (
						<li key={key}>
							<strong>{key}:</strong> {value}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default ProductPage
