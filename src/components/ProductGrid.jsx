import ProductCard from './ProductCard'

const ProductGrid = () => {
	return (
		<section id='products' className='max-w-6xl mx-auto px-4 py-12'>
			<h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
				Наши модели
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				<ProductCard
					id='dongfeng-4251'
					image='/images/1.jpeg'
					title='Dongfeng DFL4251A'
				/>
				<ProductCard
					id='dongfeng-3751'
					image='/images/2.jpeg'
					title='Dongfeng DFL3751A'
				/>
				<ProductCard
					id='dongfeng-3400'
					image='/images/3.jpeg'
					title='Dongfeng DFL3400B'
				/>
			</div>
		</section>
	)
}

export default ProductGrid
