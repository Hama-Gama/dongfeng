import { useParams } from 'react-router-dom'
import categories from '../categoriesData'
import { useLayoutEffect } from 'react'

const CategoryPage = () => {
	const { id } = useParams()
	const category = categories.find(c => c.id === Number(id))

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	if (!category) {
		return <h2 className='text-center text-red-500'>Категория не найдена</h2>
	}

	return (
		<section className='max-w-6xl mx-auto px-4 py-8 space-y-12'>
			<h1 className='text-4xl font-bold text-center text-gray-800'>
				{category.name}
			</h1>

			{category.models.map((model, index) => (
				<div key={index} className='space-y-6'>
					<h2 className='text-2xl font-semibold text-gray-700 text-center'>
						Модель: {model.model}
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						{model.images.map((src, i) => (
							<img
								key={i}
								src={src}
								alt={`Фото ${i + 1}`}
								className='w-full h-64 object-cover rounded-md'
							/>
						))}
					</div>

					<div className='bg-gray-100 p-4 rounded-md'>
						<h3 className='text-xl font-semibold mb-2'>Характеристики</h3>
						<ul className='list-disc list-inside text-gray-700 space-y-1'>
							{Object.entries(model.specs).map(([key, value]) => (
								<li key={key}>
									<strong>{key}:</strong> {value}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</section>
	)
}

export default CategoryPage
