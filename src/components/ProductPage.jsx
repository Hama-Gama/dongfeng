import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
	const { id } = useParams()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const product = {
		id,
		images: ['/images/1.jpg', '/images/1a.jpg', '/images/1b.jpg'],
		specs: {
			'Тип кабины': 'Стандартная крыша с одним спальным местом',
			'Тип привода': '6×4 / 8×4',
			'Колесная база (мм)': '3800 + 1450 / 1850 + 3400 + 1350',
			'Снаряженная масса (кг)': '9500 / 11500',
			Двигатель: 'Cummins ISL 340 50 / Cummins ISL 380 50',
			'Уровень выбросов': 'Евро-5',
			'Максимальная мощность (HP)': '340 / 380',
			'Максимальный крутящий момент (N·M)': '1500 / 1700',
			'Коробка передач': 'FAST 12J180T (12 передач)',
			'Передний мост (T)': '7 / 7×2',
			'Задний мост (T)': '13×2',
			'Главное передаточное число': '5,92',
			'Передняя подвеска': '10-листовая рессора (многолистовая)',
			'Задняя подвеска': '12-листовая / 13-листовая рессора (многолистовая)',
			Шины: '315/80R22.5',
			'Топливный бак (L)': '400',
		},
	}

	return (
		<section className='max-w-5xl mx-auto px-4 py-8'>
			<div className='mb-6 min-h-[120px]'>
				<h1 className='w-full text-5xl font-bold text-gray-800 text-center leading-tight'>
					Dongfeng
				</h1>
				<h2 className='text-xl text-gray-600 text-center mt-2'>
					DFH3330DJ80-K22R
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
