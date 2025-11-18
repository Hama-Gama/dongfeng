import { useParams } from 'react-router-dom'

const ProductPage = () => {
	const { id } = useParams()

	// Пример данных — можно заменить на fetch
	const product = {
		id,
		title: 'Dongfeng DFL4251A',
		images: [
			'/images/dongfeng1.jpg',
			'/images/dongfeng2.jpg',
			'/images/dongfeng3.jpg',
		],
		specs: {
			Модель: 'DFL4251A',
			Мощность: '420 л.с.',
			Грузоподъёмность: '25 тонн',
			Двигатель: 'Cummins ISGe5-420',
			Кабина: 'Высокая, двухспальная',
		},
	}

	return (
		<section className='max-w-5xl mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-4'>{product.title}</h1>

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
